"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Pourquoi nous", href: "#pourquoi-nous" },
  { label: "Fondateurs", href: "#fondateurs" },
  { label: "Recrutement", href: "#recrutement" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          onClick={close}
          className="font-heading text-xl tracking-tight"
        >
          <span className="font-extrabold text-[#1B4332]">ÉCLAT</span>{" "}
          <span className="font-semibold text-[#2D6A4F]">SERVICES</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-[#1B4332] transition-colors hover:text-[#2D6A4F]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="font-heading hidden rounded-lg bg-[#1B4332] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2D6A4F] md:inline-block"
        >
          Devis gratuit
        </a>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#1B4332] hover:bg-[#EAF1EC] md:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-[#EAF1EC] bg-white md:hidden">
          <ul className="flex flex-col px-4 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={close}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-[#1B4332] hover:bg-[#EAF1EC]"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2 pb-1">
              <a
                href="#contact"
                onClick={close}
                className="block rounded-lg bg-[#1B4332] px-5 py-3 text-center text-base font-semibold text-white hover:bg-[#2D6A4F]"
              >
                Devis gratuit
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
