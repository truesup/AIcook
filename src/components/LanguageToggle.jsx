import { FcGlobe } from 'react-icons/fc'
import { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'
import { IngredientsContext } from '../contexts/IngredientsContext'
import translations from '../utils/translations'
import styles from './LanguageToggle.module.css'

export default function LanguageToggle() {
  const { lang, setLang } = useContext(LanguageContext)
  const t = translations[lang]

  const { ingredientsList } = useContext(IngredientsContext)

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'ru' : 'en'))
  }

  return (
    <button
      style={{ display: ingredientsList.length > 0 ? 'none' : 'flex' }}
      className={styles.langButton}>
      <FcGlobe
        className={styles.globeIcon}
        title={t.langToggleTitle}
        onClick={toggleLanguage}
      />
    </button>
  )
}
