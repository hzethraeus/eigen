import React from 'react';
import styles from './StyleSheet/header.module.css';
import Link from 'next/link';
import { useRouter } from "next/router";

export default function Header() {
    const router=useRouter();

  return (
    <header>
        <div className={styles.headerAll}>
        <Link href="/">
        <a className={router.pathname== "/" ? `${styles.activeTab}` : `${styles.nonActiveTab}`}>
            Henric Zethraeus
        </a>
    </Link>
   <div className={styles.rightSideMenu}>
    <Link href="/about/about">
        <a className={router.pathname== "/about/about" ? `${styles.activeTab}` : `${styles.nonActiveTab}`}>
            About
        </a>
    </Link>
    <Link href="/projects/projects">
        <a className={router.pathname.startsWith("/projects/") ? `${styles.activeTab}` : `${styles.nonActiveTab}`}>
            Projects
        </a>
    </Link>
    <Link href="/contact/contact">
        <a className={router.pathname== "/contact/contact" ? `${styles.activeTab}` : `${styles.nonActiveTab}`}>
            Contact
        </a>
    </Link>
    </div>
  </div>
  
    </header>
)};