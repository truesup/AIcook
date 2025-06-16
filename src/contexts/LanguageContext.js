import { createContext } from 'react'

export const LanguageContext = createContext({
  lang: 'ru',
  setLang: () => {},
})
