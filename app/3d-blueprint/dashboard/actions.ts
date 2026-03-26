"use server";

import Stripe from "stripe";
import { cookies } from "next/headers";

export async function verifyStripeSession(sessionId: string): Promise<boolean> {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === "paid") {
      const cookieStore = await cookies();
      cookieStore.set("blueprint_unlocked", "true", {
        httpOnly: true,
        secure: true,
        maxAge: 31536000,
      });
      return true;
    }

    return false;
  } catch {
    return false;
  }
}
