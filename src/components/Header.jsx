import { useContext } from 'react'
import { ExpandContext } from '../contexts/ExpandContext'
import styles from './Header.module.css'

export default function Header() {
  const { isExpanded } = useContext(ExpandContext)

  return (
    <header className={`${styles.header} ${isExpanded ? styles.expanded : ''}`}>
      <h1 className={styles.headerTitle}>
        <a className={styles.headerLogo} href="/">
          AI Cook{' '}
        </a>
        – Your Creative Culinary Partner
      </h1>
    </header>
  )
}
