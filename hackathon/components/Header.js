/* eslint-disable @next/next/no-img-element */
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
      </div>
    </header>
  );
}
