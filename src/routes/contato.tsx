import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Carcki Esquadrias de PVC" },
      { name: "description", content: "Fale com a Carcki. Brusque, SC. Solicite seu orçamento de portas e janelas de PVC." },
      { property: "og:title", content: "Contato — Carcki" },
      { property: "og:description", content: "Solicite seu orçamento." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-20">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow mb-6">Contato</p>
            <h1 className="font-display text-5xl md:text-7xl text-ink max-w-4xl leading-[1.02]">
              Vamos conversar sobre <span className="italic">o seu projeto.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-10">
            <Reveal>
              <div>
                <p className="eyebrow mb-3">Endereço</p>
                <p className="flex items-start gap-3 text-lg text-ink">
                  <MapPin size={18} className="mt-1.5 text-primary shrink-0" />
                  <span>Rua Alois Winter, 135<br />Brusque · Santa Catarina</span>
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <p className="eyebrow mb-3">Telefone</p>
                <a href="tel:+5547992140321" className="flex items-center gap-3 text-lg text-ink hover:text-primary transition-colors">
                  <Phone size={18} className="text-primary shrink-0" />
                  +55 47 9214-0321
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div>
                <p className="eyebrow mb-3">E-mail</p>
                <a href="mailto:contato@carckiesquadriasdepvc.com.br" className="flex items-center gap-3 text-lg text-ink hover:text-primary transition-colors break-all">
                  <Mail size={18} className="text-primary shrink-0" />
                  contato@carckiesquadriasdepvc.com.br
                </a>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = new FormData(e.currentTarget);
                  const subject = encodeURIComponent("Pedido de orçamento — site Carcki");
                  const body = encodeURIComponent(
                    `Nome: ${data.get("name")}\nE-mail: ${data.get("email")}\nTelefone: ${data.get("phone")}\n\nMensagem:\n${data.get("message")}`
                  );
                  window.location.href = `mailto:contato@carckiesquadriasdepvc.com.br?subject=${subject}&body=${body}`;
                }}
                className="space-y-8"
              >
                <Field name="name" label="Seu nome" required />
                <div className="grid md:grid-cols-2 gap-8">
                  <Field name="email" type="email" label="E-mail" required />
                  <Field name="phone" label="Telefone" />
                </div>
                <Field name="message" label="Conte sobre seu projeto" textarea />
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-8 py-5 text-sm font-medium tracking-wide"
                >
                  Enviar pedido de orçamento
                  <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  textarea,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const base =
    "w-full bg-transparent border-b border-foreground/20 py-3 text-ink placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors";
  return (
    <label className="block">
      <span className="eyebrow block mb-2">{label}{required && " *"}</span>
      {textarea ? (
        <textarea name={name} required={required} rows={4} className={base} />
      ) : (
        <input name={name} type={type} required={required} className={base} />
      )}
    </label>
  );
}
