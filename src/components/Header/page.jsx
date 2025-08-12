import styles from './header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>🖥️ Mini Wiki Tech</h1>
            <ul className={styles.nav}>
                <li className={styles.item}><a href="/" className={styles.link}>Home</a></li>
                <li className={styles.item}><a href="/sobre" className={styles.link}>Sobre</a></li>
                <li className={styles.item}><a href="/contato" className={styles.link}>Contato</a></li>
            </ul>
        </header>
    )
}