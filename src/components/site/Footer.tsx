import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import logoCarckiWhite from "@/assets/logo-carcki-footer.png";
import logoDeceuninck from "@/assets/logo-deceuninck-footer.png";
import logoCarckiRound from "@/assets/logo-carcki-round.png";

export function Footer() {
  return (
    <footer className="text-background mt-32 relative overflow-hidden" style={{ backgroundColor: "#2a2a2a" }}>
      {/* Watermark */}
      <div className="absolute right-0 bottom-0 pointer-events-none select-none" aria-hidden>
        <img
          src={logoCarckiRound}
          alt=""
          className="h-80 w-80 opacity-[0.06] translate-x-16 translate-y-16"
        />
      </div>

      <div className="container-x py-20 grid gap-16 md:grid-cols-12 relative">
        <div className="md:col-span-5 space-y-6">
          <img src={logoCarckiWhite} alt="Carcki" className="h-14 w-auto" />
          <p className="text-sm leading-relaxed text-background/60 max-w-md">
            Esquadrias de PVC com tecnologia belga Deceuninck. Sofisticação,
            resistência e o melhor custo-benefício para residências,
            apartamentos e empreendimentos comerciais.
          </p>
          <div className="pt-4 border-t border-background/10 max-w-xs">
            <p className="text-[10px] tracking-[0.25em] uppercase text-background/40 mb-3">
              Tecnologia parceira
            </p>
            <img src={logoDeceuninck} alt="Deceuninck" className="h-6 w-auto opacity-90" />
          </div>
        </div>

        <div className="md:col-span-3 space-y-5">
          <p className="eyebrow text-background/50">Navegação</p>
          <ul className="space-y-3 text-sm">
            <li><Link to="/sobre" className="hover:text-primary transition-colors">Sobre</Link></li>
            <li><Link to="/produtos" className="hover:text-primary transition-colors">Produtos</Link></li>
            <li><Link to="/projetos" className="hover:text-primary transition-colors">Projetos</Link></li>
            <li><Link to="/contato" className="hover:text-primary transition-colors">Contato</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4 space-y-5">
          <p className="eyebrow text-background/50">Contato</p>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-1 text-primary shrink-0" />
              <span className="text-background/80">Rua Alois Winter, 135<br />Brusque · Santa Catarina</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-primary shrink-0" />
              <a href="tel:+5547921403210" className="text-background/80 hover:text-background">+55 47 9214-0321</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-primary shrink-0" />
              <a href="mailto:contato@carckiesquadriasdepvc.com.br" className="text-background/80 hover:text-background break-all">contato@carckiesquadriasdepvc.com.br</a>
            </li>
          </ul>
          <div className="flex gap-3 pt-2">
            <a
              href="https://www.instagram.com/carckiesquadriasdepvc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="h-10 w-10 rounded-full border border-background/15 grid place-items-center hover:bg-primary hover:border-primary transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="Facebook" className="h-10 w-10 rounded-full border border-background/15 grid place-items-center hover:bg-primary hover:border-primary transition-colors">
              <Facebook size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 relative">
        <div className="container-x py-6 flex flex-col md:flex-row gap-3 justify-between text-xs text-background/50">
          <p>© {new Date().getFullYear()} Carcki Esquadrias de PVC. Todos os direitos reservados.</p>
          <p>Tecnologia belga Deceuninck</p>
        </div>
      </div>
    </footer>
  );
}
