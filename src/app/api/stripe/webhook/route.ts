import { STRIPE_CONSTANTS } from "@/constants/stripe-constants";
import Stripe from "stripe";
import { headers } from 'next/headers'

const stripe = new Stripe(STRIPE_CONSTANTS.STRIPE_SECRET_KEY);
const signInSecret = STRIPE_CONSTANTS.STRIPE_SIGN_IN_SECRET;

export async function POST(req: Request) {
  const body = await req.text();
  const headersList = headers();

  const headerStripeSignature = headersList.get('stripe-signature') ?? '';

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, headerStripeSignature, signInSecret);
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Webhook Error" }, { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      // TODO: Se deben de obtener los valores de la metadata para guardar en la base de datos
      // Guardar en una base de datos
      // Enviar un correo electrónico
      // etc.

      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
      break;
  }

  return Response.json({ ok: true }, { status: 200 });
}