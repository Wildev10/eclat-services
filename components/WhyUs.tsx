import type { ReactNode } from "react";

type Point = {
  title: string;
  text: string;
  icon: ReactNode;
};

const iconProps = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#2D6A4F",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const points: Point[] = [
  {
    title: "Équipe formée et encadrée",
    text: "Chaque intervenant est formé à nos standards et supervisé sur le terrain.",
    icon: (
      <svg {...iconProps}>
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M17 14c2.6 0 4.5 1.9 4.5 4.5" />
      </svg>
    ),
  },
  {
    title: "Ponctualité et fiabilité",
    text: "Des horaires respectés et un travail livré comme convenu, à chaque passage.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    ),
  },
  {
    title: "Expertise hygiène",
    text: "Un fondateur issu de l'analyse biomédicale : des protocoles de désinfection sérieux.",
    icon: (
      <svg {...iconProps}>
        <path d="M9 3h6" />
        <path d="M10 3v6.5L4.8 18.2A2 2 0 0 0 6.5 21h11a2 2 0 0 0 1.7-2.8L14 9.5V3" />
        <path d="M7.5 15h9" />
      </svg>
    ),
  },
  {
    title: "Devis clair et gratuit",
    text: "Réponse sous 24h, sans engagement et sans mauvaise surprise.",
    icon: (
      <svg {...iconProps}>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" />
        <path d="M14 3v5h5" />
        <path d="M9 14.5l2 2 4-4.5" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section id="pourquoi-nous" className="scroll-mt-16 bg-[#FAF8F2]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#2D6A4F]">
            Pourquoi nous
          </p>
          <h2 className="font-heading mt-3 text-3xl font-extrabold tracking-tight text-[#1B4332] sm:text-4xl">
            La rigueur du terrain, l&apos;exigence de l&apos;hygiène
          </h2>
          <p className="font-body mt-5 max-w-xl text-base leading-relaxed text-[#1B4332]/75 sm:text-lg">
            Nous sommes agents de nettoyage depuis plusieurs années. Nous
            connaissons le métier de l&apos;intérieur, et nous avons fondé
            ÉCLAT SERVICES pour offrir un travail irréprochable, avec une
            équipe que nous formons et encadrons nous-mêmes.
          </p>
          <a
            href="#contact"
            className="font-heading mt-8 inline-block rounded-lg bg-[#1B4332] px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#2D6A4F]"
          >
            Demander un devis gratuit
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {points.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-[#EAF1EC] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#2D6A4F] hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF1EC]">
                {p.icon}
              </div>
              <h3 className="font-heading mt-5 text-lg font-bold text-[#1B4332]">
                {p.title}
              </h3>
              <p className="font-body mt-2 text-sm leading-relaxed text-[#1B4332]/75">
                {p.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
