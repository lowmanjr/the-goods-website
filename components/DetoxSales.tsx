const features = [
  {
    title: "The Great Purge",
    text: "Exactly which plastics and scratched pans are secretly poisoning your food (and what to throw away today).",
  },
  {
    title: "The Safe Swaps",
    text: "My buy-it-for-life recommendations for glass, wood, and stainless steel.",
  },
  {
    title: "Food Storage 101",
    text: "How to stop throwing away expired groceries (saving just two batches of berries completely pays for this guide!).",
  },
  {
    title: "Toxic-Free Cleaning",
    text: "Ditch the bleach and build your natural, chemical-free arsenal.",
  },
];

export default function DetoxSales() {
  return (
    <section className="w-full bg-white px-6 py-24">
      {/* Section Header */}
      <div className="mx-auto max-w-3xl text-center">
        <h2
          className="text-4xl font-black text-[#2C2621]"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          The Complete Toxic-Free Kitchen Detox
        </h2>
        <p
          className="mx-auto mt-4 max-w-2xl text-lg text-gray-600"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          Stop guessing and start detoxing. This 20-page, science-backed
          masterclass is your complete system to purge hidden chemicals, upgrade
          your tools, and make your food last weeks longer.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl bg-[#FAF8F5] p-8"
          >
            <h3
              className="text-xl font-bold text-[#D36A18]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {card.title}
            </h3>
            <p
              className="mt-3 text-base leading-relaxed text-[#2C2621]/80"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              {card.text}
            </p>
          </div>
        ))}
      </div>

      {/* Pricing & CTA */}
      <div className="mt-16 flex flex-col items-center gap-5">
        <div className="flex items-baseline gap-3">
          <span
            className="text-2xl text-gray-400 line-through"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            $27
          </span>
          <span
            className="text-5xl font-black text-[#2C2621]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            $14
          </span>
        </div>

        <a
          href="YOUR_STRIPE_LINK_HERE"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#D36A18] px-10 py-4 text-lg font-bold tracking-wide text-white transition-opacity hover:opacity-90"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          UNLOCK THE GUIDE
        </a>
      </div>
    </section>
  );
}
