const positions = [
  "Agent(e) de nettoyage",
  "Chef(fe) d'équipe",
  "Agent(e) d'entretien et désinfection",
];

const expectations = [
  "Sérieux et ponctualité",
  "Goût du travail bien fait",
  "Disponibilité",
  "Respect des consignes d'hygiène",
];

const whatsappUrl = "https://wa.me/2290161790766";
const mailUrl =
  "mailto:deguenonwilfried740@gmail.com?subject=Candidature%20-%20%C3%89CLAT%20SERVICES";

function Check() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#EAF1EC"
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

export default function Recruitment() {
  return (
    <section id="recrutement" className="scroll-mt-16 bg-[#1B4332] text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#EAF1EC]">
            Recrutement
          </p>
          <h2 className="font-heading mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Rejoignez l&apos;équipe ÉCLAT SERVICES
          </h2>
          <p className="font-body mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Nous recrutons des agents de nettoyage sérieux, ponctuels et
            motivés à Cotonou et Abomey-Calavi. Les candidatures spontanées
            sont ouvertes.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading rounded-lg bg-white px-6 py-3.5 text-center text-sm font-semibold text-[#1B4332] transition-colors hover:bg-[#EAF1EC]"
            >
              Postuler par WhatsApp
            </a>
            <a
              href={mailUrl}
              className="font-heading rounded-lg border-2 border-white px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Envoyer un e-mail
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/20 bg-white/10 p-7 sm:p-8">
          <h3 className="font-heading text-lg font-bold">Les postes</h3>
          <ul className="font-body mt-4 space-y-3 text-sm sm:text-base">
            {positions.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <span
                  className="h-2 w-2 shrink-0 rounded-full bg-[#EAF1EC]"
                  aria-hidden="true"
                />
                {p}
              </li>
            ))}
          </ul>

          <div className="my-7 border-t border-white/20" />

          <h3 className="font-heading text-lg font-bold">
            Ce que nous attendons
          </h3>
          <ul className="font-body mt-4 space-y-3 text-sm sm:text-base">
            {expectations.map((e) => (
              <li key={e} className="flex gap-3">
                <Check />
                <span>{e}</span>
              </li>
            ))}
          </ul>

          <p className="font-body mt-7 text-sm text-white/75">
            Formation et encadrement assurés par nos fondateurs.
          </p>
        </div>
      </div>
    </section>
  );
}
