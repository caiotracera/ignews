import Logo from '../assets/images/logo.svg'

import { SignInButton } from '@/components/SignInButton'
import styles from '@/styles/components/header.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Logo />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}
