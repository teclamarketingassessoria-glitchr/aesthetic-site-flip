export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  applications: string[];
};

export const products: Product[] = [
  {
    slug: "porta-de-abrir",
    name: "Porta de Abrir",
    tagline: "O clássico reinventado em PVC.",
    description:
      "Praticidade no uso diário com design elegante e versatilidade para todos os estilos de obra. Combina vedação superior com abertura ampla e acabamento impecável.",
    features: [
      "Abertura interna ou externa",
      "Vedação contra ruídos e intempéries",
      "Disponível com vidro duplo",
      "Várias opções de cores e acabamentos",
    ],
    applications: ["Entradas principais", "Acessos sociais", "Áreas internas"],
  },
  {
    slug: "porta-de-correr",
    name: "Porta de Correr",
    tagline: "Continuidade entre o dentro e o fora.",
    description:
      "Sistema deslizante suave que conecta ambientes sem ocupar espaço. Ideal para integrar áreas sociais a varandas, jardins e áreas gourmet.",
    features: [
      "Trilhos de alta resistência",
      "Vidros amplos sem interferência visual",
      "Excelente isolamento térmico",
      "Vedação acústica de alto desempenho",
    ],
    applications: ["Salas integradas", "Varandas e terraços", "Áreas gourmet"],
  },
  {
    slug: "janelas",
    name: "Janelas",
    tagline: "Beleza e funcionalidade em cada vão.",
    description:
      "Janelas de PVC que unem estética refinada e desempenho superior. Disponíveis em diversos modelos, proporcionam luminosidade, ventilação e isolamento em qualquer ambiente.",
    features: [
      "Múltiplos modelos de abertura",
      "Vidro duplo com câmara de ar",
      "Isolamento térmico e acústico",
      "Perfis coloridos e exclusivos",
    ],
    applications: ["Residências", "Apartamentos", "Projetos de alto padrão"],
  },
  {
    slug: "janela-de-correr",
    name: "Janela de Correr",
    tagline: "Funcionalidade que nunca sai de cena.",
    description:
      "Funcionalidade com excelente vedação contra ruídos externos e intempéries. Um clássico que organiza qualquer ambiente com leveza e ordem.",
    features: [
      "Trilho duplo ou triplo",
      "Tela mosquiteira opcional",
      "Vidros laminados ou duplos",
      "Manutenção simples",
    ],
    applications: ["Quartos", "Salas", "Cozinhas"],
  },
  {
    slug: "janela-maxim-ar",
    name: "Janela Maxim-ar",
    tagline: "Ventilação constante, mesmo na chuva.",
    description:
      "Perfeita para banheiros, cozinhas e ambientes que exigem ventilação constante e eficiente, com a chuva controlada pela inclinação da folha.",
    features: [
      "Abertura projetante",
      "Ventilação contínua",
      "Privacidade preservada",
      "Vedação superior",
    ],
    applications: ["Banheiros", "Cozinhas", "Áreas de serviço"],
  },
  {
    slug: "janela-de-abrir",
    name: "Janela de Abrir",
    tagline: "Abertura total, vista total.",
    description:
      "Folhas que abrem completamente, oferecendo ventilação máxima e limpeza facilitada, com a estética leve dos perfis Deceuninck.",
    features: [
      "Abertura interna 180°",
      "Limpeza facilitada",
      "Vedação tripla",
      "Disponível em uma ou duas folhas",
    ],
    applications: ["Quartos", "Escritórios", "Ambientes que pedem ventilação ampla"],
  },
  {
    slug: "janela-basculante",
    name: "Janela Basculante",
    tagline: "Discreta. Precisa. Funcional.",
    description:
      "Sistema basculante para ambientes onde a privacidade e a ventilação superior são prioridades. Solução elegante para fachadas contemporâneas.",
    features: [
      "Acionamento por manivela",
      "Vidro fixo com basculante",
      "Privacidade total",
      "Ventilação superior",
    ],
    applications: ["Banheiros", "Garagens", "Sótãos"],
  },
  {
    slug: "janela-pivotante",
    name: "Janela Pivotante",
    tagline: "Movimento escultural sobre o eixo.",
    description:
      "Folha que gira sobre o próprio eixo central, criando um gesto arquitetônico marcante e oferecendo ventilação cruzada ampla.",
    features: [
      "Eixo central horizontal ou vertical",
      "Folhas de grande dimensão",
      "Estética arquitetônica marcante",
      "Vedação de alta performance",
    ],
    applications: ["Fachadas autorais", "Projetos arquitetônicos contemporâneos"],
  },
];
