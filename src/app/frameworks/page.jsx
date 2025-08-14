import styles from './frameworks.module.css'
import Card from '../../components/Card/Card'
import Link from 'next/link'

export default function Frameworks() {
  return (
    <main className={styles.main}>
      <Link href="/" className={styles.backButton}>
        <span className={styles.arrow}>←</span>
        <span>Voltar</span>
      </Link>
      
      <section className={styles.hero}>
        <h1>Frameworks e Meta-frameworks</h1>
        <p>Explore os diferentes tipos, vantagens e aplicações no mercado.</p>
      </section>

      <section className={styles.content}>
        <Card title="Framework e Meta-framework">
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
          
          <h4>Exemplos Práticos</h4>
          <div style={{background: 'rgba(102, 126, 234, 0.1)', padding: '1rem', borderRadius: '8px', marginTop: '1rem'}}>
            <p><strong>Exemplo 1 - E-commerce com Next.js:</strong></p>
            <p>Uma loja online que usa Next.js para renderização do servidor (SEO), páginas estáticas para produtos (performance) e componentes React para interatividade do carrinho de compras.</p>
            
            <p><strong>Exemplo 2 - Dashboard Administrativo:</strong></p>
            <p>Sistema interno de empresa usando React para interface dinâmica, com componentes reutilizáveis para gráficos, tabelas e formulários.</p>
            
            <p><strong>Exemplo 3 - Blog Corporativo:</strong></p>
            <p>Site institucional com Nuxt.js (Vue) para geração estática de páginas, otimização automática de imagens e SEO avançado.</p>
          </div>
        </Card>
      </section>
    </main>
  )
}
