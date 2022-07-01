import React from 'react';
import styles from '../styles/Header.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.FooterMainContainer}>
        <span className={styles.navBarLine}></span>
        <p>Made by Mousseline</p>
      </div>
    </footer>
  );
}
