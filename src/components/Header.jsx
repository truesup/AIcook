import { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext.js'
import translations from '../utils/translations.js'
import styles from './Header.module.css'

export default function Header() {
  const { lang } = useContext(LanguageContext)
  const t = translations[lang]

  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>
        <a className={styles.headerLogo} href="/">
          AI Cook{' '}
        </a>
        – {t.headerSubtitle}
      </h1>
    </header>
  )
}
