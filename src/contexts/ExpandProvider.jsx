import { useState } from 'react'
import { ExpandContext } from './ExpandContext'

export default function ExpandProvider({ children }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <ExpandContext.Provider value={{ isExpanded, setIsExpanded }}>
      {children}
    </ExpandContext.Provider>
  )
}
