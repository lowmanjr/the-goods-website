const products = [
  {
    title: "Toxic-Free Cleaning Arsenal",
    text: "Swap harsh bleach and hormone-disrupting fragrances for safe, basic chemistry.",
    linkText: "Shop the Arsenal →",
    href: "https://www.amazon.com/shop/thegoodsuniverse/list/1ECW21FTMAHXG?ref_=hype_hm_sf_e",
  },
  {
    title: "Toxic-Free Cookware & Prep",
    text: "The buy-it-for-life stainless steel, cast iron, and wood tools I trust daily.",
    linkText: "Shop Cookware →",
    href: "https://www.amazon.com/shop/thegoodsuniverse/list/2IDFTP4YGMHR3?ref_=hype_hm_sf_e",
  },
  {
    title: "Nutrient Preservation",
    text: "Heavy-duty tools to extract the maximum amount of nutrients from your food.",
    linkText: "Shop Gadgets →",
    href: "https://www.amazon.com/shop/thegoodsuniverse/list/2WXWLC0J3AIA9?ref_=hype_hm_sf_e",
  },
  {
    title: "The Vinegar Spa & Prep",
    text: "Everything you need to properly wash, dry, and store your produce so it lasts for weeks.",
    linkText: "Shop Produce Prep →",
    href: "https://www.amazon.com/shop/thegoodsuniverse/list/1G9CNJH28F4L3?ref_=hype_hm_sf_e",
  },
  {
    title: "Toxic-Free Food Storage",
    text: "My exact system for safely cooling hot leftovers out of the Danger Zone.",
    linkText: "Shop Storage →",
    href: "https://www.amazon.com/shop/thegoodsuniverse/list/266YVU4Q7GF72?ref_=hype_hm_sf_e",
  },
];

export default function ShopMyKitchen() {
  return (
    <section className="w-full bg-[#FAF8F5] px-6 py-24">
      {/* Section Header */}
      <div className="mx-auto max-w-3xl text-center">
        <h2
          className="text-4xl font-black text-[#2C2621]"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Shop My Kitchen Safety Tools
        </h2>
        <p
          className="mx-auto mt-4 max-w-2xl text-lg text-gray-600"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          Ditch the forever chemicals and microplastics. These are the
          buy-it-for-life tools I trust daily to keep my home toxic-free.
        </p>
      </div>

      {/* Product Cards */}
      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((item) => (
          <div
            key={item.title}
            className="flex flex-col rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
          >
            <h3
              className="text-xl font-bold text-[#2C2621]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {item.title}
            </h3>
            <p
              className="mt-2 flex-1 text-base leading-relaxed text-gray-600"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              {item.text}
            </p>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block font-bold text-[#D36A18] transition-opacity hover:opacity-75"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {item.linkText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
