import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { KenBurnsHero } from "@/components/site/KenBurnsHero";
import { products } from "@/data/products";
import heroImage from "@/assets/projects/casa-piscina.jpg";
import productPortaImg from "@/assets/projects/porta-entrada-branca.jpg";
import productJanelaImg from "@/assets/projects/janela-classica.jpg";
import productCorrerImg from "@/assets/projects/area-piscina-correr.jpg";
import diferenciaisImg from "@/assets/projects/casa-moderna-vidros.jpg";

const productImages: Record<string, string> = {
  "porta-de-abrir": productPortaImg,
  "janela-de-correr": productJanelaImg,
  "porta-de-correr": productCorrerImg,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Carcki — Esquadrias de PVC com design, conforto e durabilidade" },
      { name: "description", content: "Portas e janelas de PVC com tecnologia belga Deceuninck. Isolamento acústico, conforto térmico e garantia de 20 anos." },
      { property: "og:title", content: "Carcki — Esquadrias de PVC" },
      { property: "og:description", content: "Design, conforto e durabilidade em cada esquadria. Tecnologia belga Deceuninck." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const steps = [
  { n: "01", title: "Envio do projeto", text: "Você nos encaminha as medidas ou plantas arquitetônicas. Nossa equipe está preparada para orientar em cada detalhe." },
  { n: "02", title: "Orçamento personalizado", text: "Elaboramos uma proposta sob medida, considerando perfis, vidros e acabamentos para o seu projeto." },
  { n: "03", title: "Produção especializada", text: "Fabricamos as esquadrias com tecnologia de ponta e perfis belgas Deceuninck, dentro dos prazos estabelecidos." },
  { n: "04", title: "Entrega e instalação", text: "Organizamos a logística e oferecemos suporte técnico, acompanhando cada etapa para que seu projeto seja executado com excelência." },
];

const differentials = [
  "Conforto térmico garantido",
  "Isolamento acústico superior",
  "Perfis coloridos e exclusivos",
  "Durabilidade e baixa manutenção",
  "Garantia de até 20 anos",
  "Tecnologia belga Deceuninck",
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col">
        <ImagePlaceholder
          label="Hero · ambiente com porta de correr ampla"
          ratio="auto"
          className="absolute inset-0 !bg-ink"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-background" />

        <div className="relative flex-1 flex items-end pt-32 pb-20">
          <div className="container-x w-full">
            <Reveal>
              <p className="eyebrow text-background/80 mb-8">
                Esquadrias de PVC · Brusque, SC
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-background max-w-5xl leading-[0.95]">
                Design, conforto<br />
                e durabilidade<br />
                <span className="italic text-background/80">em cada esquadria.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-5xl">
                <p className="text-lg md:text-xl text-background/80 max-w-md leading-relaxed">
                  Portas e janelas de PVC que valorizam seu projeto com isolamento acústico, conforto térmico e garantia de 20 anos.
                </p>
                <Link
                  to="/contato"
                  className="group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-medium tracking-wide w-fit"
                >
                  Peça seu orçamento
                  <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section className="py-32">
        <div className="container-x grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Reveal>
              <p className="eyebrow mb-6">Quem somos</p>
              <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
                Tecnologia de ponta, executada com precisão.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-foreground/75 leading-relaxed">
            <Reveal delay={0.1}>
              <p>
                Combinamos matéria-prima de alta qualidade e uma equipe dedicada para oferecer esquadrias de PVC que unem sofisticação, resistência e o melhor custo-benefício.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Em parceria com a <span className="text-ink">Deceuninck</span>, fornecedora internacional de perfis de PVC e referência em tecnologia belga, cada esquadria carrega a confiança de uma marca global e a excelência de uma execução nacional.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Link to="/sobre" className="inline-flex items-center gap-2 text-sm tracking-wide text-ink border-b border-ink/30 pb-1 hover:border-primary hover:text-primary transition-colors">
                Conheça a Carcki <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section className="py-32 bg-stone">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <Reveal>
              <p className="eyebrow mb-4">Nossos produtos</p>
              <h2 className="font-display text-4xl md:text-5xl text-ink max-w-2xl leading-tight">
                Portas e janelas que moldam experiências.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link to="/produtos" className="inline-flex items-center gap-2 text-sm text-ink border-b border-ink/30 pb-1 hover:border-primary hover:text-primary transition-colors w-fit">
                Ver catálogo completo <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {products.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.1}>
                <Link to="/produtos/$slug" params={{ slug: p.slug }} className="group block">
                  <ImagePlaceholder label={p.name} ratio="4/5" className="mb-5" />
                  <p className="eyebrow mb-2">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="font-display text-2xl text-ink mb-2 group-hover:text-primary transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{p.tagline}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="relative py-32 bg-ink text-background overflow-hidden">
        <ImagePlaceholder label="Textura · perfis de PVC" ratio="auto" className="absolute inset-0 !bg-ink opacity-20" />
        <div className="container-x relative grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow text-background/50 mb-6">Por que Carcki</p>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                O que faz da Carcki a escolha certa para o seu projeto.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <ul className="divide-y divide-background/10">
              {differentials.map((d, i) => (
                <Reveal key={d} delay={i * 0.05} className="py-5 flex items-baseline gap-6">
                  <span className="font-display text-sm text-primary tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xl md:text-2xl font-display">{d}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4 PASSOS */}
      <section className="py-32">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow mb-4 text-center">Como trabalhamos</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink text-center max-w-2xl mx-auto leading-tight">
              Seu projeto pronto em quatro passos.
            </h2>
          </Reveal>

          <div className="mt-20 grid md:grid-cols-4 gap-px bg-border">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08} className="bg-background p-8 md:p-10">
                <p className="font-display text-6xl text-primary/90 mb-8 leading-none">{s.n}</p>
                <h3 className="font-display text-xl text-ink mb-3">{s.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-32 bg-stone">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow mb-4">Depoimentos</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink max-w-2xl leading-tight">
              A confiança de quem já escolheu a Carcki.
            </h2>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {[
              { who: "Cliente Residencial", quote: "A Carcki foi essencial para o sucesso do nosso projeto. O isolamento acústico realmente fez diferença no conforto da nossa casa." },
              { who: "Arquiteto Parceiro", quote: "Com as portas de PVC da Carcki conseguimos unir sofisticação e durabilidade, além da garantia que nos trouxe segurança na escolha." },
            ].map((t, i) => (
              <Reveal key={t.who} delay={i * 0.1} className="bg-background p-10 md:p-14">
                <p className="font-display text-2xl md:text-3xl text-ink leading-relaxed">
                  “{t.quote}”
                </p>
                <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
                  <p className="text-sm tracking-wide text-foreground/70">{t.who}</p>
                  <span className="text-primary text-sm tracking-widest">★★★★★</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="container-x">
          <Reveal>
            <div className="bg-ink text-background p-12 md:p-20 grid md:grid-cols-12 gap-10 items-end">
              <h2 className="md:col-span-7 font-display text-4xl md:text-6xl leading-[1.05]">
                Seu projeto merece esquadrias <span className="italic">à altura</span>.
              </h2>
              <div className="md:col-span-5 md:text-right">
                <Link
                  to="/contato"
                  className="group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-8 py-5 text-sm font-medium tracking-wide"
                >
                  Peça seu orçamento
                  <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
