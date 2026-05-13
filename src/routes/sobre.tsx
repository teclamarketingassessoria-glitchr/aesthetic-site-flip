import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Carcki Esquadrias de PVC" },
      { name: "description", content: "Conheça a Carcki: tecnologia belga Deceuninck, sofisticação e excelência em cada esquadria de PVC." },
      { property: "og:title", content: "Sobre — Carcki" },
      { property: "og:description", content: "Tecnologia belga Deceuninck e excelência nacional." },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: AboutPage,
});

const reasons = [
  "Vedação acústica de alto desempenho",
  "Conforto térmico em todas as estações",
  "Perfis coloridos e acabamentos exclusivos",
  "Fino acabamento e design sofisticado",
  "Garantia de 20 anos",
  "Tecnologia belga Deceuninck",
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-20">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow mb-6">Quem somos</p>
            <h1 className="font-display text-5xl md:text-7xl text-ink max-w-4xl leading-[1.02]">
              Esquadrias pensadas como <span className="italic">arquitetura</span>, executadas como engenharia.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7 space-y-6 text-lg text-foreground/75 leading-relaxed">
            <Reveal>
              <p>
                Combinamos tecnologia de ponta, matéria-prima de alta qualidade e uma equipe dedicada para oferecer esquadrias de PVC que unem sofisticação, resistência e o melhor custo-benefício.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Para garantir ainda mais qualidade, contamos com a parceria da <span className="text-ink">Deceuninck</span>, fornecedora internacional de perfis de PVC, referência em tecnologia belga e inovação no setor. Essa união garante que cada esquadria Carcki carregue a confiança de uma marca global e a excelência de uma execução nacional.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.15}>
              <ImagePlaceholder label="Equipe Carcki · fábrica" ratio="3/4" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-32 bg-stone">
        <div className="container-x grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            <Reveal>
              <ImagePlaceholder label="Residência de alto padrão · esquadrias Carcki" ratio="4/5" />
            </Reveal>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <Reveal>
              <p className="eyebrow mb-6">Por que escolher</p>
              <h2 className="font-display text-4xl md:text-5xl text-ink mb-10 leading-tight">
                Por que escolher a Carcki?
              </h2>
            </Reveal>
            <ul className="divide-y divide-foreground/10">
              {reasons.map((r, i) => (
                <Reveal key={r} delay={i * 0.05} className="py-4 flex items-baseline gap-5">
                  <span className="text-xs text-primary tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-lg text-ink">{r}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container-x">
          <Reveal>
            <div className="bg-ink text-background p-12 md:p-20 flex flex-col md:flex-row gap-10 items-start md:items-center justify-between">
              <h2 className="font-display text-3xl md:text-5xl max-w-2xl leading-tight">
                Pronto para começar seu projeto?
              </h2>
              <Link to="/contato" className="group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-8 py-5 text-sm font-medium">
                Falar com a equipe
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
