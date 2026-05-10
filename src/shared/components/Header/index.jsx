import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { PATHS } from '../../constants/path';

const NAV_LINKS = [
  { label: 'All Movies', href: PATHS.home },
  { label: 'Watch List', href: PATHS.watchlist },
  { label: '1950–2000',  href: PATHS.classics },
  { label: '2000–2023',  href: PATHS.modern },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          Cine<span className={styles.logoAccent}>flix</span>
        </div>

        <nav className={styles.nav}>
          {NAV_LINKS.map(({ label, href }) => (
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

        <button
          className={`${styles.burger} ${isOpen ? styles.burgerOpen : ''}`}
          onClick={() => setIsOpen((p) => !p)}
          aria-label="Menu"
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>
      </header>

      <nav className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <NavLink
            key={label}
            to={href}
            end={href === '/'}
            onClick={close}
            className={({ isActive }) =>
              `${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </>
  );
}