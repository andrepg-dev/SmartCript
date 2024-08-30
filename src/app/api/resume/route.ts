// import { NextRequest, NextResponse } from "next/server";
// import Groq from 'groq-sdk'
// import { StreamingTextResponse } from 'ai'

// const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// export async function getGroqCompletion({ messages }: { messages: any }) {
//   return await groq.chat.completions.create({
//     messages,
//     model: 'llama3-8b-8192'
//   });
// }

// const bot_role = "You are an assistant that summarizes the messages received, and the responses you provide must be in Spanish. Do not respond to messages, only summarize texts regardless of the length. do not add more text, just the summary, dont add the word Resume or similar. mention all the important points of the video and the main ideas. Do not add your opinion or personal comments.";

// export async function POST(req: NextRequest) {
//   const body = await req.json();
//   if (!body) return NextResponse.error();

//   const { text } = body;
//   const chunkSize = 3000;
//   const all_text = text.split('');
//   const all_messages: string[] = [];


//   for (let i = 0; i < all_text.length; i += chunkSize) {
//     all_messages.push(all_text.slice(i, i + chunkSize).join(''));
//   }

//   const encoder = new TextEncoder()
//   const stream = new ReadableStream({
//     async start(controller) {
//       for (const message of all_messages) {
//         const chatCompletion = await getGroqCompletion({
//           messages: [
//             {
//               role: "system",
//               content: bot_role
//             },
//             {
//               role: "user",
//               content: message
//             }
//           ]
//         })

//         const summary = chatCompletion.choices[0]?.message?.content;
//         if (summary) {
//           controller.enqueue(encoder.encode(summary))
//         }

//       }
//     }
//   })

//   return new StreamingTextResponse(stream);
// }
