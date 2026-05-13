import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoCarcki from "@/assets/logo-carcki.png";

const nav = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/produtos", label: "Produtos" },
  { to: "/projetos", label: "Projetos" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logoCarcki} alt="Carcki" className="h-10 w-10 transition-transform group-hover:scale-105" />
          <span className={`font-display text-2xl tracking-tight transition-colors ${scrolled ? "text-foreground" : "text-background"}`}>
            Carcki
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`text-sm tracking-wide transition-colors ${scrolled ? "text-foreground/70 hover:text-foreground" : "text-background/80 hover:text-background"}`}
              activeProps={{ className: scrolled ? "text-foreground" : "text-background" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contato"
          className={`hidden md:inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${scrolled ? "border-foreground/15 text-foreground hover:bg-foreground hover:text-background" : "border-background/30 text-background hover:bg-background hover:text-foreground"}`}
        >
          Peça seu orçamento
          <span className="h-1 w-1 rounded-full bg-primary" />
        </Link>

        <button
          aria-label="Menu"
          className={`md:hidden p-2 ${scrolled ? "text-foreground" : "text-background"}`}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-x flex flex-col py-6 gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-lg font-display"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium"
            >
              Peça seu orçamento
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
