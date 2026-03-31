import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#D36A18] selection:text-white">

      {/* ── Hero ── */}
      <div className="max-w-4xl mx-auto px-5 pt-20 pb-16 text-center">
        <p
          className="text-[#D36A18] font-bold tracking-widest text-xs uppercase mb-6"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          THE GOODS UNIVERSE STOREFRONT
        </p>

        <h1
          className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          My Curated Blueprint for a Toxic-Free Home.
        </h1>

        <p
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-open-sans)" }}
        >
          Shop the exact buy-it-for-life cookware, safe food storage, and production gear I use daily. No forever chemicals, no microplastics.
        </p>

        <a
          href="https://www.amazon.com/shop/thegoodsuniverse?ref_=cm_sw_r_cp_ud_aipsfshop_HJNX6BH6Y7M7M4085JT4"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#D36A18] text-white font-bold text-lg px-10 py-5 rounded-full shadow-[0_0_40px_-10px_#D36A18] hover:bg-[#b85a12] hover:scale-105 transition-all duration-300"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Shop the Amazon Storefront
        </a>
      </div>

      {/* ── Current Obsessions ── */}
      <div className="w-full max-w-6xl mx-auto my-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Product 1: Luxe Bidet */}
          <div className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:border-[#D36A18]/40 hover:-translate-y-1 transition-all duration-300">
            <div>
              <span className="text-[#D36A18] font-bold tracking-widest text-xs uppercase mb-3 block">Hygiene Upgrade</span>
              <h2 className="text-2xl font-bold text-white mb-4">Toxic-Free Bidet Setup</h2>
              <p className="text-gray-400 text-sm mb-6">
                Ditch bleached toilet paper. This 10-minute install, dual-nozzle bidet requires no electricity and is the ultimate daily hygiene upgrade for a clean home.
              </p>
            </div>
            <a
              href="https://amzn.to/4timhKC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-gray-200 transition-all duration-300"
            >
              Shop the Bidet on Amazon
            </a>
          </div>

          {/* Product 2: Dreambaby Duck Thermometer */}
          <div className="bg-[#111] border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:border-[#D36A18]/40 hover:-translate-y-1 transition-all duration-300">
            <div>
              <span className="text-[#D36A18] font-bold tracking-widest text-xs uppercase mb-3 block">Family Safety</span>
              <h2 className="text-2xl font-bold text-white mb-4">Digital Bath & Room Thermometer</h2>
              <p className="text-gray-400 text-sm mb-6">
                Stops the guesswork of bath safety. Instant, accurate digital readings ensure the water is safe for delicate skin. BPA-free and doubles as a fun toy.
              </p>
            </div>
            <a
              href="https://amzn.to/419cuKK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-gray-200 transition-all duration-300"
            >
              Shop the Duck on Amazon
            </a>
          </div>

        </div>
      </div>

      {/* ── Resources Grid ── */}
      <div className="max-w-4xl mx-auto px-5 py-20">
        <h2
          className="text-2xl font-bold text-white mb-8"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Creator Tools &amp; Resources
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 — 3D Blueprint */}
          <Link href="/3d-blueprint" className="block bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-[#D36A18]/50 transition duration-300 group">
            <span className="text-3xl mb-4 block">🎬</span>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#D36A18] transition">The 3D AI Blueprint</h3>
            <p className="text-sm text-gray-400">The exact framework used to generate 3.5M views. Free prompts and workflow inside.</p>
          </Link>

          {/* Card 2 — Produce Wash */}
          <Link href="/produce-wash" className="block bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-[#D36A18]/50 transition duration-300 group">
            <span className="text-3xl mb-4 block">🫐</span>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#D36A18] transition">The Viral Produce Wash</h3>
            <p className="text-sm text-gray-400">The original free guide to the "Vinegar Spa" for keeping berries crisp for weeks.</p>
          </Link>

          {/* Card 3 — Paid Guide */}
          <Link href="/paid-guide" className="block bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-[#D36A18]/50 transition duration-300 group">
            <span className="text-3xl mb-4 block">📱</span>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#D36A18] transition">The Creator Playbook</h3>
            <p className="text-sm text-gray-400">My premium strategies for growing and monetizing your audience.</p>
          </Link>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="text-center pb-10 text-xs text-gray-600" style={{ fontFamily: "var(--font-open-sans)" }}>
        © {new Date().getFullYear()} The Goods Universe. All rights reserved.
      </footer>

    </div>
  );
}
