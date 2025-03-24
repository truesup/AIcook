import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Check out the code in the{' '}
      <a
        href="https://github.com/truesup/AIcook"
        target="blank"
        className={styles.footerLink}>
        repository
      </a>
      .
    </footer>
  )
}
