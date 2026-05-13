import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-background mt-32">
      <div className="container-x py-20 grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5 space-y-6">
          <div className="flex items-center gap-2">
            <span className="font-display text-3xl">Carcki</span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </div>
          <p className="text-sm leading-relaxed text-background/60 max-w-md">
            Esquadrias de PVC com tecnologia belga Deceuninck. Sofisticação,
            resistência e o melhor custo-benefício para residências,
            apartamentos e empreendimentos comerciais.
          </p>
          <p className="text-xs tracking-widest uppercase text-background/40">
            Garantia de até 20 anos
          </p>
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
              <a href="tel:+5511987654321" className="text-background/80 hover:text-background">+55 11 98765-4321</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-primary shrink-0" />
              <a href="mailto:contato@carckiesquadriasdepvc.com.br" className="text-background/80 hover:text-background break-all">contato@carckiesquadriasdepvc.com.br</a>
            </li>
          </ul>
          <div className="flex gap-3 pt-2">
            <a href="#" aria-label="Instagram" className="h-10 w-10 rounded-full border border-background/15 grid place-items-center hover:bg-primary hover:border-primary transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="Facebook" className="h-10 w-10 rounded-full border border-background/15 grid place-items-center hover:bg-primary hover:border-primary transition-colors">
              <Facebook size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container-x py-6 flex flex-col md:flex-row gap-3 justify-between text-xs text-background/50">
          <p>© {new Date().getFullYear()} Carcki Esquadrias de PVC. Todos os direitos reservados.</p>
          <p>Tecnologia belga Deceuninck</p>
        </div>
      </div>
    </footer>
  );
}
