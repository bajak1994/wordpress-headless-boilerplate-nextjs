import styles from './Footer.module.scss';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>&copy; {currentYear} WordPress Headless NextJS. All rights reserved.</p>
    </footer>
  );
};
