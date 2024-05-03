import { MailgunMessageData } from "@/interfaces/emails";
import { Sender } from "@/services/emails/sender";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // Obtener body
  const body = await req.json();

  if (!body) return Response.error();
  const { to, subject, text } = body as unknown as MailgunMessageData;

  // Body debe de tener to, text y subject
  if (!to || !text || !subject) {
    return NextResponse.json({
      error: '{ to, text, subject } are required'
    }, { status: 400 });
  }

  // Enviar email
  try {
    // Responder
    const res = await Sender({ to, text, subject });
    return Response.json({ ok: res?.status === 200, status: res?.status })
  } catch (error) {
    return Response.error();
  }
}