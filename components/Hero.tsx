const stats = [
  { value: "24h", label: "Devis gratuit" },
  { value: "100%", label: "Équipe formée" },
  { value: "7j/7", label: "Disponibilité" },
];

function Sparkle({ className }: { className?: string }) {
  return (
    <path
      className={className}
      d="M0 -1 C0.08 -0.35 0.35 -0.08 1 0 C0.35 0.08 0.08 0.35 0 1 C-0.08 0.35 -0.35 0.08 -1 0 C-0.35 -0.08 -0.08 -0.35 0 -1Z"
    />
  );
}

export default function Hero() {
  return (
    <section id="accueil" className="scroll-mt-16 bg-[#FAF8F2] pt-16">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-10">
          <div>
            <span className="font-body inline-block rounded-full bg-[#EAF1EC] px-4 py-1.5 text-sm font-medium text-[#2D6A4F]">
              Abomey-Calavi &amp; Cotonou, Bénin
            </span>
            <h1 className="font-heading mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#1B4332] sm:text-5xl lg:text-6xl">
              Un espace propre, une image qui brille.
            </h1>
            <p className="font-body mt-6 max-w-xl text-base leading-relaxed text-[#1B4332]/80 sm:text-lg">
              Services de nettoyage résidentiel et professionnel. Une équipe
              formée, rigoureuse et ponctuelle, pour des résultats
              irréprochables.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="font-heading rounded-lg bg-[#1B4332] px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#2D6A4F]"
              >
                Demander un devis gratuit
              </a>
              <a
                href="#services"
                className="font-heading rounded-lg border-2 border-[#1B4332] px-6 py-3.5 text-center text-sm font-semibold text-[#1B4332] transition-colors hover:bg-[#EAF1EC]"
              >
                Nos services
              </a>
            </div>
            <p className="font-body mt-5 flex items-center gap-2 text-sm text-[#1B4332]/80">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2D6A4F"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path d="M7.5 12.5l3 3 6-6.5" />
              </svg>
              Devis gratuit sous 24h, sans engagement.
            </p>
          </div>

          <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-3xl bg-[#EAF1EC] md:aspect-[4/5]">
            <svg
              viewBox="0 0 400 400"
              className="h-full w-full"
              role="img"
              aria-label="Illustration d'étincelles de propreté"
            >
              <circle cx="200" cy="200" r="150" fill="#2D6A4F" opacity="0.08" />
              <circle cx="200" cy="200" r="100" fill="#2D6A4F" opacity="0.1" />
              <g fill="#1B4332" transform="translate(205 195) scale(85)">
                <Sparkle />
              </g>
              <g fill="#2D6A4F" transform="translate(290 120) scale(38)">
                <Sparkle />
              </g>
              <g fill="#2D6A4F" transform="translate(115 290) scale(30)">
                <Sparkle />
              </g>
              <g fill="#1B4332" opacity="0.6" transform="translate(110 130) scale(18)">
                <Sparkle />
              </g>
              <g fill="#2D6A4F" opacity="0.6" transform="translate(305 285) scale(16)">
                <Sparkle />
              </g>
              <g fill="#1B4332" opacity="0.4" transform="translate(205 75) scale(10)">
                <Sparkle />
              </g>
            </svg>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-3 gap-4 border-t border-[#1B4332]/10 pt-10 md:mt-20">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="font-heading text-2xl font-extrabold text-[#1B4332] sm:text-4xl">
                {s.value}
              </dt>
              <dd className="font-body mt-1 text-xs text-[#2D6A4F] sm:text-sm">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
