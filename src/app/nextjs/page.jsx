import styles from './nextjs.module.css'
import Card from '../../components/Card/Card'
import Link from 'next/link'

export default function NextJS() {
  return (
    <main className={styles.main}>
      <Link href="/" className={styles.backButton}>
        <span className={styles.arrow}>←</span>
        <span>Voltar</span>
      </Link>
      
      <section className={styles.hero}>
        <h1>Next.js 15</h1>
        <p>Descubra as novidades e avanços da nova versão.</p>
      </section>

      <section className={styles.content}>
        <Card title="Next.js 15">
          <h4>O que é</h4>
          <p>Next.js é um meta-framework baseado em React, criado pela <strong>Vercel</strong>, que oferece renderização híbrida, roteamento automático, otimização de imagens e outras funcionalidades para criar aplicações web rápidas e escaláveis.</p>
          
          <h4>Pontos Fortes</h4>
          <ul>
            <li><strong>Renderização Híbrida:</strong> suporta SSR (Server-Side Rendering), SSG (Static Site Generation) e ISR (Incremental Static Regeneration)</li>
            <li><strong>Otimização Automática:</strong> imagens, fontes, scripts e CSS</li>
            <li><strong>App Router:</strong> roteamento por arquivos com suporte a layouts e carregamento paralelo</li>
            <li><strong>SEO Friendly:</strong> geração de conteúdo no servidor para melhor indexação</li>
            <li><strong>Turbopack:</strong> compilador mais rápido para ambiente de desenvolvimento</li>
          </ul>

          <h4>Novidades (tendências recentes)</h4>
          <ul>
            <li>Melhorias no <strong>App Router</strong></li>
            <li><strong>Server Actions</strong> para executar lógica no servidor diretamente de componentes</li>
            <li>Suporte aprimorado a <strong>React Server Components</strong></li>
            <li>Integração mais simples com renderização em streaming</li>
            <li>Turbopack mais estável e rápido</li>
          </ul>

          <h4>Curiosidades</h4>
          <ul>
            <li>Lançado em 2016</li>
            <li>Cresceu rapidamente por unir React com recursos prontos para produção</li>
            <li>Base de escolha para empresas que precisam de alta performance e escalabilidade</li>
          </ul>
          
          <h4>Exemplos Práticos</h4>
          <div style={{background: 'rgba(102, 126, 234, 0.1)', padding: '1rem', borderRadius: '8px', marginTop: '1rem'}}>
            <p><strong>Exemplo 1 - E-commerce com SSR:</strong></p>
            <p>Loja online que renderiza páginas de produtos no servidor para melhor SEO, enquanto o carrinho funciona como SPA (Single Page Application) no lado do cliente.</p>
            
            <p><strong>Exemplo 2 - Blog com ISR:</strong></p>
            <p>Blog que usa Incremental Static Regeneration para gerar páginas estáticas sob demanda, atualizando conteúdo automaticamente sem rebuild completo.</p>
            
            <p><strong>Exemplo 3 - Dashboard com Server Actions:</strong></p>
            <p>Painel administrativo que usa Server Actions do Next.js 15 para processar formulários e operações de banco de dados diretamente no servidor.</p>
            
            <p><strong>Exemplo 4 - Aplicação Real-time:</strong></p>
            <p>Chat ou sistema de notificações usando React Server Components para atualizações em tempo real com menos JavaScript no cliente.</p>
          </div>
        </Card>
      </section>
    </main>
  )
}
