import React from 'react';
import styles from './Header.module.css';

/**
 * Komponen Header menampilkan judul dan subtitle aplikasi.
 */
const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Subdomain Scanner</h1>
      <p className={styles.subtitle}>Powered by cathunter1337</p>
    </header>
  );
};

export default Header;
