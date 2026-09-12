export type ContentProduct = {
  slug: string;              // URL do produto
  category: string;          // categoria visual
  title: string;             // nome principal
  shortDescription: string;  // descrição no catálogo
  subtitle: string;          // posicionamento do produto
  introduction: string;      // introdução da página
  audience: string[];        // para quem é
  topics: string[];          // assuntos abordados
  format: string;             // E-book digital
  status: string;             // Em breve / disponível
  price: string | null;       // futuro preço
  checkoutUrl: string | null; // futuro Kiwify
  cover: string | null;       // futura capa
};

export const contentProducts: ContentProduct[] = [
  {
    slug: "postura-no-dia-a-dia",
    category: "POSTURA",
    title: "Postura no dia a dia",
    shortDescription:
      "Um guia prático para compreender melhor sua postura e os hábitos de movimento presentes na rotina.",
    subtitle: "Entender antes de corrigir.",
    introduction:
      "Um material desenvolvido para ajudar você a observar sua postura, compreender seus hábitos de movimento e perceber como pequenas escolhas presentes na rotina podem influenciar a forma como o corpo se organiza e se movimenta.",
    audience: [
      "Pessoas que passam muitas horas sentadas ou em uma mesma posição.",
      "Quem sente desconfortos relacionados à rotina e quer compreender melhor seus movimentos.",
      "Quem deseja desenvolver uma percepção mais consciente sobre o próprio corpo.",
      "Quem quer aprender conceitos de postura de forma prática e acessível.",
    ],
    topics: [
      "Percepção corporal",
      "Hábitos posturais",
      "Movimento na rotina",
      "Organização corporal",
    ],
    format: "E-book digital",
    status: "Em breve",
    price: null,
    checkoutUrl: null,
    cover: null,
  },
  {
    slug: "mobilidade-para-a-vida-real",
    category: "MOBILIDADE",
    title: "Mobilidade para a vida real",
    shortDescription:
      "Estratégias simples para desenvolver mobilidade e melhorar a qualidade dos seus movimentos.",
    subtitle: "Mobilidade que faz sentido fora do treino.",
    introduction:
      "Um material voltado para quem quer compreender melhor a mobilidade e encontrar maneiras práticas de incorporá-la à rotina, respeitando as necessidades reais do corpo e do movimento.",
    audience: [
      "Pessoas que querem se movimentar com mais liberdade.",
      "Quem sente limitações durante movimentos cotidianos ou exercícios.",
      "Quem deseja compreender melhor o papel da mobilidade no treinamento.",
      "Quem procura estratégias práticas para incluir mais movimento na rotina.",
    ],
    topics: [
      "Mobilidade articular",
      "Qualidade de movimento",
      "Percepção corporal",
      "Aplicação prática",
    ],
    format: "E-book digital",
    status: "Em breve",
    price: null,
    checkoutUrl: null,
    cover: null,
  },
  {
    slug: "treino-funcional",
    category: "TREINAMENTO",
    title: "Treino Funcional: comece pelo movimento",
    shortDescription:
      "Princípios para começar a treinar com mais consciência, controle e qualidade de movimento.",
    subtitle: "Antes de aumentar a carga, entenda o movimento.",
    introduction:
      "Um material introdutório para quem quer compreender os princípios por trás do treinamento funcional e desenvolver uma relação mais consciente com os movimentos realizados durante o treino.",
    audience: [
      "Quem está começando a treinar.",
      "Pessoas que querem entender melhor os exercícios que realizam.",
      "Quem deseja melhorar consciência e controle durante o treinamento.",
      "Quem busca uma visão mais funcional sobre o próprio corpo.",
    ],
    topics: [
      "Consciência corporal",
      "Controle do movimento",
      "Qualidade de execução",
      "Princípios do treinamento funcional",
    ],
    format: "E-book digital",
    status: "Em breve",
    price: null,
    checkoutUrl: null,
    cover: null,
  },
];