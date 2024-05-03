import { STRIPE_CONSTANTS } from "@/constants/stripe-constants";
import Stripe from "stripe";

const stripe = new Stripe(STRIPE_CONSTANTS.STRIPE_SECRET_KEY);

// TODO: Agregar la metada para guardar el id del producto

export async function checkout({ id, name, images, price }: Product) {
  const session = await stripe.checkout.sessions.create({
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
    payment_method_types: ['card'],
    mode: 'payment',
    currency: 'usd',
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name,
            images,
          },
          unit_amount: price * 100,
        },
        quantity: 1,
      }
    ],
  })

  return session;
}