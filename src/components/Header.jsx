import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>
        <a className={styles.headerLogo} href="/">
          AI Cook{' '}
        </a>
        – Your Creative Culinary Partner
      </h1>
    </header>
  )
}
