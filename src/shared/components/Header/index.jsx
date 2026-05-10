import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const NAV_LINKS = [
  { label: 'All Movies', href: '/' },
  { label: 'Watch List', href: '/watchlist' },
  { label: '1950–2000', href: '/classics' },
  { label: '2000–2023', href: '/modern' },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Cine<span className={styles.logoAccent}>flix</span>
      </div>

      <nav className={styles.nav}>
        {NAV_LINKS.map(({ label, href}) => (
          <NavLink
            key={label}
            to={href}
            end={href === '/'}
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <div className={styles.avatar}>U</div>
    </header>
  );
}