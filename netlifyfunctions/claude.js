exports.handler = async (event) => {
  try {
    const { messages, systemPrompt } = JSON.parse(event.body);
    const apiKey = process.env.VITE_ANTHROPIC_API_KEY;
    
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

    const data = await res.json();
    const text = data.content?.[0]?.text || 'I\'m here — take your time. 🌿';
    
    return {
      statusCode: 200,
      body: JSON.stringify({ text })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};