import { FcGlobe } from 'react-icons/fc'
import { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'
import { LoadingContext } from '../contexts/LoadingContext'
import translations from '../utils/translations'
import styles from './LanguageToggle.module.css'

export default function LanguageToggle() {
  const { lang, setLang } = useContext(LanguageContext)
  const t = translations[lang]

  const { recipeIsLoaded } = useContext(LoadingContext)

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'ru' : 'en'))
  }

  return (
    <button
      style={{ display: recipeIsLoaded ? 'none' : 'flex' }}
      className={styles.langButton}>
      <FcGlobe
        className={styles.globeIcon}
        title={t.langToggleTitle}
        onClick={toggleLanguage}
      />
    </button>
  )
}
