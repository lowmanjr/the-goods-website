"use client";

import Image from "next/image";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { subscribe } from "@/app/actions/subscribe";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-lg bg-[#D64933] px-6 py-4 text-base font-bold tracking-wide text-white transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto sm:self-start"
      style={{ fontFamily: "var(--font-montserrat)" }}
    >
      {pending ? "SENDING..." : "DOWNLOAD NOW"}
    </button>
  );
}

export default function Hero() {
  const [state, formAction] = useActionState(subscribe, null);

  return (
    <section
      id="cheat-sheet"
      className="w-full bg-[#FAF8F5] px-6 py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Left — Copy + Email Capture */}
        <div className="flex flex-col">
          <h1
            className="text-4xl font-black leading-tight tracking-tight text-[#2C2621] md:text-5xl"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Your guide to a toxic-free kitchen &amp; a smoothly running home.
          </h1>

          <p
            className="mt-4 text-lg leading-relaxed text-[#2C2621]/75"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            Stop guessing! Grab my{" "}
            <span className="font-semibold text-[#2C2621]">
              FREE Produce Wash Cheat Sheet
            </span>{" "}
            for exact ratios on washing berries, prepping garlic, and safely
            cooling hot food to avoid the bacterial Danger Zone.
          </p>

          {/* Email Capture Form */}
          {state?.success ? (
            <p
              className="mt-8 font-bold text-[#D36A18]"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              ✨ Success! Check your inbox for your Cheat Sheet.
            </p>
          ) : (
            <form action={formAction} className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  type="text"
                  name="name"
                  placeholder="First Name"
                  className="w-full rounded-lg border border-[#2C2621]/20 bg-white px-4 py-3 text-[#2C2621] placeholder-[#2C2621]/40 focus:border-[#D36A18] focus:outline-none focus:ring-2 focus:ring-[#D36A18]/30"
                  style={{ fontFamily: "var(--font-open-sans)" }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full rounded-lg border border-[#2C2621]/20 bg-white px-4 py-3 text-[#2C2621] placeholder-[#2C2621]/40 focus:border-[#D36A18] focus:outline-none focus:ring-2 focus:ring-[#D36A18]/30"
                  style={{ fontFamily: "var(--font-open-sans)" }}
                />
              </div>

              <SubmitButton />

              {state?.error && (
                <p
                  className="text-sm font-semibold text-[#D64933]"
                  style={{ fontFamily: "var(--font-open-sans)" }}
                >
                  {state.error}
                </p>
              )}

              <p
                className="text-xs text-gray-500"
                style={{ fontFamily: "var(--font-open-sans)" }}
              >
                We respect your inbox. Unsubscribe at any time.
              </p>
            </form>
          )}
        </div>

        {/* Right — Cheat Sheet Mockup */}
        <div className="flex items-center justify-center">
          <Image
            src="/cheat-sheet.png"
            alt="Produce Wash Cheat Sheet"
            width={500}
            height={650}
            className="rounded-xl shadow-2xl w-full max-w-md border border-gray-100"
            priority
          />
        </div>
      </div>
    </section>
  );
}
