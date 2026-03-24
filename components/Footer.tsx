import Image from "next/image";

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/thegoodsuniverse",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.609.074-3.034.4-4.17 1.536C1.747 2.744 1.421 4.169 1.347 5.778 1.289 7.058 1.275 7.466 1.275 12c0 4.534.014 4.942.072 6.222.074 1.609.4 3.034 1.536 4.17 1.136 1.136 2.561 1.462 4.17 1.536 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.609-.074 3.034-.4 4.17-1.536 1.136-1.136 1.462-2.561 1.536-4.17.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.074-1.609-.4-3.034-1.536-4.17-1.136-1.136-2.561-1.462-4.17-1.536C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/TheGoods3D",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/thegoodsuniverse",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    ),
  },
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
          <div className="mt-6 flex items-center gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-white/70 transition-colors duration-300 hover:text-[#D36A18]"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
