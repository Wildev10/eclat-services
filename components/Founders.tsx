import Image from "next/image";

type Founder = {
  name: string;
  role: string;
  text: string;
  tags: string[];
  photo?: string;
};

const founders: Founder[] = [
  {
    name: "Wilfried Deguenon",
    role: "Cofondateur",
    text: "Agent de nettoyage depuis 2021 et chef d'équipe, Wilfried connaît chaque étape du métier. Il supervise la qualité et l'organisation des interventions.",
    tags: ["Encadrement", "Terrain"],
    photo: "/images/wilfried.jpg",
  },
  {
    name: "Cépin Ogou",
    role: "Cofondateur",
    text: "Titulaire d'une licence en analyse biomédicale, Cépin apporte une vraie rigueur en matière d'hygiène et de désinfection, ainsi que le sens du détail.",
    tags: ["Hygiène", "Biomédical"],
    photo: "/images/cepin.jpg",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Avatar({ name, photo }: { name: string; photo?: string }) {
  if (photo) {
    return (
      <div className="mx-auto h-36 w-36 overflow-hidden rounded-full ring-4 ring-[#EAF1EC]">
        <Image
          src={photo}
          alt={`${name}, cofondateur d'ÉCLAT SERVICES`}
          width={288}
          height={288}
          className="h-full w-full origin-[50%_5%] scale-[1.25] rounded-full object-cover object-[50%_20%]"
        />
      </div>
    );
  }

  return (
    <div
      className="font-heading mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-[#1B4332] text-4xl font-bold text-white ring-4 ring-[#EAF1EC]"
      aria-hidden="true"
    >
      {initials(name)}
    </div>
  );
}

export default function Founders() {
  return (
    <section id="fondateurs" className="scroll-mt-16 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#2D6A4F]">
            Les fondateurs
          </p>
          <h2 className="font-heading mt-3 text-3xl font-extrabold tracking-tight text-[#1B4332] sm:text-4xl">
            Deux professionnels du terrain, une même exigence
          </h2>
          <p className="font-body mt-4 text-base text-[#1B4332]/75 sm:text-lg">
            Nous connaissons le métier de l&apos;intérieur.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
          {founders.map((f) => (
            <article
              key={f.name}
              className="rounded-3xl border border-[#EAF1EC] bg-[#FAF8F2] p-8 text-center transition duration-300 hover:-translate-y-1 hover:border-[#2D6A4F] hover:shadow-lg"
            >
              <Avatar name={f.name} photo={f.photo} />
              <h3 className="font-heading mt-6 text-xl font-bold text-[#1B4332]">
                {f.name}
              </h3>
              <p className="font-heading mt-1 text-sm font-semibold text-[#2D6A4F]">
                {f.role}
              </p>
              <p className="font-body mt-4 text-sm leading-relaxed text-[#1B4332]/75">
                {f.text}
              </p>
              <ul className="mt-6 flex flex-wrap justify-center gap-2">
                {f.tags.map((tag) => (
                  <li
                    key={tag}
                    className="font-body rounded-full bg-[#EAF1EC] px-3 py-1 text-xs font-medium text-[#2D6A4F]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
