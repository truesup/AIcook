import { useState } from 'react'
import { LanguageContext } from './LanguageContext'

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')

  const value = { lang, setLang }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
