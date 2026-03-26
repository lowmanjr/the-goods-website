"use client";

import Image from "next/image";
import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Module {
  id: number;
  title: string;
  locked: boolean;
}

const MODULES: Module[] = [
  { id: 1, title: "The Plug-and-Play AI Blueprint", locked: false },
  { id: 2, title: "Scene-by-Scene Asset Generation", locked: false },
  { id: 3, title: "The Motion Engine", locked: true },
  { id: 4, title: "The Voice & Final Edit", locked: true },
  { id: 5, title: "The Creative Edge", locked: true },
];

// ─── Paywall Modal ────────────────────────────────────────────────────────────

function PaywallModal({ onClose }: { onClose: () => void }) {
  const STRIPE_LINK = "https://buy.stripe.com/placeholder"; // TODO: replace with real link

  const features = [
    "The Motion Engine",
    "The Voice",
    "The Final Edit",
    "The Creative Edge",
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#141414] p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/60 transition hover:bg-white/20 hover:text-white"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Lock icon */}
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#D36A18]/20">
          <LockIcon className="h-6 w-6 text-[#D36A18]" />
        </div>

        <h2
          className="mb-3 text-2xl font-extrabold text-white"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Make It Go Viral
        </h2>

        <p
          className="mb-6 text-sm leading-relaxed text-white/60"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          An image is just an image, but motion is what holds attention for an
          average of{" "}
          <span className="font-semibold text-white">21 seconds</span> and
          triggers the algorithm to push your video to millions.
        </p>

        {/* Feature list */}
        <ul className="mb-7 space-y-2">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-white/80">
              <span className="text-[#D36A18]">✦</span>
              {f}
            </li>
          ))}
        </ul>

        <a
          href={STRIPE_LINK}
          className="block w-full rounded-full bg-[#D36A18] py-4 text-center text-sm font-bold text-white shadow-lg transition hover:bg-[#b85a12]"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Unlock Now for $27
        </a>

        <p
          className="mt-3 text-center text-xs text-white/30"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          One-time payment · Instant access
        </p>
      </div>
    </div>
  );
}

// ─── Module Content ───────────────────────────────────────────────────────────

function Module1() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h2
          className="mb-1 text-2xl font-extrabold text-white sm:text-3xl"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          The Plug-and-Play AI Blueprint
        </h2>
        <p
          className="text-sm text-white/40"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          Module 1 of 5
        </p>
      </div>

      {/* Anti-Hook Script Structure */}
      <section>
        <h3
          className="mb-4 text-lg font-bold text-[#D36A18]"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          The Anti-Hook Script Structure
        </h3>
        <div className="space-y-3">
          {[
            {
              step: "1",
              label: "The Interruption",
              desc: "Stop the scroll in the first 2 seconds with an unexpected visual or statement that creates cognitive dissonance.",
            },
            {
              step: "2",
              label: "The Problem",
              desc: "Agitate the pain point your viewer is already feeling. Make them nod before they even think.",
            },
            {
              step: "3",
              label: "The Solution",
              desc: "Introduce your character or concept as the inevitable answer. Keep it simple — one transformation.",
            },
          ].map(({ step, label, desc }) => (
            <div
              key={step}
              className="flex gap-4 rounded-xl border border-white/5 bg-white/5 p-4"
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D36A18] text-sm font-bold text-white"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {step}
              </span>
              <div>
                <p
                  className="font-semibold text-white"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {label}
                </p>
                <p
                  className="mt-0.5 text-sm text-white/50"
                  style={{ fontFamily: "var(--font-open-sans)" }}
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process image */}
      <div className="overflow-hidden rounded-xl border border-white/10">
        <Image
          src="/process.JPG"
          width={700}
          height={400}
          alt="Blueprint process"
          className="w-full object-cover"
        />
      </div>

      {/* Prompt Automation Hack */}
      <section>
        <h3
          className="mb-3 text-lg font-bold text-[#D36A18]"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          The Prompt Automation Hack
        </h3>
        <div className="rounded-xl border border-white/5 bg-white/5 p-5">
          <p
            className="text-sm leading-relaxed text-white/70"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            Instead of writing a new prompt for every scene, build a{" "}
            <span className="font-semibold text-white">master prompt template</span>{" "}
            with locked variables (character style, lighting, color palette) and
            only swap the action-specific phrase. This cuts generation time by
            ~70% and keeps every scene visually consistent.
          </p>
        </div>
      </section>

      {/* Action item checkbox */}
      <div className="rounded-xl border border-[#D36A18]/30 bg-[#D36A18]/10 p-5">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="mt-0.5 h-5 w-5 shrink-0 accent-[#D36A18]"
          />
          <span
            className={`text-sm leading-relaxed ${checked ? "text-white/40 line-through" : "text-white/80"}`}
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            <span className="font-semibold text-white">Action Item:</span> Write
            your first Anti-Hook script using the 3-step structure above. Aim
            for under 60 words total — constraint breeds creativity.
          </span>
        </label>
      </div>
    </div>
  );
}

function Module2() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h2
          className="mb-1 text-2xl font-extrabold text-white sm:text-3xl"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Scene-by-Scene Asset Generation
        </h2>
        <p
          className="text-sm text-white/40"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          Module 2 of 5
        </p>
      </div>

      {/* Generating Base Assets */}
      <section>
        <h3
          className="mb-3 text-lg font-bold text-[#D36A18]"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Generating the Base Assets
        </h3>
        <div className="rounded-xl border border-white/5 bg-white/5 p-5">
          <p
            className="text-sm leading-relaxed text-white/70"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            Every scene starts with a single hero image. Use your master prompt
            template from Module 1, feed it into your image AI of choice, and
            generate 4–8 variants per scene. Pick the one that best matches your
            storyboard and lock in the character's core look before moving on.
          </p>
        </div>
      </section>

      {/* Golden Rule */}
      <section>
        <h3
          className="mb-3 text-lg font-bold text-[#D36A18]"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          The Golden Rule: Aspect Ratio
        </h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            { ratio: "9:16", label: "TikTok / Reels / Shorts", highlight: true },
            { ratio: "1:1", label: "Instagram Feed", highlight: false },
            { ratio: "16:9", label: "YouTube Standard", highlight: false },
          ].map(({ ratio, label, highlight }) => (
            <div
              key={ratio}
              className={`rounded-xl border p-4 text-center ${highlight ? "border-[#D36A18] bg-[#D36A18]/15" : "border-white/5 bg-white/5"}`}
            >
              <p
                className={`text-xl font-extrabold ${highlight ? "text-[#D36A18]" : "text-white"}`}
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {ratio}
              </p>
              <p
                className="mt-1 text-xs text-white/50"
                style={{ fontFamily: "var(--font-open-sans)" }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Output image */}
      <div className="overflow-hidden rounded-xl border border-white/10">
        <Image
          src="/output.PNG"
          width={700}
          height={400}
          alt="Asset generation output"
          className="w-full object-cover"
        />
      </div>

      {/* Prompt Framework */}
      <section>
        <h3
          className="mb-3 text-lg font-bold text-[#D36A18]"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          The Prompt Framework
        </h3>
        <div className="rounded-xl border border-white/5 bg-[#0A0A0A] p-5 font-mono text-sm">
          <p className="text-[#D36A18]">{"// Scene Prompt Template"}</p>
          <p className="mt-2 text-white/70">
            [
            <span className="text-white">Character description</span>] doing [
            <span className="text-white">action</span>], [
            <span className="text-white">environment</span>], [
            <span className="text-white">lighting style</span>], [
            <span className="text-white">camera angle</span>], ultra-detailed,
            3D render, cinematic.
          </p>
        </div>
      </section>

      {/* Action item */}
      <div className="rounded-xl border border-[#D36A18]/30 bg-[#D36A18]/10 p-5">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="mt-0.5 h-5 w-5 shrink-0 accent-[#D36A18]"
          />
          <span
            className={`text-sm leading-relaxed ${checked ? "text-white/40 line-through" : "text-white/80"}`}
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            <span className="font-semibold text-white">Action Item:</span>{" "}
            Generate your first batch of scene assets using the prompt framework
            above. Aim for 3 distinct scenes using the same base character.
          </span>
        </label>
      </div>
    </div>
  );
}

// ─── Lock Icon ────────────────────────────────────────────────────────────────

function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  const [activeModule, setActiveModule] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleModuleClick(mod: Module) {
    if (mod.locked) {
      setIsModalOpen(true);
    } else {
      setActiveModule(mod.id);
    }
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-[#D36A18]" />

      {/* Header */}
      <header className="border-b border-white/5 px-5 py-4">
        <p
          className="text-xs font-semibold uppercase tracking-widest text-[#D36A18]"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          3D AI Animation Blueprint
        </p>
      </header>

      {/* Layout: stacked on mobile, side-by-side on lg+ */}
      <div className="flex flex-col lg:flex-row lg:min-h-[calc(100vh-57px)]">
        {/* ── Sidebar ── */}
        <aside className="w-full shrink-0 border-b border-white/5 bg-[#0A0A0A] lg:w-64 lg:border-b-0 lg:border-r">
          <div className="p-4">
            <p
              className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-white/30"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Course Modules
            </p>
            <nav className="flex flex-col gap-1">
              {MODULES.map((mod) => {
                const isActive = activeModule === mod.id && !mod.locked;
                return (
                  <button
                    key={mod.id}
                    onClick={() => handleModuleClick(mod)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm transition ${
                      isActive
                        ? "bg-[#D36A18]/20 font-semibold text-[#D36A18]"
                        : mod.locked
                          ? "cursor-pointer text-white/30 hover:bg-white/5 hover:text-white/50"
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                    }`}
                    style={{ fontFamily: "var(--font-open-sans)" }}
                  >
                    {/* Module number or lock */}
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs ${
                        isActive
                          ? "bg-[#D36A18] text-white"
                          : mod.locked
                            ? "bg-white/10 text-white/30"
                            : "bg-white/10 text-white/60"
                      }`}
                    >
                      {mod.locked ? (
                        <LockIcon className="h-3 w-3" />
                      ) : (
                        mod.id
                      )}
                    </span>
                    <span className="leading-tight">{mod.title}</span>
                  </button>
                );
              })}
            </nav>

            {/* Upgrade CTA in sidebar */}
            <div className="mt-6 rounded-xl border border-[#D36A18]/30 bg-[#D36A18]/10 p-4">
              <p
                className="mb-2 text-xs font-bold text-[#D36A18]"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Unlock All 5 Modules
              </p>
              <p
                className="mb-3 text-xs text-white/50"
                style={{ fontFamily: "var(--font-open-sans)" }}
              >
                Get the motion engine, voice-over system, and viral editing
                framework.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full rounded-full bg-[#D36A18] py-2 text-xs font-bold text-white transition hover:bg-[#b85a12]"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Unlock for $27
              </button>
            </div>
          </div>
        </aside>

        {/* ── Content Pane ── */}
        <main className="flex-1 overflow-y-auto p-5 sm:p-8 lg:p-10">
          <div className="mx-auto max-w-2xl">
            {activeModule === 1 && <Module1 />}
            {activeModule === 2 && <Module2 />}
          </div>
        </main>
      </div>

      {/* Paywall Modal */}
      {isModalOpen && <PaywallModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
