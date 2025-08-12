import styles from './not-found.module.css'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>Página não encontrada</h2>
      <p className={styles.description}>
        Desculpe, a página que você está procurando não existe.
      </p>
      <Link href="/" className={styles.button}>
        Voltar para Home
      </Link>
    </div>
  )
}
