import { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'
import translations from '../utils/translations'
import styles from './Footer.module.css'

export default function Footer() {
  const { lang } = useContext(LanguageContext)
  const t = translations[lang]

  return (
    <footer className={styles.footer}>
      {/* Check out the code in the{' '} */}
      {t.footerText}{' '}
      <a
        href="https://github.com/truesup/AIcook"
        target="blank"
        className={styles.footerLink}>
        {/* repository */}
        {t.footerAnchor}
      </a>
      .
    </footer>
  )
}
