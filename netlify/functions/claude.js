exports.handler = async (event) => {
  try {
    let body;
    try {
      body = JSON.parse(event.body);
    } catch (e) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid JSON in request body' })
      };
    }

    const { messages, systemPrompt } = body;
    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'API key not configured' })
      };
    }

    if (!messages || !systemPrompt) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing messages or systemPrompt' })
      };
    }

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: systemPrompt,
        messages: messages
      })
    });

    if (!res.ok) {
      const errorData = await res.json();
      return {
        statusCode: res.status,
        body: JSON.stringify({ error: errorData.error?.message || 'API error' })
      };
    }

    const data = await res.json();
    const text = data.content?.[0]?.text || 'I\'m here — take your time. 🌿';

    return {
      statusCode: 200,
      body: JSON.stringify({ text })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
