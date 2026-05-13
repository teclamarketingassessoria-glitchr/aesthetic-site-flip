import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { products } from "@/data/products";

export const Route = createFileRoute("/produtos/")({
  head: () => ({
    meta: [
      { title: "Produtos — Carcki Esquadrias de PVC" },
      { name: "description", content: "Catálogo completo de portas e janelas de PVC Carcki: correr, abrir, maxim-ar, basculante, pivotante e mais." },
      { property: "og:title", content: "Produtos — Carcki" },
      { property: "og:description", content: "Portas e janelas de PVC com tecnologia belga." },
      { property: "og:url", content: "/produtos" },
    ],
    links: [{ rel: "canonical", href: "/produtos" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-20">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow mb-6">Catálogo</p>
            <h1 className="font-display text-5xl md:text-7xl text-ink max-w-4xl leading-[1.02]">
              Portas e janelas <span className="italic">que moldam</span> experiências.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-10 max-w-2xl text-lg text-foreground/75 leading-relaxed">
              Na Carcki, acreditamos que portas e janelas são muito mais do que elementos de uma obra. Elas são a conexão entre ambientes, a moldura de experiências e o detalhe que transforma projetos em lugares únicos.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <Link to="/produtos/$slug" params={{ slug: p.slug }} className="group block">
                <ImagePlaceholder label={p.name} ratio="4/5" className="mb-6" />
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
                  <ArrowUpRight size={18} className="text-foreground/30 group-hover:text-primary transition-colors" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl text-ink mb-2 group-hover:text-primary transition-colors">
                  {p.name}
                </h2>
                <p className="text-sm text-foreground/70 leading-relaxed">{p.tagline}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
