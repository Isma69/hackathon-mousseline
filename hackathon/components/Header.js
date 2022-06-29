import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.navBarMainContainer}>
        <Link href="/">
          <a className={styles.navBarLogo}>
            <img src="/image/apsideLogo.svg" alt="logo_principal" />
          </a>
        </Link>
        <span className={styles.navBarLine}></span>
        <ul className={styles.navBar}>
          <li>
            <Link href="/actualités">
              <a>Actualités</a>
            </Link>
          </li>
          <li>
            <Link href="/apprentissage">
              <a>Apprentissage</a>
            </Link>
          </li>
          <li>
            <Link href="/partage">
              <a>Partage</a>
            </Link>
          </li>
          <li>
            <Link href="/source">
              <a>Source</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
