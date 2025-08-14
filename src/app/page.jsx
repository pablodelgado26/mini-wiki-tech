import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Card from '../components/Card/Card'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image
          src="/images/tech-logo.png"
          alt="Logo Tech Wiki"
          width={450}
          height={300}
          priority
        />
        <h1>Mini Wiki Tech</h1>
        <h2>Pesquisa sobre Tecnologias Web Modernas</h2>
        
        <div className={styles.team}>
          <h3>Grupo:</h3>
          <ul>
            <li>Vinícius Rocha</li>
            <li>Vitor Argeri</li>
            <li>Alexandra Aversani</li>
            <li>Pablo Delgado</li>
            <li>Vinícius Pereira</li>
            <li>Gabriela Moleta</li>
            <li>Miguel Sarti</li>
          </ul>
        </div>
      </section>

      <section className={styles.topics}>
        <h2>Tópicos de Pesquisa</h2>
        
        <div className={styles.grid}>
          <Link href="/frameworks" className={styles.card}>
            <Image
              src="/images/frameworks-icon.png"
              alt="Frameworks Icon"
              width={100}
              height={100}
            />
            <h3>Frameworks e Meta-frameworks</h3>
            <p>Explore os diferentes tipos, vantagens e aplicações no mercado.</p>
          </Link>

          <Link href="/bibliotecas" className={styles.card}>
            <Image
              src="/images/style-icon.png"
              alt="Style Libraries Icon"
              width={100}
              height={100}
            />
            <h3>Bibliotecas de Estilos</h3>
            <p>Conheça as principais bibliotecas e suas aplicações práticas.</p>
          </Link>

          <Link href="/nextjs" className={styles.card}>
            <Image
              src="/images/nextjs-icon.png"
              alt="Next.js Icon"
              width={100}
              height={100}
              
            />
            <h3>Next.js 15</h3>
            <p>Descubra as novidades e avanços da nova versão.</p>
          </Link>
        </div>
      </section>

      <section className={styles.overview}>
        <h2>Visão Geral do Projeto</h2>
        <p>
          Esta wiki técnica apresenta uma pesquisa aprofundada sobre tecnologias
          web modernas, focando em três áreas principais: frameworks e
          meta-frameworks, bibliotecas de estilo e as novidades do Next.js 15.
        </p>
        <p>
          Navegue pelos tópicos acima para explorar cada tema em detalhes,
          incluindo exemplos práticos, comparações e casos de uso no mercado.
        </p>
      </section>

      <section className={styles.research}>
        <h2>Pesquisa Técnica Detalhada</h2>
        
        <div className={styles.researchContent}>
          <Card title="1 Framework e Meta-framework">
            <h4>Definição</h4>
            <p><strong>Framework:</strong> é um conjunto estruturado de ferramentas, bibliotecas, convenções e padrões que fornece uma base para o desenvolvimento de aplicações. Ele define como organizar o código e oferece soluções prontas para problemas comuns, evitando que o desenvolvedor tenha que "reinventar a roda".</p>
            <p><strong>Meta-framework:</strong> é uma camada construída sobre um framework já existente, oferecendo recursos adicionais e convenções mais robustas para agilizar ainda mais o desenvolvimento. O meta-framework normalmente integra várias funcionalidades (como roteamento, renderização no servidor, otimização de imagens) de forma nativa.</p>
            
            <h4>Tipos e Exemplos</h4>
            <ul>
              <li><strong>Front-end:</strong> React, Angular, Vue.js — focados na interface do usuário</li>
              <li><strong>Back-end:</strong> Express.js (Node.js), Django (Python), Laravel (PHP) — focados na lógica e dados do servidor</li>
              <li><strong>Full-stack:</strong> Next.js (React), Nuxt.js (Vue.js), Remix (React), SvelteKit (Svelte) — abrangem tanto o lado do cliente quanto o do servidor</li>
            </ul>

            <h4>Prós</h4>
            <ul>
              <li>Aceleram o desenvolvimento com componentes e padrões prontos</li>
              <li>Mantêm consistência no código e facilitam colaboração entre desenvolvedores</li>
              <li>Comunidades ativas e abundância de documentação/tutoriais</li>
              <li>Ferramentas de otimização e integração já inclusas</li>
            </ul>

            <h4>Contras</h4>
            <ul>
              <li>Curva de aprendizado para entender convenções e ferramentas</li>
              <li>Algumas limitações por seguir as regras e estrutura impostas pelo framework</li>
              <li>Dependência de atualizações e mudanças na biblioteca principal</li>
            </ul>

            <h4>Funcionalidades Principais</h4>
            <ul>
              <li>Roteamento de páginas e recursos</li>
              <li>Componentização para reutilização de código</li>
              <li>Gerenciamento de estado e dados</li>
              <li>Ferramentas para SEO e performance</li>
              <li>Integração com APIs e banco de dados</li>
            </ul>

            <h4>Uso no Mercado e Oportunidades</h4>
            <p>E-commerces, sistemas internos, redes sociais, plataformas SaaS, dashboards. Alta demanda por desenvolvedores que dominem frameworks modernos. Salários mais competitivos para quem domina ferramentas amplamente usadas no mercado.</p>

            <h4>Usado em Sala de Aula</h4>
            <p><strong>Next.js 15</strong> será a base, por ser um meta-framework moderno que combina a flexibilidade do React com recursos avançados para produção.</p>
          </Card>

          <Card title="2 Bibliotecas de Estilos">
            <h4>Definição</h4>
            <p>Bibliotecas de estilos são conjuntos de classes, componentes e padrões visuais que facilitam a criação de interfaces. Elas podem ser baseadas em <strong>CSS puro</strong>, <strong>componentes pré-estilizados</strong> ou <strong>classes utilitárias</strong>.</p>
            
            <h4>Exemplos</h4>
            <ul>
              <li><strong>Tailwind CSS</strong> — classes utilitárias para criação de estilos de forma rápida e personalizada</li>
              <li><strong>Bootstrap</strong> — componentes prontos e responsivos com grid system</li>
              <li><strong>Material UI (MUI)</strong> — componentes React baseados no design system do Google</li>
              <li><strong>Chakra UI</strong> — componentes acessíveis e fácil customização de temas</li>
            </ul>

            <h4>Escolha</h4>
            <p><strong>Tailwind CSS</strong> - Escolhido por sua flexibilidade, rapidez e integração natural com projetos Next.js, permitindo personalizar completamente o visual sem ficar preso a estilos pré-definidos.</p>

            <h4>Prós</h4>
            <ul>
              <li>Reduz tempo de desenvolvimento</li>
              <li>Alto nível de personalização</li>
              <li>Facilita a manutenção de um padrão visual consistente</li>
              <li>Grande comunidade e documentação clara</li>
            </ul>

            <h4>Contras</h4>
            <ul>
              <li>Código HTML/JSX pode ficar poluído com muitas classes</li>
              <li>Requer adaptação para quem está acostumado ao CSS tradicional</li>
              <li>Nem sempre ideal para quem quer começar com componentes prontos</li>
            </ul>

            <h4>Empresas que Usam</h4>
            <ul>
              <li><strong>Tailwind:</strong> Vercel, Laravel, GitHub Copilot site</li>
              <li><strong>Bootstrap:</strong> Twitter, Lyft</li>
              <li><strong>MUI:</strong> Amazon, Spotify</li>
            </ul>
          </Card>


        </div>
      </section>
    </main>
  )
}