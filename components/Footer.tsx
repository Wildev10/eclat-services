import { cacheLife } from "next/cache";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Pourquoi nous", href: "#pourquoi-nous" },
  { label: "Fondateurs", href: "#fondateurs" },
  { label: "Recrutement", href: "#recrutement" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Nettoyage résidentiel",
  "Nettoyage professionnel",
  "Désinfection & assainissement",
];

const phones = [
  { label: "+229 01 61 79 07 66", href: "tel:+2290161790766" },
  { label: "+229 96 77 41 75", href: "tel:+22996774175" },
];

const iconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "shrink-0",
  "aria-hidden": true,
};

function PhoneIcon() {
  return (
    <svg {...iconProps}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg {...iconProps}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 6L2 7" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg {...iconProps}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

// Cache Components interdit new Date() dans le shell statique sans cache explicite.
async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

const headingClass =
  "font-heading mb-4 text-sm uppercase tracking-widest text-[#EAF1EC]";
const linkClass = "text-white/70 transition hover:text-white";

export default function Footer() {
  return (
    <footer className="bg-[#1B4332] text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <a href="#accueil" className="font-heading text-xl">
              <span className="font-bold text-white">ÉCLAT</span>{" "}
              <span className="font-semibold text-[#EAF1EC]">SERVICES</span>
            </a>
            <p className="font-body mt-4 max-w-xs text-sm text-white/70">
              Nettoyage professionnel pour particuliers et entreprises à
              Cotonou et Abomey-Calavi.
            </p>
            <div className="font-body mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/70">
              <PhoneIcon />
              {phones.map((p) => (
                <a key={p.href} href={p.href} className={linkClass}>
                  {p.label}
                </a>
              ))}
            </div>
            <a
              href="mailto:deguenonwilfried740@gmail.com"
              className={`font-body mt-3 flex items-center gap-2 text-sm break-all ${linkClass}`}
            >
              <MailIcon />
              deguenonwilfried740@gmail.com
            </a>
          </div>

          <nav aria-label="Navigation du pied de page">
            <h2 className={headingClass}>Navigation</h2>
            <ul className="font-body space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkClass}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={headingClass}>Services</h2>
            <ul className="font-body space-y-2 text-sm text-white/70">
              {services.map((s) => (
                <li key={s}>{s}</li>
              ))}
              <li>
                <a href="#contact" className={linkClass}>
                  Devis gratuit
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-8 h-px bg-white/20" />

        <div className="font-body flex flex-col items-center justify-between gap-3 py-6 text-center text-sm text-white/50 md:flex-row md:text-left">
          <p>
            © <CurrentYear /> ÉCLAT SERVICES. Tous droits réservés.
          </p>
          <p className="flex items-center gap-2">
            <PinIcon />
            Abomey-Calavi &amp; Cotonou, Bénin
          </p>
        </div>
      </div>
    </footer>
  );
}
