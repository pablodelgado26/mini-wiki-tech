import styles from './footer.module.css'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <p className={styles.copyright}>© 2025 🖥️ Mini Wiki Tech. Todos os direitos reservados.</p>
            <div className={styles.listOfNames}>
                <div className={styles.lineDiv  }>
                    <p className={styles.girlName}>Alexandra Versani</p>
                    <p className={styles.girlName}> Gabriela Moleta</p>
                </div>
                <div className={styles.lineDiv}>
                    <p className={styles.boyName}>Miguel Sarti</p>
                    <p className={styles.boyName}>Pablo Delgado</p>
                    <p className={styles.boyName}>Vinícius Rocha</p>
                    <p className={styles.boyName}>Vinícius Pereira</p>
                    <p className={styles.boyName}>Vitor Argeri</p>
                </div>
            </div>
        </div>
    )
}