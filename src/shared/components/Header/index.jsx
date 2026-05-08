import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const NAV_LINKS = [
  { label: 'All Movies', href: '#', active: true },
  { label: 'Watch List', href: '#' },
  { label: '1950–2000', href: '#' },
  { label: '2000–2023', href: '#' },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Cine<span className={styles.logoAccent}>flix</span>
      </div>

      <nav className={styles.nav}>
        {NAV_LINKS.map(({ label, href, active }) => (
          <Link
            key={label}
            to={href}
            className={`${styles.navLink} ${active ? styles.navLinkActive : ''}`}
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className={styles.avatar}>U</div>
    </header>
  );
}