import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';

export async function POST(req: Request) {
  try {
    const { text, type } = await req.json();

    if (!text) {
      return Response.json({ error: 'Text is required' }, { status: 400 });
    }

    const prompt = type === 'youtube'
        ? `Resume el siguiente video de YouTube basándote en su transcripción. Extrae los puntos clave y hazlo de forma estructurada en español:\n\n${text}`
        : `Resume el siguiente documento extrayendo lo más importante y estructurándolo en puntos clave en español:\n\n${text}`;

    const { text: summary } = await generateText({
      model: openai('gpt-4o-mini'),
      prompt: prompt,
    });

    return Response.json({ summary });
  } catch (error) {
    console.error('Error in resume API:', error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
