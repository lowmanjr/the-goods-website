import Link from "next/link";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id: sessionId } = await searchParams;

  if (!sessionId) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center bg-[#FAF8F5]">
        <div className="flex flex-col items-center max-w-md">
          <h1
            className="text-3xl font-bold mb-4 text-[#2C2621]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Invalid Session
          </h1>
          <p
            className="text-lg text-gray-600 mb-8"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            Please complete checkout first.
          </p>
          <Link
            href="/"
            className="bg-[#D64933] text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Return Home
          </Link>
        </div>
      </main>
    );
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return (
        <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center bg-[#FAF8F5]">
          <div className="flex flex-col items-center max-w-md">
            <h1
              className="text-3xl font-bold mb-4 text-[#2C2621]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Payment Not Verified
            </h1>
            <p
              className="text-lg text-gray-600 mb-8"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              We could not confirm your payment. Please contact us if you
              believe this is an error.
            </p>
            <Link
              href="/"
              className="bg-[#D64933] text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Return Home
            </Link>
          </div>
        </main>
      );
    }

    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center bg-[#FAF8F5]">
        <div className="flex flex-col items-center max-w-md">
          <span className="text-6xl mb-6">🎉</span>

          <h1
            className="text-4xl font-bold mb-4 text-[#2C2621]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            You&apos;re In! 🎉
          </h1>

          <p
            className="text-lg text-gray-600 mb-8"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            Your payment was successful. Click below to download your Complete
            Toxic-Free Kitchen Detox guide.
          </p>

          <a
            href="https://storage.googleapis.com/mailerlite-uploads-prod/2215718/VfPKIZqF0TdewulQUKQugUzt4dJ5OIO17tCBJdHt.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D64933] text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Download Your Guide
          </a>

          <Link
            href="/"
            className="mt-8 text-sm text-gray-500 underline"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            Return Home
          </Link>
        </div>
      </main>
    );
  } catch {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center bg-[#FAF8F5]">
        <div className="flex flex-col items-center max-w-md">
          <h1
            className="text-3xl font-bold mb-4 text-[#2C2621]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Something Went Wrong
          </h1>
          <p
            className="text-lg text-gray-600 mb-8"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            We couldn&apos;t verify your session. Please contact us for help.
          </p>
          <Link
            href="/"
            className="bg-[#D64933] text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Return Home
          </Link>
        </div>
      </main>
    );
  }
}
