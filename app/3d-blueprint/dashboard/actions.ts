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

      const customerEmail = session.customer_details?.email;
      if (customerEmail) {
        try {
          await fetch("https://connect.mailerlite.com/api/subscribers", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
            },
            body: JSON.stringify({
              email: customerEmail,
              groups: ["183029978250610449"],
            }),
          });
        } catch (error) {
          console.error("MailerLite sync failed:", error);
        }
      }

      return true;
    }

    return false;
  } catch {
    return false;
  }
}
