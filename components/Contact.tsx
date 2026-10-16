"use client";

import type { FormEvent, ReactNode } from "react";

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#2D6A4F",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "mt-0.5 shrink-0",
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

const fieldClass =
  "font-body mt-1.5 w-full rounded-lg border border-gray-300 bg-white p-3 text-[#1B4332] outline-none transition focus:border-transparent focus:ring-2 focus:ring-[#2D6A4F]";
const labelClass = "font-body block text-sm text-gray-700";

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
    </div>
  );
}

const contacts = [
  { icon: <PhoneIcon />, label: "Wilfried : +229 01 61 79 07 66", href: "tel:+2290161790766" },
  { icon: <PhoneIcon />, label: "Cépin : +229 96 77 41 75", href: "tel:+22996774175" },
  {
    icon: <MailIcon />,
    label: "deguenonwilfried740@gmail.com",
    href: "mailto:deguenonwilfried740@gmail.com",
  },
  { icon: <PinIcon />, label: "Abomey-Calavi & Cotonou, Bénin" },
];

const hours = [
  { day: "Lundi – Samedi", value: "7h – 19h" },
  { day: "Dimanche", value: "Sur rendez-vous" },
  { day: "Urgences", value: "Nous contacter" },
];

export default function Contact() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Merci ! Nous vous répondrons sous 24h.");
  }

  return (
    <section id="contact" className="scroll-mt-16 bg-[#FAF8F2]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-[#1B4332]">
            Contact
          </p>
          <h2 className="font-heading mt-3 text-3xl font-extrabold tracking-tight text-[#1B4332] sm:text-4xl">
            Demandez votre devis gratuit
          </h2>
          <p className="font-body mt-4 text-base text-[#1B4332]/75 sm:text-lg">
            Réponse garantie sous 24h. Sans engagement.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:mt-16 lg:grid-cols-[3fr_2fr]">
          <form
            action="#"
            onSubmit={handleSubmit}
            className="space-y-5 rounded-xl bg-white p-8 shadow-sm"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Nom complet">
                <input id="name" name="name" type="text" autoComplete="name" required className={fieldClass} />
              </Field>
              <Field id="phone" label="Téléphone">
                <input id="phone" name="phone" type="tel" autoComplete="tel" required className={fieldClass} />
              </Field>
            </div>
            <Field id="email" label="Email (optionnel)">
              <input id="email" name="email" type="email" autoComplete="email" className={fieldClass} />
            </Field>
            <Field id="service" label="Type de service">
              <select id="service" name="service" defaultValue="" required className={fieldClass}>
                <option value="" disabled>
                  Choisissez un service
                </option>
                <option>Nettoyage résidentiel</option>
                <option>Nettoyage professionnel</option>
                <option>Désinfection &amp; assainissement</option>
                <option>Autre</option>
              </select>
            </Field>
            <Field id="message" label="Message / Détails">
              <textarea id="message" name="message" rows={5} className={fieldClass} />
            </Field>
            <button
              type="submit"
              className="font-heading w-full rounded-lg bg-[#1B4332] py-3 font-semibold text-white transition-colors hover:bg-[#2D6A4F]"
            >
              Envoyer ma demande
            </button>
            <p className="font-body text-center text-xs text-gray-500">
              Vos informations restent confidentielles.
            </p>
          </form>

          <div className="flex flex-col gap-6">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="font-heading mb-4 text-lg font-semibold text-[#1B4332]">
                Nos coordonnées
              </h3>
              <ul className="font-body space-y-3 text-sm text-[#1B4332]">
                {contacts.map((c) => (
                  <li key={c.label} className="flex gap-3">
                    {c.icon}
                    {c.href ? (
                      <a href={c.href} className="break-all hover:text-[#2D6A4F] hover:underline">
                        {c.label}
                      </a>
                    ) : (
                      <span>{c.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="font-heading mb-4 text-lg font-semibold text-[#1B4332]">
                Horaires
              </h3>
              <ul className="font-body space-y-2 text-sm text-[#1B4332]">
                {hours.map((h) => (
                  <li key={h.day}>
                    <span className="font-medium">{h.day}</span> : {h.value}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-[#1B4332] p-6 text-white">
              <h3 className="font-heading text-lg font-semibold">Réponse rapide</h3>
              <p className="font-body mt-2 text-sm text-white/85">
                Préférez WhatsApp pour une réponse immédiate
              </p>
              <a
                href="https://wa.me/2290161790766"
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading mt-5 inline-block rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#1B4332] transition-colors hover:bg-gray-100"
              >
                Écrire sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
