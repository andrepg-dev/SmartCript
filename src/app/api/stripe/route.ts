import { checkout } from "@/services/stripe/checkout"

export async function POST(req: Request) {
  const body = await req.json();

  // Validar que el body tenga los campos necesarios
  if (!body.id || !body.name || !body.images || !body.price) {
    return Response.json({ error: 'Missing fields' }, { status: 400 })
  }

  const { id, name, images, price } = body as Product
  const res = await checkout({ id, name, images, price })

  return Response.json(res)
}