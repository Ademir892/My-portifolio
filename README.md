# Ademir Traesel — Portfolio V2

Portfólio profissional desenvolvido para apresentar minha trajetória, projetos e evolução em Engenharia de Software.

A aplicação foi reconstruída com foco em arquitetura, organização de código, responsividade, acessibilidade e uma identidade visual voltada à interseção entre **engenharia, software e resolução de problemas**.

🌐 **Deploy:** https://ademirtraesel.netlify.app/

---

## Sobre o projeto

O Portfolio V2 nasceu da refatoração completa da primeira versão do meu portfólio.

Mais do que uma atualização visual, o projeto passou por uma reorganização estrutural com o objetivo de aplicar conceitos de Engenharia de Software e melhorar sua manutenção e evolução.

A nova versão foi construída buscando:

- arquitetura mais organizada;
- componentes reutilizáveis;
- tipagem com TypeScript;
- separação de responsabilidades;
- design system próprio;
- melhor experiência em dispositivos móveis;
- acessibilidade;
- integração com serviços externos;
- otimização para produção;
- SEO básico;
- deploy como Single Page Application.

---

## Tecnologias

### Frontend

- React
- TypeScript
- JavaScript
- HTML
- CSS

### Ferramentas e infraestrutura

- Vite
- Git
- GitHub
- Axios
- React Router
- React Hook Form
- EmailJS
- Netlify

---

## Principais funcionalidades

### Home

A página inicial apresenta a proposta profissional do portfólio e reúne:

- apresentação profissional;
- tecnologias utilizadas;
- áreas de atuação;
- projetos em destaque;
- trajetória profissional;
- chamada para contato.

### Sobre

A página apresenta minha trajetória e a relação entre experiências profissionais anteriores e minha formação em Engenharia de Software.

Também reúne:

- princípios de trabalho;
- conhecimentos técnicos;
- competências;
- tecnologias em estudo e utilização.

### Projetos

A página de projetos é dividida em duas áreas.

#### Projetos selecionados

Projetos escolhidos manualmente por representarem melhor minha evolução técnica e capacidade de transformar ideias em aplicações.

Entre eles:

- Universo Mariana;
- Auditor de Guias Tributárias;
- Portfolio V2.

#### Repositórios GitHub

Outros projetos são carregados diretamente através da API pública do GitHub.

A aplicação:

- remove forks;
- ignora repositórios arquivados;
- ordena os projetos por atualização;
- permite carregar mais resultados progressivamente.

### Contato

O formulário utiliza:

- React Hook Form para gerenciamento dos campos;
- validações de dados;
- EmailJS para envio das mensagens;
- estados visuais de envio, sucesso e erro.

Também existem atalhos para:

- LinkedIn;
- GitHub;
- WhatsApp.

### Termos e Privacidade

Página dedicada às informações sobre:

- uso do portfólio;
- propriedade intelectual;
- dados enviados pelo formulário;
- serviços externos utilizados;
- segurança;
- atualizações dos termos.

---

## Arquitetura

A aplicação foi organizada para separar componentes reutilizáveis, páginas, serviços, tipos e estilos globais.

```text
src/
├── components/
│   ├── ContactCTA/
│   ├── FeaturedProjects/
│   ├── Footer/
│   ├── Header/
│   ├── ProfessionalJourney/
│   └── ScrollToTop/
│
├── layouts/
│   └── MainLayout/
│
├── routes/
│   ├── About/
│   ├── Contact/
│   ├── Home/
│   ├── Projects/
│   └── Terms/
│
├── services/
│   └── github.ts
│
├── styles/
│   └── tokens.css
│
├── types/
│   └── github.ts
│
├── App.tsx
├── index.css
├── main.tsx
└── vite-env.d.ts
```

---

## Design System

A identidade visual utiliza tokens CSS centralizados em:

```text
src/styles/tokens.css
```

Nesse arquivo são definidos valores reutilizáveis para:

- cores;
- tipografia;
- espaçamentos;
- containers;
- bordas;
- sombras;
- transições;
- breakpoints e elementos visuais compartilhados.

Isso reduz valores duplicados e facilita mudanças futuras na identidade do projeto.

---

## Integração com GitHub

A comunicação com a API do GitHub está isolada em:

```text
src/services/github.ts
```

Os dados dos repositórios são tipados através de:

```text
src/types/github.ts
```

Essa separação evita que regras de integração fiquem diretamente dentro dos componentes da interface.

---

## Acessibilidade

Algumas medidas aplicadas no projeto:

- estrutura HTML semântica;
- navegação por teclado;
- estados de foco visíveis;
- textos alternativos em imagens;
- labels associados aos campos do formulário;
- mensagens de erro acessíveis;
- `aria-label` em elementos de navegação;
- link **Pular para o conteúdo**;
- gerenciamento de scroll ao mudar de rota.

---

## Responsividade

O layout foi desenvolvido para se adaptar a diferentes tamanhos de tela.

Foram consideradas principalmente experiências em:

- desktop;
- tablets;
- smartphones.

Componentes, grids, tipografia e navegação mudam de comportamento conforme o espaço disponível.

---

## Performance

Durante a refatoração foram realizadas otimizações como:

- redução significativa do tamanho das imagens;
- remoção de dependências desnecessárias;
- limpeza de arquivos antigos;
- geração otimizada através do Vite;
- organização dos assets utilizados pela aplicação.

---

## SEO

A aplicação possui configurações básicas de SEO, incluindo:

- idioma `pt-BR`;
- título descritivo;
- meta description;
- canonical URL;
- Open Graph;
- robots.txt;
- sitemap.xml;
- favicon personalizado.

---

## Netlify e React Router

Como o projeto utiliza `BrowserRouter`, foi adicionada uma regra de rewrite para permitir o acesso direto às rotas da SPA.

Arquivo:

```text
public/_redirects
```

Configuração:

```text
/*    /index.html    200
```

Assim, URLs como:

```text
/about
/projects
/contact
/termos
```

podem ser abertas diretamente sem gerar erro 404 no Netlify.

---

## Executando localmente

Clone o repositório:

```bash
git clone git@github.com:Ademir892/My-portifolio.git
```

Entre no projeto:

```bash
cd My-portifolio
```

Instale as dependências:

```bash
npm install
```

Execute o ambiente de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá o endereço local da aplicação no terminal.

Normalmente:

```text
http://localhost:5173/
```

---

## Build de produção

Para verificar e gerar uma versão de produção:

```bash
npm run build
```

O comando executa:

```text
TypeScript
      ↓
Vite Build
      ↓
dist/
```

O resultado final será armazenado na pasta:

```text
dist/
```

---

## Qualidade de código

Antes de commits importantes, utilizo o seguinte fluxo de verificação:

```bash
npm run build
npm run lint
git status
```

O objetivo é garantir que:

1. o TypeScript compile corretamente;
2. o build de produção seja gerado;
3. o ESLint não encontre problemas;
4. o estado do Git esteja conhecido antes do commit.

---

## Scripts disponíveis

```bash
npm run dev
```

Inicia o ambiente de desenvolvimento.

```bash
npm run build
```

Compila TypeScript e gera o build de produção.

```bash
npm run lint
```

Executa a análise do ESLint.

```bash
npm run preview
```

Executa localmente uma prévia do build de produção.

---

## Evolução do projeto

A construção da V2 foi realizada de forma incremental através de uma branch específica:

```text
refactor/portifolio-v2
```

Entre as principais etapas da refatoração estiveram:

```text
01  Reorganização da arquitetura
02  Design system
03  Header
04  Hero
05  Projetos em destaque
06  Trajetória profissional
07  Contact CTA
08  About
09  Projects
10  Contact
11  Termos e Privacidade
12  Footer
13  Performance
14  SEO
15  Acessibilidade
16  Preparação para produção
```

Cada etapa foi versionada separadamente para manter um histórico de evolução claro.

---

## Alguns projetos apresentados

### Universo Mariana

Experiência web interativa desenvolvida com JavaScript, HTML e CSS.

O projeto explora:

- arquitetura modular;
- animações;
- eventos customizados;
- renderização dinâmica;
- experiências interativas;
- organização orientada a dados.

### Auditor de Guias Tributárias

Projeto em planejamento voltado à aplicação de software sobre regras tributárias e validação de cálculos.

O objetivo é transformar um problema real em uma ferramenta capaz de auxiliar na revisão de guias e regras fiscais.

### Portfolio V2

Este próprio projeto também funciona como exercício prático de Engenharia de Software, envolvendo:

- refatoração;
- arquitetura;
- TypeScript;
- integração com APIs;
- design system;
- responsividade;
- acessibilidade;
- Git;
- deploy.

---

## Autor

**Ademir Traesel**

Engenharia de Software • Tecnologia • Desenvolvimento

- GitHub: https://github.com/Ademir892
- LinkedIn: https://www.linkedin.com/in/ademir-marmitt-traesel-63bb20221/
- Portfolio: https://ademirtraesel.netlify.app/

---

> Engenharia e software começam pelo mesmo lugar: entender o problema que precisa ser resolvido.
