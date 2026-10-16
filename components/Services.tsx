import type { ReactNode } from "react";

type Service = {
  title: string;
  description: string;
  items: string[];
  icon: ReactNode;
};

const iconProps = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#2D6A4F",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const services: Service[] = [
  {
    title: "Nettoyage résidentiel",
    description:
      "Appartements et villas : un intérieur sain et soigné, au quotidien comme après un chantier.",
    items: [
      "Entretien régulier",
      "Nettoyage de fond",
      "Remise en état après travaux",
      "Nettoyage avant ou après emménagement",
    ],
    icon: (
      <svg {...iconProps}>
        <path d="M3 11l9-8 9 8" />
        <path d="M5 10v10h14V10" />
        <path d="M10 20v-6h4v6" />
      </svg>
    ),
  },
  {
    title: "Nettoyage professionnel",
    description:
      "Bureaux, commerces et entrepôts : des locaux impeccables pour vos équipes et vos clients.",
    items: [
      "Bureaux, commerces et entrepôts",
      "Entretien périodique ou quotidien",
      "Nettoyage des vitres",
      "Entretien des sols",
    ],
    icon: (
      <svg {...iconProps}>
        <rect x="4" y="3" width="16" height="18" rx="1.5" />
        <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" />
        <path d="M10 21v-3h4v3" />
      </svg>
    ),
  },
  {
    title: "Désinfection & assainissement",
    description:
      "Des protocoles d'hygiène rigoureux pour protéger vos espaces et les personnes qui les occupent.",
    items: [
      "Désinfection des surfaces",
      "Protocoles d'hygiène rigoureux",
      "Locaux sensibles : cabinets, cliniques, restaurants",
    ],
    icon: (
      <svg {...iconProps}>
        <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z" />
        <path d="M8.5 12l2.5 2.5 4.5-5" />
      </svg>
    ),
  },
];

function Check() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2D6A4F"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 shrink-0"
      aria-hidden="true"
    >
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="scroll-mt-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#2D6A4F]">
            Nos services
          </p>
          <h2 className="font-heading mt-3 text-3xl font-extrabold tracking-tight text-[#1B4332] sm:text-4xl">
            Un nettoyage adapté à chaque besoin
          </h2>
          <p className="font-body mt-4 text-base text-[#1B4332]/75 sm:text-lg">
            Particuliers ou entreprises, nous intervenons avec rigueur et
            ponctualité.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group rounded-3xl border border-[#EAF1EC] bg-[#FAF8F2] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#2D6A4F] hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF1EC]">
                {s.icon}
              </div>
              <h3 className="font-heading mt-6 text-xl font-bold text-[#1B4332]">
                {s.title}
              </h3>
              <p className="font-body mt-3 text-sm leading-relaxed text-[#1B4332]/75">
                {s.description}
              </p>
              <ul className="font-body mt-6 space-y-3 text-sm text-[#1B4332]">
                {s.items.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl bg-[#1B4332] px-6 py-8 text-center sm:px-10 md:flex-row md:text-left">
          <p className="font-heading text-lg font-semibold text-white sm:text-xl">
            Un besoin spécifique ? Devis gratuit sous 24h, sans engagement.
          </p>
          <a
            href="#contact"
            className="font-heading shrink-0 rounded-lg bg-[#EAF1EC] px-6 py-3.5 text-sm font-semibold text-[#1B4332] transition-colors hover:bg-white"
          >
            Demander un devis
          </a>
        </div>
      </div>
    </section>
  );
}
