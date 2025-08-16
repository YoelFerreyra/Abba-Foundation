import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const payment_id = searchParams.get("payment_id");
  const status = searchParams.get("status");
  const external_reference = searchParams.get("external_reference");
  const merchant_order_id = searchParams.get("merchant_order_id");

  return Response.json({
    message: "Pago pendiente",
    payment_id,
    status,
    external_reference,
    merchant_order_id,
  });
}
