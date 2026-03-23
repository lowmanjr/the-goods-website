import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Logo + Brand name */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="The Goods logo"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <span
            className="text-xl font-bold text-[#2C2621]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            The Goods
          </span>
        </div>

        {/* CTA */}
        <a
          href="#cheat-sheet"
          className="rounded-full bg-[#D36A18] px-5 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Get the Cheat Sheet
        </a>
      </div>
    </nav>
  );
}
