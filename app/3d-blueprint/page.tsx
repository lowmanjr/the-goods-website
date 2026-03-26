"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BlueprintSqueezePage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: wire up real email capture (MailerLite, etc.)
    router.push("/3d-blueprint/dashboard");
  }

  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      {/* Nav bar accent line */}
      <div className="h-1 w-full bg-[#D36A18]" />

      <div className="mx-auto flex max-w-3xl flex-col items-center px-5 py-16 text-center">
        {/* Eyebrow */}
        <span
          className="mb-4 inline-block rounded-full bg-[#D36A18]/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#D36A18]"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Free Blueprint — Instant Access
        </span>

        {/* Headline */}
        <h1
          className="mb-6 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          How I Generated{" "}
          <span className="text-[#D36A18]">3.5 Million Views</span> With a
          Talking Blueberry{" "}
          <span className="text-white/70">(Without Knowing 3D Animation)</span>
        </h1>

        {/* Subheadline */}
        <p
          className="mb-10 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          Everyone thinks viral edutainment requires complex software and weeks
          of rendering. It doesn&apos;t. I use a handful of plug-and-play AI
          tools to build these videos in hours. These numbers are achievable,
          and the process is simpler than you think. Drop your email below to
          unlock my exact scripting formula and asset generation blueprint for
          free.
        </p>

        {/* Proof image */}
        <div className="mb-10 w-full">
          <Image
            src="/proof.PNG"
            width={600}
            height={400}
            alt="Analytics"
            className="mx-auto rounded-xl shadow-2xl"
            priority
          />
        </div>

        {/* Email capture form */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3.5 text-sm text-white placeholder-white/30 outline-none ring-0 transition focus:border-[#D36A18] focus:ring-2 focus:ring-[#D36A18]/40"
            style={{ fontFamily: "var(--font-open-sans)" }}
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-[#D36A18] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#b85a12] disabled:opacity-60"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {loading ? "Unlocking…" : "Unlock the Free Blueprint"}
          </button>
        </form>

        <p
          className="mt-4 text-xs text-white/30"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </main>
  );
}
