import Link from "next/link";

export default function SuccessPage() {
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
}
