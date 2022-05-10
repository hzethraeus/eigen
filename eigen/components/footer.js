import styles from './StyleSheet/footer.module.css';
import Image from 'next/image';
export default function Footer() {
    return(
    <footer className={styles.footer}>
        <a
        href="hej.com"
        target="_blank"
        rel="noopener noreferrer"
        >
        
        GitHub
        </a>
    </footer>)
};