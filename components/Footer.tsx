import Image from "next/image";

const socials = [
  { label: "Instagram (@thegoodsuniverse)", href: "https://www.instagram.com/thegoodsuniverse" },
  { label: "YouTube", href: "https://www.youtube.com/@thegoodsuniverse" },
  { label: "TikTok", href: "https://www.tiktok.com/@thegoodsuniverse" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#2C2621] px-6 py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        {/* Left — Brand & Copyright */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="The Goods logo"
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
            <span
              className="text-xl font-bold text-white"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              The Goods
            </span>
          </div>
          <p
            className="mt-4 text-sm text-white/60"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            © 2026 The Goods Universe. All rights reserved.
          </p>
        </div>

        {/* Right — Disclaimer & Socials */}
        <div className="max-w-sm">
          <p
            className="text-xs leading-relaxed text-white/50"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            Disclaimer: The information provided is for educational and
            informational purposes only. It is not intended as medical advice.
            Always consult with a qualified healthcare professional.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white transition-colors hover:text-[#D36A18]"
                style={{ fontFamily: "var(--font-open-sans)" }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
