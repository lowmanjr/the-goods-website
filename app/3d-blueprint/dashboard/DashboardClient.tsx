"use client";

import { useEffect, useState } from "react";
import { verifyStripeSession } from "./actions";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Module {
  id: number;
  title: string;
  locked: boolean;
}

// ─── Paywall Modal ────────────────────────────────────────────────────────────

function PaywallModal({ onClose }: { onClose: () => void }) {
  const STRIPE_LINK = "https://buy.stripe.com/14A5kD73S7cWcIefqhbZe02";

  const features = [
    "The Motion Engine",
    "The Voice",
    "The Final Edit",
    "The Creative Edge",
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-400 transition hover:bg-gray-200 hover:text-gray-600"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Lock icon */}
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#D36A18]/20">
          <LockIcon className="h-6 w-6 text-[#D36A18]" />
        </div>

        <h2
          className="mb-3 text-2xl font-extrabold text-[#2C2621]"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Make It Go Viral
        </h2>

        <p
          className="mb-6 text-sm leading-relaxed text-gray-500"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          An image is just an image, but motion is what holds attention for an
          average of{" "}
          <span className="font-semibold text-[#2C2621]">21 seconds</span> and
          triggers the algorithm to push your video to millions.
        </p>

        {/* Feature list */}
        <ul className="mb-7 space-y-2">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
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
          className="mt-3 text-center text-xs text-gray-400"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          One-time payment · Instant access
        </p>
      </div>
    </div>
  );
}

// ─── Module Content ───────────────────────────────────────────────────────────

const MEGA_PROMPT = `Act as an expert short-form scriptwriter. I want to make a 30-second viral video about [INSERT YOUR TOPIC/PAIN POINT HERE]. Using the 'Anti-Hook' framework, write a 60-word maximum script broken down into 3 parts: The Interruption, The Problem, and The Solution. After the script, break the video down into 3 visual scenes. For each scene, write a highly detailed 'Text-to-Image' prompt designed for an AI image generator. The image prompt must include the main character, the setting, cinematic lighting, and end with the aspect ratio '--ar 9:16'.`;

function Module1() {
  const [checked, setChecked] = useState(false);
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(MEGA_PROMPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-8">

      {/* ── 1. Intro ── */}
      <div>
        <h2
          className="mb-1 text-2xl font-extrabold text-[#2C2621] sm:text-3xl"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          The Plug-and-Play AI Blueprint
        </h2>
        <p
          className="text-sm text-gray-400"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          Module 1 of 5
        </p>
        <p
          className="mt-4 text-sm leading-relaxed text-gray-600"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          Virality is not an accident. It is a formula. The biggest secret to
          these 3D edutainment videos is that the AI does 90% of the heavy
          lifting. You do not need to be a 3D animator or a professional
          copywriter. You just need to know exactly what instructions to feed
          the machine.
        </p>
      </div>

      {/* ── 2. Anti-Hook Script Structure ── */}
      <section>
        <h3
          className="mb-3 text-lg font-bold text-[#D36A18]"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          The &ldquo;Anti-Hook&rdquo; Script Structure
        </h3>
        <p
          className="mb-4 text-sm leading-relaxed text-gray-600"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          Most creators start videos by saying,{" "}
          <em>&ldquo;Here is how to do [X].&rdquo;</em> That is boring. People scroll
          past helpful advice. To get 3.5 million views, we use an{" "}
          <strong className="text-[#2C2621]">Anti-Hook</strong>. We interrupt
          their pattern by telling them that a habit they do every single day is
          actually wrong, and then we immediately offer the visual proof. Here is
          the exact 3-part script psychology I use for every video:
        </p>
        <div>
          {[
            {
              step: "1",
              label: "The Interruption (0:00 to 0:03)",
              desc: "Stop the scroll in the first 2 seconds with an unexpected visual and a negative command to create instant cognitive dissonance.",
            },
            {
              step: "2",
              label: "The Problem (0:03 to 0:15)",
              desc: "Visually agitate the pain point. Explain why their habit is failing them. Make them nod their head before they even realize it.",
            },
            {
              step: "3",
              label: "The Solution (0:15 to 0:30)",
              desc: "Introduce your character or concept as the inevitable answer. Keep it dead simple. One specific transformation or rule.",
            },
          ].map(({ step, label, desc }) => (
            <div
              key={step}
              className="bg-white shadow-sm border border-gray-200 rounded-xl p-4 flex gap-4 mb-3"
            >
              <span
                className="bg-[#D36A18] text-white rounded-full h-8 w-8 flex items-center justify-center font-bold shrink-0 text-sm"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {step}
              </span>
              <div>
                <p
                  className="font-semibold text-[#2C2621]"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {label}
                </p>
                <p
                  className="mt-0.5 text-sm text-gray-500"
                  style={{ fontFamily: "var(--font-open-sans)" }}
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. Swipe File ── */}
      <section>
        <h3
          className="mb-3 text-lg font-bold text-[#D36A18]"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          What a Perfect Output Looks Like (The 3.5M View Example)
        </h3>
        <p
          className="mb-4 text-sm leading-relaxed text-gray-600"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          Before you generate your own script, look at the exact Scene 1
          breakdown that went viral.{" "}
          <em>
            Notice how the voiceover is punchy and conversational, and the image
            prompt contains highly specific lighting and style keywords. This is
            the gold standard you want your AI to generate for your own niche.
          </em>
        </p>

        {/* Swipe file card */}
        <div className="bg-[#D36A18]/5 border border-[#D36A18]/20 rounded-xl p-5 space-y-4">
          <p
            className="font-bold text-[#2C2621]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            🎬 Scene 1: The Hook
          </p>
          <div>
            <p
              className="text-sm text-gray-600"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              <span className="font-semibold text-[#2C2621]">Concept:</span> We
              challenge the standard quick tap-water rinse. We show that water
              literally bounces off the blueberry&apos;s natural waxy coating,
              leaving all the bad stuff behind.
            </p>
          </div>
          <div>
            <p
              className="text-sm text-gray-600"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              <span className="font-semibold text-[#2C2621]">
                🎙️ Narrator Voiceover:
              </span>{" "}
              <em>
                &ldquo;Stop rinsing your blueberries under the tap! Plain water
                isn&apos;t doing anything, and it&apos;s exactly why your
                expensive berries are molding in the fridge after two days.&rdquo;
              </em>
            </p>
          </div>
          <div>
            <p
              className="text-sm text-gray-600"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              <span className="font-semibold text-[#2C2621]">
                🎨 Image Prompt:
              </span>{" "}
              A cute 3D anthropomorphic plump blueberry standing under a kitchen
              faucet. Crystal clear water is bouncing harmlessly off its waxy
              skin, but the berry is still covered in tiny glowing green toxic
              dots and fuzzy white mold spores. Cinematic studio lighting,
              &ldquo;Sausage Party&rdquo; Pixar adult animation style.{" "}
              <span className="font-mono text-[#D36A18]">--ar 9:16</span>
            </p>
          </div>
        </div>

        {/* Pro-Tip callout */}
        <div className="border-l-4 border-[#D36A18] bg-white p-4 shadow-sm rounded-r-xl mt-4">
          <p
            className="text-sm leading-relaxed text-gray-600"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            💡{" "}
            <span className="font-semibold text-[#2C2621]">Pro-Tip:</span>{" "}
            Notice the{" "}
            <span className="font-mono text-[#D36A18]">--ar 9:16</span> at the
            end of the image prompt? That forces the AI to generate a vertical
            image that perfectly fits a phone screen. Never skip that.
          </p>
        </div>
      </section>

      {/* ── 4. Process Image ── */}
      <img
        src="/process.jpg"
        alt="Blueprint process"
        className="w-full h-auto rounded-xl shadow-lg border border-gray-200 mt-8 mb-8"
      />

      {/* ── 5. Mega-Prompt ── */}
      <section>
        <h3
          className="mb-3 text-lg font-bold text-[#D36A18]"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          The Copy &amp; Paste Automation Hack
        </h3>
        <p
          className="mb-4 text-sm leading-relaxed text-gray-600"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          You should not be writing these scripts from scratch, and you{" "}
          <em>definitely</em> should not be manually thinking up the visual scene
          descriptions. Copy and paste this exact{" "}
          <strong className="text-[#2C2621]">Mega-Prompt</strong> into your
          favorite AI assistant (like Gemini or ChatGPT). It will automatically
          write your script AND format your scene descriptions so they are ready
          to drop directly into an image generator.
        </p>

        {/* Dark terminal */}
        <div className="bg-gray-900 text-gray-100 font-mono text-sm rounded-xl p-5 relative mt-4 shadow-lg leading-relaxed">
          <button
            onClick={handleCopy}
            className="absolute right-3 top-3 rounded-md bg-white/10 px-3 py-1 text-xs font-semibold text-white transition hover:bg-white/20"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <p className="pr-16 text-gray-300">{MEGA_PROMPT}</p>
        </div>
      </section>

      {/* ── 6. Action Item ── */}
      <div className="rounded-xl border border-[#D36A18]/30 bg-[#D36A18]/10 p-5">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="mt-0.5 h-5 w-5 shrink-0 accent-[#D36A18]"
          />
          <span
            className={`text-sm leading-relaxed ${checked ? "text-gray-400 line-through" : "text-gray-700"}`}
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            <span className="font-semibold text-[#2C2621]">Action Item:</span>{" "}
            Copy the Mega-Prompt above, plug in your niche&apos;s biggest pain
            point, and generate your first script and scene list. Remember: keep
            the spoken script under 60 words. Constraint breeds virality.
          </span>
        </label>
      </div>
    </div>
  );
}

const PROMPT_ANATOMY = `[Character description] doing [action], [environment / background], [lighting style], [camera angle], ultra-detailed, 3D render, cinematic, "Sausage Party" Pixar adult animation style. --ar 9:16`;

function Module2() {
  const [checked, setChecked] = useState(false);
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(PROMPT_ANATOMY);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-8">

      {/* ── 1. Intro ── */}
      <div>
        <h2
          className="mb-1 text-2xl font-extrabold text-[#2C2621] sm:text-3xl"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Scene-by-Scene Asset Generation
        </h2>
        <p
          className="text-sm text-gray-400"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          Module 2 of 5
        </p>
        <p
          className="mt-4 text-sm leading-relaxed text-gray-600"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          You have your viral script and your scene descriptions from Module 1.
          Now, we turn those words into world-class 3D assets. Every single
          scene in your video needs a foundational &ldquo;Hero Image.&rdquo;
        </p>
      </div>

      {/* ── 2. The Tool ── */}
      <section>
        <h3
          className="text-lg font-bold text-[#D36A18] mt-8 mb-3"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          The Tool: Nano Banana 2 (Gemini 3 Flash Image)
        </h3>
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <p
            className="text-sm leading-relaxed text-gray-600"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            Do not waste time jumping between random AI generators. To get this
            highly specific, Pixar-quality 3D look with cinematic lighting, I
            use <strong className="text-[#2C2621]">Nano Banana 2</strong>{" "}
            (officially known as Gemini 3 Flash Image). It is the industry
            standard for generating expressive, anthropomorphic characters and
            handling complex textures (like water and mold) in the same frame.
          </p>
        </div>
      </section>

      {/* ── 3. The Result ── */}
      <section>
        <h3
          className="text-lg font-bold text-[#D36A18] mt-8 mb-3"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          The Result (Raw &amp; Unedited)
        </h3>
        <p
          className="text-sm leading-relaxed text-gray-600 mb-4"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          When you plug the exact Image Prompt from our Blueberry Swipe File in
          Module 1 into Nano Banana 2, this is the exact, unedited result it
          spits out:
        </p>
        <img
          src="/output.png"
          alt="Raw AI Output"
          className="w-full h-auto max-w-lg rounded-xl shadow-lg border border-gray-200"
        />
      </section>

      {/* ── 4. The Golden Rule ── */}
      <section>
        <h3
          className="text-lg font-bold text-[#D36A18] mt-8 mb-3"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          The Golden Rule: Aspect Ratio
        </h3>
        <p
          className="text-sm leading-relaxed text-gray-600 mb-4"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          Because we are optimizing for TikTok, Instagram Reels, and YouTube
          Shorts, your images <strong className="text-[#2C2621]">must</strong>{" "}
          fill a vertical phone screen perfectly. If you generate a square or
          horizontal image, our Motion Engine (Module 3) will crop it awkwardly,
          ruining your resolution and cutting off your character.{" "}
          <strong className="text-[#2C2621]">
            Always type{" "}
            <span className="font-mono">--ar 9:16</span> at the absolute end of
            every single prompt.
          </strong>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* 9:16 — highlighted */}
          <div className="border-2 border-[#D36A18] bg-[#D36A18]/10 p-4 rounded-xl text-center relative overflow-hidden">
            <p
              className="text-2xl font-extrabold text-[#D36A18]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              9:16
            </p>
            <p
              className="text-xs text-gray-600 font-bold mt-1"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              TikTok / Reels / Shorts
            </p>
            <p
              className="text-xs font-bold text-[#D36A18] mt-2"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              👈 USE THIS
            </p>
          </div>
          {/* 1:1 — muted */}
          <div className="border border-gray-200 bg-gray-50 p-4 rounded-xl text-center opacity-70">
            <p
              className="text-2xl font-bold text-gray-400"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              1:1
            </p>
            <p
              className="text-xs text-gray-400 mt-1"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              Instagram Feed
            </p>
          </div>
          {/* 16:9 — muted */}
          <div className="border border-gray-200 bg-gray-50 p-4 rounded-xl text-center opacity-70">
            <p
              className="text-2xl font-bold text-gray-400"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              16:9
            </p>
            <p
              className="text-xs text-gray-400 mt-1"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              YouTube Standard / Desktop
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. Prompt Anatomy ── */}
      <section>
        <h3
          className="text-lg font-bold text-[#D36A18] mt-8 mb-3"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          The Prompt Anatomy
        </h3>
        <p
          className="text-sm leading-relaxed text-gray-600"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          If you ever need to manually tweak a scene or build a new character
          from scratch, do not just type a random sentence. Use this locked
          variable structure to guarantee a cinematic result every time.
        </p>
        <div className="bg-gray-900 text-gray-100 font-mono text-sm rounded-xl p-5 relative mt-4 shadow-lg leading-relaxed">
          <button
            onClick={handleCopy}
            className="absolute right-3 top-3 rounded-md bg-white/10 px-3 py-1 text-xs font-semibold text-white transition hover:bg-white/20"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <p className="pr-16 text-gray-300">{PROMPT_ANATOMY}</p>
        </div>
      </section>

      {/* ── 6. Action Item ── */}
      <div className="rounded-xl border border-[#D36A18]/30 bg-[#D36A18]/10 p-5 mt-8">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="mt-0.5 h-5 w-5 shrink-0 accent-[#D36A18]"
          />
          <span
            className={`text-sm leading-relaxed ${checked ? "text-gray-400 line-through" : "text-gray-700"}`}
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            <span className="font-semibold text-[#2C2621]">Action Item:</span>{" "}
            Open Nano Banana 2 (Gemini). Paste your 3 scene descriptions from
            Module 1 to generate your foundational assets. Generate 4–8 variants
            per scene, pick the best one for each, and download them to your
            device.
          </span>
        </label>
      </div>
    </div>
  );
}

// ─── Module 3 ─────────────────────────────────────────────────────────────────

const VEO_PROMPT = `A 3D anthropomorphic blueberry stands under a running faucet. The water bounces harmlessly off its skin, revealing it is still covered in glowing green toxic dots and fuzzy white mold spores. Static camera, slow push in.`;

function Module3() {
  const [checked, setChecked] = useState(false);
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(VEO_PROMPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-8">

      {/* ── 1. Intro ── */}
      <div>
        <h2
          className="mb-1 text-2xl font-extrabold text-[#2C2621] sm:text-3xl"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Bringing the Assets to Life (Motion &amp; Audio)
        </h2>
        <p
          className="text-sm text-gray-400"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          Module 3 of 5
        </p>
        <p
          className="mt-4 text-sm leading-relaxed text-gray-600"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          Welcome to the premium workflow. You now have your viral script and
          your high-quality 9:16 assets. Most creators stop here and post a
          slideshow. We don&apos;t. We are going to use two specific AI engines
          to create cinematic motion and high-retention audio.
        </p>
      </div>

      {/* ── 2. Part 1: Motion Engine ── */}
      <section>
        <h3
          className="text-xl font-bold text-[#D36A18] mt-8 mb-4"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Part 1: The Motion Engine (Gemini Veo)
        </h3>
        <p
          className="text-sm leading-relaxed text-gray-600 mb-4"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          Static images get swiped. Dynamic movement forces the algorithm to
          recognize your content as high-effort video. We use{" "}
          <strong className="text-[#2C2621]">Gemini Veo</strong> because it has
          the best physics engine for fluid dynamics (like splashing water) and
          camera control.
        </p>
        <p
          className="font-bold text-[#2C2621] mb-2"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          The &ldquo;Seed Image&rdquo; Workflow:
        </p>
        <div>
          {[
            <>Do <strong className="text-[#2C2621]">not</strong> use Veo to generate a video from scratch.</>,
            <>Upload your finished 9:16 image from Module 2 directly into Veo as a <strong className="text-[#2C2621]">Reference Image</strong> (often called the &ldquo;seed&rdquo;).</>,
            <><em>Why?</em> This locks in your character&apos;s exact visual identity. Veo will use that exact image as the first frame of the video, ensuring the character doesn&apos;t mutate or change style as it moves.</>,
          ].map((content, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-4 mb-2 flex gap-4"
            >
              <span
                className="bg-[#D36A18] text-white rounded-full h-7 w-7 flex items-center justify-center font-bold shrink-0 text-sm mt-0.5"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {i + 1}
              </span>
              <p
                className="text-sm leading-relaxed text-gray-600"
                style={{ fontFamily: "var(--font-open-sans)" }}
              >
                {content}
              </p>
            </div>
          ))}
        </div>

        {/* Warning callout */}
        <div className="border-l-4 border-red-500 bg-red-50 p-5 rounded-r-xl my-6">
          <p
            className="font-bold text-red-700 mb-1"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            ⚠️ The &ldquo;Motion Only&rdquo; Prompt Rule
          </p>
          <p
            className="text-red-900/80 text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            This is where most beginners fail. Because Veo already has your
            image, your prompt should{" "}
            <strong>never re-describe the character</strong>. If you do, the AI
            gets confused and the character will warp. You must only describe{" "}
            <em>how the camera moves</em> and{" "}
            <em>what physical actions happen</em>.
          </p>
        </div>

        {/* Veo terminal */}
        <p
          className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          👇 COPY THIS VEO MOTION PROMPT:
        </p>
        <div className="bg-gray-900 text-gray-100 font-mono text-sm rounded-xl p-5 relative shadow-lg leading-relaxed mb-8">
          <button
            onClick={handleCopy}
            className="absolute right-3 top-3 rounded-md bg-white/10 px-3 py-1 text-xs font-semibold text-white transition hover:bg-white/20"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <p className="pr-16 text-gray-300">{VEO_PROMPT}</p>
        </div>
      </section>

      {/* ── 3. Part 2: The Voice ── */}
      <section>
        <h3
          className="text-xl font-bold text-[#D36A18] mt-8 mb-4"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Part 2: The Voice (ElevenLabs)
        </h3>
        <p
          className="text-sm leading-relaxed text-gray-600 mb-4"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          Your visuals hook them, but the voiceover dictates the pacing and
          determines if they actually watch until the end. Do not use standard
          TikTok robotic voices. We use{" "}
          <strong className="text-[#2C2621]">ElevenLabs</strong> because it
          produces the most natural, hyper-realistic AI voices on the market.
        </p>
        <div>
          {[
            {
              title: `The "Documentary" Setting`,
              body: `When selecting your voice model, look for descriptors like Energetic, Authoritative, or Fast-paced. You want the energy of a National Geographic narrator exposing a massive secret, not someone reading a relaxing audiobook.`,
            },
            {
              title: "The Psychological Cadence Hack",
              body: `The modern short-form audience has zero patience. If your audio breathes or pauses, they swipe. Generate your script in ElevenLabs and download the MP3. When you drop that audio into your editing software, immediately speed it up by 1.1x to 1.15x. This specific speed sits right below the threshold where it sounds "chipmunk-y," but it creates a massive sense of subconscious urgency.`,
            },
          ].map(({ title, body }) => (
            <div
              key={title}
              className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4"
            >
              <p
                className="font-bold text-[#2C2621] mb-2"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {title}
              </p>
              <p
                className="text-sm leading-relaxed text-gray-600"
                style={{ fontFamily: "var(--font-open-sans)" }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. Action Item ── */}
      <div className="rounded-xl border border-[#D36A18]/30 bg-[#D36A18]/10 p-5 mt-8">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="mt-0.5 h-5 w-5 shrink-0 accent-[#D36A18]"
          />
          <span
            className={`text-sm leading-relaxed ${checked ? "text-gray-400 line-through" : "text-gray-700"}`}
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            <span className="font-semibold text-[#2C2621]">Action Item:</span>{" "}
            Upload your 3 scene images into Gemini Veo and generate your motion
            clips using the &ldquo;Motion Only&rdquo; rule. Then, drop your script into
            ElevenLabs, find a high-energy voice, and download the MP3. You are
            now ready for the Final Edit.
          </span>
        </label>
      </div>
    </div>
  );
}

// ─── Module 4 ─────────────────────────────────────────────────────────────────

function Module4() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="space-y-8">

      {/* ── 1. Intro ── */}
      <div>
        <h2
          className="mb-1 text-2xl font-extrabold text-[#2C2621] sm:text-3xl"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          The Final Assembly (Editing for Retention)
        </h2>
        <p
          className="text-sm text-gray-400"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          Module 4 of 5
        </p>
        <p
          className="mt-4 text-sm leading-relaxed text-gray-600"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          You have cinematic visuals and a high-energy voiceover. But if you
          just slap them together on a timeline, the algorithm will bury your
          video. This is where the 3.5 million views are actually won or lost.
          We are going to use <strong className="text-[#2C2621]">CapCut</strong>{" "}
          to edit specifically for <em>retention</em>—engineering the video so
          the viewer&apos;s brain never gets a chance to swipe.
        </p>
      </div>

      {/* ── 2. Editing Protocol Cards ── */}
      <section>
        {/* Card 1: Zero Dead Air */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-6 mb-6">
          <h3
            className="text-lg font-bold text-[#D36A18] mb-2"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            The &ldquo;Zero Dead Air&rdquo; Protocol
          </h3>
          <p
            className="text-sm leading-relaxed text-gray-600 mb-2"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            Open your audio waveform and cut{" "}
            <strong className="text-[#2C2621]">every single micro-pause</strong>.
            Any breath or silence longer than 0.1 seconds must be deleted.
          </p>
          <p
            className="text-sm text-gray-600 mb-1"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            <span className="font-bold text-[#2C2621]">The Psychology:</span>{" "}
            This sounds extreme, but the result is a wall of relentless forward
            momentum. The viewer&apos;s brain never gets a microscopic gap to
            get bored and decide to scroll away.
          </p>
          <p
            className="text-sm text-gray-600"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            <span className="font-bold text-[#2C2621]">The Hack:</span>{" "}
            Don&apos;t do this manually. Drop your audio into CapCut, click on
            the audio clip, and use the &ldquo;Remove Silence&rdquo; or &ldquo;Auto-Cut&rdquo;
            feature to do this in one click.
          </p>
        </div>

        {/* Card 2: Dopamine Sync */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-6 mb-6">
          <h3
            className="text-lg font-bold text-[#D36A18] mb-2"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            The &ldquo;Dopamine Sync&rdquo; (Frame-Accurate Anchoring)
          </h3>
          <p
            className="text-sm leading-relaxed text-gray-600 mb-2"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            Every visual action must land on the exact syllable that describes
            it. If the script says <em>&ldquo;water splashes,&rdquo;</em> the splash must
            hit the berry on the exact frame you hear the &ldquo;spl-&rdquo; sound. Not a
            half-second before or after.
          </p>
          <p
            className="text-sm text-gray-600"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            <span className="font-bold text-[#2C2621]">The Psychology:</span>{" "}
            This audio-visual sync is what makes a video feel incredibly
            expensive and professionally produced. It triggers the exact same
            neural reward in the brain as a perfectly synced music video. Trim
            your video clips at the cut points until the sync is mathematically
            perfect.
          </p>
        </div>
      </section>

      {/* ── 3. Mute-Proofing & Safe Zones ── */}
      <section>
        <h3
          className="text-xl font-bold text-[#D36A18] mt-8 mb-4"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Mute-Proofing &amp; Safe Zones
        </h3>
        <p
          className="text-sm leading-relaxed text-gray-600 mb-4"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          Over 30% of your audience will watch your video on mute while sitting
          on a train or at work. If they can&apos;t follow the story visually,
          you lose them.
        </p>

        <p
          className="font-bold text-[#2C2621] mb-2"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          1. Dynamic Captions
        </p>
        <p
          className="text-sm leading-relaxed text-gray-600 mb-6"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          Use bold, center-aligned captions (a thick sans-serif font like{" "}
          <em>Montserrat</em> or <em>The Bold Font</em>). Set the style to
          auto-highlight the active word as it is spoken.
        </p>

        {/* Yellow warning callout */}
        <div className="border-l-4 border-yellow-500 bg-yellow-50 p-5 rounded-r-xl mb-8">
          <p
            className="font-bold text-yellow-800 mb-1"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            2. The Center 80% Rule
          </p>
          <p
            className="text-yellow-900/80 text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            TikTok, Instagram Reels, and YouTube Shorts all cover the right side
            and bottom of the screen with their own app buttons.{" "}
            <strong>WARNING:</strong> Keep all text, captions, and important
            visual assets perfectly centered. Anything placed in the outer
            margins will be covered up and unreadable.
          </p>
        </div>
      </section>

      {/* ── 4. Action Item ── */}
      <div className="rounded-xl border border-[#D36A18]/30 bg-[#D36A18]/10 p-5">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="mt-0.5 h-5 w-5 shrink-0 accent-[#D36A18]"
          />
          <span
            className={`text-sm leading-relaxed ${checked ? "text-gray-400 line-through" : "text-gray-700"}`}
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            <span className="font-semibold text-[#2C2621]">Action Item:</span>{" "}
            Open CapCut. Run the &ldquo;Remove Silence&rdquo; tool on your ElevenLabs
            audio. Frame-sync your Gemini Veo clips to the exact words. Generate
            dynamic auto-captions, ensure they sit in the center of the screen,
            and export your final video at 1080p / 60fps.
          </span>
        </label>
      </div>
    </div>
  );
}

// ─── Module 5 ─────────────────────────────────────────────────────────────────

function Module5() {
  const [checked, setChecked] = useState(false);

  const nicheExamples = [
    {
      emoji: "💰",
      niche: "Finance",
      example: "3D wallet warning about hidden bank fees",
    },
    {
      emoji: "📡",
      niche: "Tech",
      example: "3D router explaining why your Wi-Fi is slow",
    },
    {
      emoji: "🏃",
      niche: "Fitness",
      example: "3D running shoe explaining the cause of shin splints",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2
          className="mb-1 text-2xl font-extrabold text-[#2C2621] sm:text-3xl"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          The Secret Sauce (The Creative Edge)
        </h2>
        <p
          className="text-sm text-gray-400"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          Module 5 of 5
        </p>
      </div>

      {/* Execution > Tools */}
      <section>
        <h3
          className="mb-3 text-lg font-bold text-[#D36A18]"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Execution &gt; Tools
        </h3>
        <div className="space-y-3">
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <p
              className="mb-2 font-semibold text-[#2C2621]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              The Fear / Relief Metric
            </p>
            <p
              className="text-sm leading-relaxed text-gray-600"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              Every viral edutainment video follows the same emotional arc:
              introduce a{" "}
              <span className="font-semibold text-[#2C2621]">hidden danger</span>{" "}
              the viewer didn&apos;t know about, then immediately hand them a{" "}
              <span className="font-semibold text-[#2C2621]">
                cheap, specific solution
              </span>
              . The gap between fear and relief is where the save and share
              happens. If your video doesn&apos;t create that gap, it&apos;s just
              information — not content.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <p
              className="mb-2 font-semibold text-[#2C2621]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Saveable Utility
            </p>
            <p
              className="text-sm leading-relaxed text-gray-600"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              Generic advice gets watched. Specific recipes get saved. Instead
              of &ldquo;wash your produce&rdquo;, give them{" "}
              <span className="font-semibold text-[#2C2621]">
                a ratio, a time, and a reason
              </span>{" "}
              — &ldquo;1 part white vinegar to 3 parts water, soak for 15 minutes,
              removes 98% of surface pesticides.&rdquo; Specificity is the algorithm
              signal. It tells the platform this content is worth recommending.
            </p>
          </div>
        </div>
      </section>

      {/* Finding Your Niche */}
      <section>
        <h3
          className="mb-3 text-lg font-bold text-[#D36A18]"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Finding Your Niche
        </h3>
        <p
          className="mb-3 text-sm leading-relaxed text-gray-600"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          The talking-object format works in any niche where everyday items
          carry hidden knowledge. The character becomes a metaphor — and
          metaphors are more memorable than facts.
        </p>
        <div className="space-y-3">
          {nicheExamples.map(({ emoji, niche, example }) => (
            <div
              key={niche}
              className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-4"
            >
              <span className="text-2xl">{emoji}</span>
              <div>
                <p
                  className="font-semibold text-[#2C2621]"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {niche}
                </p>
                <p
                  className="mt-0.5 text-sm text-gray-500"
                  style={{ fontFamily: "var(--font-open-sans)" }}
                >
                  {example}
                </p>
              </div>
            </div>
          ))}
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
            className={`text-sm leading-relaxed ${checked ? "text-gray-400 line-through" : "text-gray-700"}`}
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            <span className="font-semibold text-[#2C2621]">Action Item:</span>{" "}
            Write the Fear/Relief arc for your next video in two sentences —
            one for the hidden danger, one for the specific solution. Then pick
            your niche character and start your next script.
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

// ─── Dashboard Client ─────────────────────────────────────────────────────────

interface DashboardClientProps {
  initialUnlocked: boolean;
  sessionId?: string;
}

export default function DashboardClient({ initialUnlocked, sessionId }: DashboardClientProps) {
  const [isUnlocked, setIsUnlocked] = useState(initialUnlocked);
  const [activeModule, setActiveModule] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modules: Module[] = [
    { id: 1, title: "The Plug-and-Play AI Blueprint", locked: false },
    { id: 2, title: "Scene-by-Scene Asset Generation", locked: false },
    { id: 3, title: "The Motion Engine", locked: !isUnlocked },
    { id: 4, title: "The Voice & Final Edit", locked: !isUnlocked },
    { id: 5, title: "The Creative Edge", locked: !isUnlocked },
  ];

  useEffect(() => {
    if (sessionId && !isUnlocked) {
      verifyStripeSession(sessionId).then((success) => {
        if (success) {
          setIsUnlocked(true);
          setIsModalOpen(false);
          window.history.replaceState(null, "", "/3d-blueprint/dashboard");
        }
      });
    }
  }, [sessionId, isUnlocked]);

  function handleModuleClick(mod: Module) {
    if (mod.locked) {
      setIsModalOpen(true);
    } else {
      setActiveModule(mod.id);
    }
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C2621]">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-[#D36A18]" />

      {/* Header */}
      <header className="border-b border-gray-200 px-5 py-4">
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
        <aside className="w-full shrink-0 border-b border-gray-200 bg-white lg:w-64 lg:border-b-0 lg:border-r">
          <div className="p-4">
            <p
              className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-gray-400"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Course Modules
            </p>
            <nav className="flex flex-col gap-1">
              {modules.map((mod) => {
                const isActive = activeModule === mod.id && !mod.locked;
                return (
                  <button
                    key={mod.id}
                    onClick={() => handleModuleClick(mod)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm transition ${
                      isActive
                        ? "bg-[#D36A18]/15 font-semibold text-[#D36A18]"
                        : mod.locked
                          ? "cursor-pointer text-gray-300 hover:bg-gray-100 hover:text-gray-400"
                          : "text-gray-600 hover:bg-gray-100 hover:text-[#2C2621]"
                    }`}
                    style={{ fontFamily: "var(--font-open-sans)" }}
                  >
                    {/* Module number or lock */}
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs ${
                        isActive
                          ? "bg-[#D36A18] text-white"
                          : mod.locked
                            ? "bg-gray-100 text-gray-300"
                            : "bg-gray-100 text-gray-500"
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
            {!isUnlocked && (
              <div className="mt-6 rounded-xl border border-[#D36A18]/30 bg-[#D36A18]/10 p-4">
                <p
                  className="mb-2 text-xs font-bold text-[#D36A18]"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Unlock All 5 Modules
                </p>
                <p
                  className="mb-3 text-xs text-gray-500"
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
            )}
          </div>
        </aside>

        {/* ── Content Pane ── */}
        <main className="flex-1 overflow-y-auto p-5 sm:p-8 lg:p-10">
          <div className="mx-auto max-w-2xl">
            {activeModule === 1 && <Module1 />}
            {activeModule === 2 && <Module2 />}
            {activeModule === 3 && <Module3 />}
            {activeModule === 4 && <Module4 />}
            {activeModule === 5 && <Module5 />}
          </div>
        </main>
      </div>

      {/* Paywall Modal */}
      {isModalOpen && <PaywallModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
