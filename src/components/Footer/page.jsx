import styles from './footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.listOfNames}>
                Equipe de Desenvolvimento
            </div>
            
            <div className={styles.teamContainer}>
                <div className={styles.lineDiv}>
                    <span className={styles.girlName}>Alexandra Aversani</span>
                    <span className={styles.girlName}>Gabriela Moleta</span>
                </div>
                <div className={styles.lineDiv}>
                    <span className={styles.boyName}>Miguel Sarti</span>
                    <span className={styles.boyName}>Pablo Delgado</span>
                    <span className={styles.boyName}>Vinícius Rocha</span>
                    <span className={styles.boyName}>Vinícius Pereira</span>
                    <span className={styles.boyName}>Vitor Argeri</span>
                </div>
            </div>

            <div className={styles.footerInfo}>
                <p className={styles.projectInfo}>
                    Mini Wiki Tech - Projeto acadêmico desenvolvido para apresentar 
                    pesquisas sobre tecnologias web modernas, frameworks e bibliotecas de estilo.
                </p>
                <p className={styles.copyright}>
                    © 2024 Mini Wiki Tech. Desenvolvido com Next.js e muito ☕
                </p>
            </div>
        </footer>
    )
}