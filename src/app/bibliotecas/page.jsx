import styles from './bibliotecas.module.css'
import Card from '../../components/Card/Card'
import Link from 'next/link'

export default function Bibliotecas() {
  return (
    <main className={styles.main}>
      <Link href="/" className={styles.backButton}>
        <span className={styles.arrow}>←</span>
        <span>Voltar</span>
      </Link>
      
      <section className={styles.hero}>
        <h1>Bibliotecas de Estilos</h1>
        <p>Conheça as principais bibliotecas e suas aplicações práticas.</p>
      </section>

      <section className={styles.content}>
        <Card title="Bibliotecas de Estilos">
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
          
          <h4>Exemplos Práticos</h4>
          <div style={{background: 'rgba(102, 126, 234, 0.1)', padding: '1rem', borderRadius: '8px', marginTop: '1rem'}}>
            <p><strong>Exemplo 1 - Sistema de Design com Tailwind:</strong></p>
            <p>Uma aplicação que usa classes utilitárias como "bg-blue-500 text-white p-4 rounded-lg" para criar rapidamente botões estilizados sem escrever CSS customizado.</p>
            
            <p><strong>Exemplo 2 - Dashboard com Material-UI:</strong></p>
            <p>Painel administrativo usando componentes prontos como DataGrid, AppBar e Drawer do MUI, mantendo o design system do Google Material.</p>
            
            <p><strong>Exemplo 3 - Landing Page com Bootstrap:</strong></p>
            <p>Site responsivo usando o grid system do Bootstrap (col-md-6, col-lg-4) e componentes como navbar, cards e carousel para layout rápido.</p>
          </div>
        </Card>
      </section>
    </main>
  )
}
