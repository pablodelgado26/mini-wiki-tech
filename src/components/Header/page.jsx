import styles from './header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>Mini Wiki Tech</h1>
            <ul className={styles.nav}>
                <li><a href="/" className={styles.link}>Home</a></li>
                <li><a href="/sobre" className={styles.link}>Sobre</a></li>
                <li><a href="/contato" className={styles.link}>Contato</a></li>
            </ul>
        </header>
    )
}