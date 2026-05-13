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
import productJanelasBrancaImg from "@/assets/projects/janela-branca.jpg";
import diferenciaisImg from "@/assets/projects/casa-moderna-vidros.jpg";
import teamCarckiImg from "@/assets/team-carcki.jpg";

const WA_LINK = "https://api.whatsapp.com/send?phone=5547992140321";

const productImages: Record<string, string> = {
  "porta-de-abrir": productPortaImg,
  "janela-de-correr": productJanelaImg,
  "porta-de-correr": productCorrerImg,
  "janelas": productJanelasBrancaImg,
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

const testimonials = [
  { who: "Giselle Berisso", quote: "Muito satisfeita com a qualidade das vendas e do atendimento tanto na instalação quanto na manutenção. Eles são altamente recomendados. Daniele um amor em sua atenção." },
  { who: "Luciano de Limas", quote: "A empresa já prestou excelentes serviços em minhas propriedades. Super recomendo — facilidade para negociar, entregam e instalam no prazo. A empresa é comprometida com a satisfação do cliente." },
  { who: "Faturamento Marroni", quote: "Pessoal super competente, empresa séria e com produtos de qualidade. Estou muito satisfeito e recomendo essa empresa." },
  { who: "Schirlei Boos Salsi", quote: "Atendimento de primeira. Foram muito atenciosos e apresentaram seus produtos e obras realizadas. Empresa de primeira linha com certeza." },
  { who: "Esequiel Morais De Quadros", quote: "Excelente atendimento desde o primeiro contato, instalação impecável, material de alta qualidade, e com todas as instruções de conservação necessárias para mantermos as janelas e portas sempre novas!" },
  { who: "Paulo Peçanha", quote: "Ótimo atendimento, serviço de qualidade e sempre prestativos! Estão de parabéns." },
  { who: "Ivair J. Silvestre", quote: "Ótimo atendimento, produto excelente." },
  { who: "Hopena Digital", quote: "Gostei muito do atendimento e das esquadrias, ficaram lindas e são super fáceis de limpar." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col">
        <KenBurnsHero src={heroImage} alt="Residência com esquadrias Carcki" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-background" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border/60" />

        <div className="relative flex-1 flex items-end pt-32 pb-20">
          <div className="container-x w-full">
            <Reveal>
              <p className="eyebrow mb-8" style={{ color: "white" }}>
                Esquadrias de PVC · Brusque, SC
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-background max-w-5xl leading-[0.95]">
                Design, conforto<br />
                e durabilidade<br />
                <span className="italic bg-primary text-white px-3 py-1 inline-block mt-2">em cada esquadria.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-5xl">
                <p className="text-lg md:text-xl text-white/85 max-w-md leading-relaxed">
                  Portas e janelas de PVC que valorizam seu projeto com isolamento acústico, conforto térmico e garantia de 20 anos.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-medium tracking-wide w-fit"
                >
                  Peça seu orçamento
                  <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section className="py-32">
        <div className="container-x grid md:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div className="relative overflow-hidden">
              <img
                src={teamCarckiImg}
                alt="Equipe Carcki"
                className="w-full h-auto"
              />
            </div>
          </Reveal>
          <div className="space-y-6">
            <Reveal>
              <p className="eyebrow mb-4">Quem somos</p>
              <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight mb-6">
                Tecnologia de ponta, executada com precisão.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base text-foreground/75 leading-relaxed">
                A trajetória da CARCKI é marcada por dedicação, aprendizado e paixão pelo que faz. Tudo começou com o sonho de um jovem determinado, que aos 20 anos iniciou sua jornada profissional no ramo de Esquadrias de PVC.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-base text-foreground/75 leading-relaxed">
                Durante quase 10 anos, ele trabalhou em duas empresas diferentes, aprendendo profundamente sobre o mercado, os processos de produção, atendimento ao cliente e a importância da qualidade e da confiança nos negócios.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base text-foreground/75 leading-relaxed">
                Hoje, 15 anos depois, a CARCKI se consolidou como referência em Esquadrias de PVC, atendendo clientes em todo o país — mantendo os mesmos valores que inspiraram sua criação: <span className="text-ink font-medium">qualidade, confiança e inovação.</span>
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
                  {productImages[p.slug] ? (
                    <div className="mb-5 overflow-hidden" style={{ aspectRatio: "4/5" }}>
                      <img src={productImages[p.slug]} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                  ) : (
                    <ImagePlaceholder label={p.name} ratio="4/5" className="mb-5" />
                  )}
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
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260503_144509_89e2d612-8af2-45c3-90f4-4831bc60715d.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster={diferenciaisImg}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/25 to-ink/55" />
        <div className="container-x relative grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Reveal>
              <span className="eyebrow bg-primary px-3 py-1.5 mb-6 inline-block" style={{ color: "white" }}>Por que Carcki</span>
              <h2 className="font-display text-4xl md:text-5xl leading-tight mt-4">
                O que faz da Carcki a escolha certa para o seu projeto.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <ul className="divide-y divide-background/10">
              {differentials.map((d, i) => (
                <Reveal key={d} delay={i * 0.05} className="py-5 flex items-center gap-6">
                  <span className="font-display text-sm bg-primary text-white tabular-nums w-10 h-8 flex items-center justify-center shrink-0">
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
      <section className="py-32 bg-stone overflow-hidden">
        <div className="container-x mb-12">
          <Reveal>
            <p className="eyebrow mb-4">Depoimentos</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink max-w-2xl leading-tight">
              A confiança de quem já escolheu a Carcki.
            </h2>
          </Reveal>
        </div>

        <div className="overflow-hidden">
          <div className="testimonials-track flex gap-6 w-max">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="w-80 shrink-0 bg-background p-8 flex flex-col justify-between"
                style={{ minHeight: "220px" }}
              >
                <div>
                  <p className="text-amber-400 text-sm mb-4">★★★★★</p>
                  <p className="font-display text-lg text-ink leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>
                <p className="mt-6 text-sm text-foreground/60 tracking-wide font-medium pt-4 border-t border-border">
                  {t.who}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="container-x">
          <Reveal>
            <div
              className="bg-primary text-white p-12 md:p-20 grid md:grid-cols-12 gap-10 items-end"
            >
              <h2 className="md:col-span-7 font-display text-4xl md:text-6xl leading-[1.05]">
                Seu projeto merece esquadrias <span className="italic">à altura</span>.
              </h2>
              <div className="md:col-span-5 md:text-right">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-white text-primary px-8 py-5 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
                >
                  Peça seu orçamento
                  <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
