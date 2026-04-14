import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export async function POST(req: Request) {
  try {
    const { messages, context } = await req.json();

    const systemPrompt = `Eres un asistente de estudio experto. Tienes acceso al siguiente contexto (un resumen de un video o documento):

    ${context}

    Tu tarea es responder preguntas de manera útil, precisa y concisa basándote ÚNICAMENTE en el contexto proporcionado. Si la respuesta no está en el contexto, indícalo amablemente. Responde siempre en español.`;

    const result = await streamText({
      model: openai('gpt-4o-mini'),
      system: systemPrompt,
      messages,
    });

    return result.toAIStreamResponse();
  } catch (error) {
    console.error('Error in chat API:', error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
