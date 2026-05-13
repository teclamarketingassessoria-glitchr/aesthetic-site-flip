import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { products } from "@/data/products";

export const Route = createFileRoute("/produtos/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    return {
      meta: [
        { title: p ? `${p.name} — Carcki` : "Produto — Carcki" },
        { name: "description", content: p?.description ?? "" },
        { property: "og:title", content: p ? `${p.name} — Carcki` : "" },
        { property: "og:description", content: p?.tagline ?? "" },
        { property: "og:url", content: p ? `/produtos/${p.slug}` : "/produtos" },
        { property: "og:type", content: "product" },
      ],
      links: p ? [{ rel: "canonical", href: `/produtos/${p.slug}` }] : [],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <section className="min-h-[60vh] grid place-items-center container-x">
        <div className="text-center">
          <p className="eyebrow mb-4">404</p>
          <h1 className="font-display text-4xl text-ink mb-6">Produto não encontrado</h1>
          <Link to="/produtos" className="text-primary border-b border-primary/40 pb-1">Voltar ao catálogo</Link>
        </div>
      </section>
    </SiteLayout>
  ),
  errorComponent: ({ error }) => (
    <SiteLayout>
      <div className="container-x py-40 text-center text-foreground/70">{error.message}</div>
    </SiteLayout>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const idx = products.findIndex((p) => p.slug === product.slug);
  const next = products[(idx + 1) % products.length];

  return (
    <SiteLayout>
      <section className="pt-32 pb-12">
        <div className="container-x">
          <Reveal>
            <Link to="/produtos" className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors mb-12">
              <ArrowLeft size={14} /> Voltar ao catálogo
            </Link>
          </Reveal>
          <div className="grid md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-8">
              <Reveal>
                <p className="eyebrow mb-6">Produto · {String(idx + 1).padStart(2, "0")}</p>
                <h1 className="font-display text-5xl md:text-7xl text-ink leading-[1.02]">
                  {product.name}
                </h1>
              </Reveal>
            </div>
            <div className="md:col-span-4">
              <Reveal delay={0.1}>
                <p className="font-display text-2xl md:text-3xl italic text-foreground/70 leading-tight">
                  {product.tagline}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <Reveal>
            <ImagePlaceholder label={`${product.name} · foto principal`} ratio="16/9" />
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow mb-6">Sobre o produto</p>
              <p className="text-lg text-foreground/75 leading-relaxed">{product.description}</p>
            </Reveal>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <Reveal delay={0.1}>
              <p className="eyebrow mb-6">Características</p>
              <ul className="space-y-4">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-ink">
                    <Check size={14} className="mt-1 text-primary shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="md:col-span-3">
            <Reveal delay={0.2}>
              <p className="eyebrow mb-6">Aplicações</p>
              <ul className="space-y-3 text-sm text-ink">
                {product.applications.map((a) => (
                  <li key={a} className="border-b border-border pb-3">{a}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone">
        <div className="container-x grid md:grid-cols-12 gap-10 items-center">
          <h2 className="md:col-span-7 font-display text-3xl md:text-5xl text-ink leading-tight">
            Quer este produto no seu projeto?
          </h2>
          <div className="md:col-span-5 md:text-right">
            <Link to="/contato" className="group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-medium">
              Solicitar orçamento
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <Link to="/produtos/$slug" params={{ slug: next.slug }} className="group block">
            <p className="eyebrow mb-3">Próximo produto</p>
            <div className="flex items-baseline justify-between gap-6 border-t border-border pt-8">
              <h3 className="font-display text-3xl md:text-5xl text-ink group-hover:text-primary transition-colors">
                {next.name}
              </h3>
              <ArrowUpRight size={28} className="text-foreground/40 group-hover:text-primary transition-colors" />
            </div>
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
