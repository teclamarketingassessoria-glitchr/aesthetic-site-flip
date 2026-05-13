import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos — Carcki Esquadrias de PVC" },
      { name: "description", content: "Galeria de obras com esquadrias Carcki: residências, apartamentos e empreendimentos comerciais." },
      { property: "og:title", content: "Projetos — Carcki" },
      { property: "og:description", content: "Obras realizadas com esquadrias de PVC Carcki." },
      { property: "og:url", content: "/projetos" },
    ],
    links: [{ rel: "canonical", href: "/projetos" }],
  }),
  component: ProjectsPage,
});

const projects = [
  { name: "Residência B.", location: "Brusque, SC", ratio: "3/4" },
  { name: "Cobertura A.", location: "Itajaí, SC", ratio: "4/5" },
  { name: "Casa de campo", location: "Nova Trento, SC", ratio: "3/4" },
  { name: "Apartamento M.", location: "Florianópolis, SC", ratio: "4/5" },
  { name: "Empreendimento V.", location: "Balneário Camboriú, SC", ratio: "3/4" },
  { name: "Residência K.", location: "Blumenau, SC", ratio: "4/5" },
];

function ProjectsPage() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-20">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow mb-6">Projetos</p>
            <h1 className="font-display text-5xl md:text-7xl text-ink max-w-4xl leading-[1.02]">
              Qualidade comprovada <span className="italic">em cada obra.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-2xl text-lg text-foreground/75 leading-relaxed">
              Cada projeto é único, mas todos têm algo em comum: a assinatura de qualidade da Carcki. Nossas esquadrias já transformaram residências, apartamentos e empreendimentos comerciais, sempre garantindo conforto, sofisticação e segurança.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x grid md:grid-cols-2 gap-x-6 gap-y-20">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.1} className={i % 3 === 0 ? "md:mt-20" : ""}>
              <ImagePlaceholder label={p.name} ratio={p.ratio} />
              <div className="mt-5 flex items-baseline justify-between">
                <h2 className="font-display text-2xl text-ink">{p.name}</h2>
                <p className="text-xs tracking-widest uppercase text-muted-foreground">{p.location}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
