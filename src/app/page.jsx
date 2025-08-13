import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (

    <main className={styles.main}>
      {/* Seção Hero */}
      <section className={styles.hero}>
        <Image
          src="/tech-logo.png"
          alt="Logo Tech Wiki"
          width={150}
          height={150}
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

      {/* Seção de Tópicos */}
      <section className={styles.topics}>
        <h2>Tópicos de Pesquisa</h2>
        
        <div className={styles.grid}>
          <Link href="/frameworks" className={styles.card}>
            <Image
              src="/framework-icon.png"
              alt="Frameworks Icon"
              width={64}
              height={64}
            />
            <h3>Frameworks e Meta-frameworks</h3>
            <p>Explore os diferentes tipos, vantagens e aplicações no mercado.</p>
          </Link>

          <Link href="/bibliotecas-estilos" className={styles.card}>
            <Image
              src="/style-icon.png"
              alt="Style Libraries Icon"
              width={64}
              height={64}
            />
            <h3>Bibliotecas de Estilos</h3>
            <p>Conheça as principais bibliotecas e suas aplicações práticas.</p>
          </Link>

          <Link href="/nextjs15" className={styles.card}>
            <Image
              src="/nextjs-icon.png"
              alt="Next.js Icon"
              width={64}
              height={64}
            />
            <h3>Next.js 15</h3>
            <p>Descubra as novidades e avanços da nova versão.</p>
          </Link>
        </div>
      </section>

      {/* Seção de Visão Geral */}
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
    </main>

    <div className={styles.container}>
      <h1 className={styles.title}>💻 Mini Wiki Tech</h1>
      
    </div>

  )
}