import type { Metadata } from "next";
import Image from "next/image";
import { CountUp } from "@/components/CountUp";
import { PageHero } from "@/components/PageHero";
import { commitments, steps } from "@/lib/content";

export const metadata: Metadata = {
  title: "L'entreprise : Abdel Guenniche, maçon à Salon-de-Provence",
  description:
    "EGS Maçonnerie, l'entreprise d'Abdel Guenniche à Salon-de-Provence : un parcours de maçon commencé à seize ans, plus de trente maisons construites, maçonnerie, charpente et rénovation. Visite et devis gratuits, planning tenu, garantie décennale.",
  alternates: { canonical: "/entreprise" },
};

const values = [
  {
    title: "Le travail bien fait",
    text: "Des murs droits, des niveaux justes, des joints propres. Ce qui se voit comme ce qui ne se voit plus une fois l'enduit posé.",
  },
  {
    title: "La parole tenue",
    text: "Un prix, une date, un planning. Si quelque chose change, vous le savez tout de suite, et par nous.",
  },
  {
    title: "Le respect des lieux",
    text: "Votre maison, votre jardin, vos voisins. On travaille avec discrétion : bâches, protections, nettoyage chaque soir. Chez vous comme chez nous.",
  },
  {
    title: "Le bâti d'ici",
    text: "La pierre du pays, la chaux, les teintes de Provence. On restaure dans les règles de l'art et on construit en accord avec le paysage.",
  },
];

// Parcours d'Abdel Guenniche, d'après la page « Qui suis-je ? » de l'ancien site.
const journey = [
  {
    n: "16 ans",
    title: "Le métier dans les mains",
    text: "Il quitte l'école à seize ans pour devenir maçon et apprend auprès de son oncle, sur les chantiers, en Algérie.",
  },
  {
    n: "7 ans",
    title: "Sa première entreprise",
    text: "Il monte sa propre entreprise en Algérie et l'exerce plus de sept ans. Il y construit notamment sa maison et celle de ses parents.",
  },
  {
    n: "2007",
    title: "L'Ardèche",
    text: "Arrivé en France, il fonde une entreprise de maçonnerie, de rénovation et de charpente en Ardèche. Plus de trente maisons, des immeubles et des piscines sortent de terre.",
  },
  {
    n: "2020",
    title: "Salon-de-Provence",
    text: "En février 2020, EGS s'installe à Salon-de-Provence et intervient dans les Bouches-du-Rhône et les départements limitrophes.",
  },
];

export default function EntreprisePage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "L'entreprise", path: "/entreprise" }]}
        kicker="L'entreprise"
        title="Un maçon du pays salonais, exigeant et joignable."
        mutedFrom={5}
        lead="EGS Maçonnerie, c'est l'entreprise d'Abdel Guenniche, maçon depuis l'âge de seize ans, installé à Salon-de-Provence depuis 2020. Maçonnerie, charpente et rénovation, des chantiers suivis de près, et un interlocuteur qui décroche quand vous appelez."
        image={{ src: "/images/geste-taille.jpg", alt: "Maçon taillant une pierre à la main sur un chantier" }}
      />

      <section className="section section--alt">
        <div className="wrap split2">
          <div className="media split2__media" data-reveal="">
            <Image src="/images/geste-truelle.jpg" alt="Maçon posant le mortier à la truelle sur un mur de briques" fill sizes="(min-width: 900px) 45vw, 92vw" quality={74} />
          </div>
          <div>
            <p className="kicker" data-reveal="">
              Parcours
            </p>
            <h2 className="h2 split2__title" data-reveal="">
              Maçon depuis toujours, <span className="muted">bâtisseur avant tout.</span>
            </h2>
            <ol role="list" className="timeline timeline--wide">
              {journey.map((j) => (
                <li key={j.n} data-reveal="">
                  <span className="timeline__n display">{j.n}</span>
                  <div>
                    <h3 className="timeline__title">{j.title}</h3>
                    <p>{j.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <figure className="quote" data-reveal="">
              <blockquote>
                <p>« Abdel est un maçon très professionnel, à l&apos;écoute. »</p>
              </blockquote>
              <figcaption>Avis client publié sur maconnerieinfo.com</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap values">
          <h2 className="h2 values__title" data-reveal="">
            Ce qui nous tient <span className="muted">debout.</span>
          </h2>
          <ol role="list" className="values__list">
            {values.map((v, i) => (
              <li key={v.title} data-reveal="" style={{ "--d": i * 90 } as React.CSSProperties}>
                <span className="values__n display">0{i + 1}</span>
                <h3 className="values__name">{v.title}</h3>
                <p>{v.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--nuit">
        <div className="wrap">
          <ul className="engage__grid" role="list">
            {commitments.map((c, i) => (
              <li key={c.label} data-reveal="" style={{ "--d": i * 110 } as React.CSSProperties}>
                <span className="engage__value display">
                  <CountUp to={c.value} suffix={c.suffix} />
                </span>
                <span className="engage__label">{c.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap split2">
          <div className="media split2__media" data-reveal="">
            <Image src="/images/geste-outils.jpg" alt="Outils de maçon dans un seau sur un chantier" fill sizes="(min-width: 900px) 45vw, 92vw" quality={74} />
          </div>
          <div>
            <p className="kicker" data-reveal="">
              Méthode
            </p>
            <h2 className="h2 split2__title" data-reveal="">
              De la visite <span className="muted">à la réception.</span>
            </h2>
            <ol role="list" className="timeline">
              {steps.map((s) => (
                <li key={s.n} data-reveal="">
                  <span className="timeline__n display">{s.n}</span>
                  <div>
                    <h3 className="timeline__title">{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section--tight section--alt">
        <div className="wrap guarantees">
          <div data-reveal="">
            <h2 className="detail__box-title">Assurances</h2>
            <p>Garantie décennale et responsabilité civile professionnelle. Attestations jointes à chaque devis.</p>
          </div>
          <div data-reveal="" style={{ "--d": 90 } as React.CSSProperties}>
            <h2 className="detail__box-title">Pour qui</h2>
            <p>Particuliers, architectes, maîtres d&apos;œuvre, syndics de copropriété, agences immobilières.</p>
          </div>
          <div data-reveal="" style={{ "--d": 180 } as React.CSSProperties}>
            <h2 className="detail__box-title">Où</h2>
            <p>
              Salon-de-Provence et le pays salonais, et plus largement les Bouches-du-Rhône et les départements
              limitrophes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
