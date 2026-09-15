import { useState } from 'react';

export function useSseStream() {
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const startStream = async (endpoint: string, payload: Record<string, unknown>) => {
    setIsLoading(true);
    setOutput('');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.body) throw new Error('ReadableStream not supported');
      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      let done = false;
      while (!done) {
        const { value, done: isDone } = await reader.read();
        done = isDone;
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split('\n\n');
          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const dataStr = line.replace('data: ', '').trim();
              if (dataStr === '[DONE]') {
                done = true;
                break;
              }
              try {
                const parsed = JSON.parse(dataStr);
                if (parsed.text) setOutput((prev) => prev + parsed.text);
              } catch {
                // Ignore chunk split frames
              }
            }
          }
        }
      }
    } catch (err) {
      console.error('SSE Stream error:', err);
      setOutput('⚠️ Failed to complete stream connection with backend.');
    } finally {
      setIsLoading(false);
    }
  };

  return { output, isLoading, startStream, setOutput };
}