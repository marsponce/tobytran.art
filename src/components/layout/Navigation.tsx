'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import styles from './Navigation.module.css';

type NavLink = {
  href: string;
  label: string;
  icon?: React.ReactNode;
};

const NavLinks = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/fiber-art',
    label: 'Fiber Art',
  },
  {
    href: '/visual-art',
    label: 'Visual Art',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
] as NavLink[];

export function Nav() {
  const pathname = usePathname();
  const isIndex = pathname === '/';

  return (
    <nav className={clsx(isIndex ? styles.navIndex : styles.nav)}>
      <ul>
        {NavLinks.map(({ href, label, icon }) => {
          const isActive = pathname === href;

          return (
            <li key={label}>
              <Link
                key={href}
                href={href}
                aria-label={label}
                className={clsx(isActive && styles.activeLink)}
              >
                {icon ? (
                  <>
                    {icon}
                    <span className="sr-only">{label}</span>
                  </>
                ) : (
                  label
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const SocLinks = [
  {
    href: 'https://www.instagram.com/toby_culosis/',
    label: 'Instagram',
    icon: <FaInstagram size={32} color="var(--color-accent)" />,
  },
  {
    href: 'mailto:info@tobytran.art',
    label: 'EMail',
    icon: <MdEmail size={32} color="var(--color-accent)" />,
  },
] as NavLink[];

export function Socials() {
  return (
    <nav className={styles.soc}>
      <ul>
        {SocLinks.map(({ href, label, icon }) => {
          // const isActive = pathname === href;

          return (
            <li key={label}>
              <Link key={href} href={href} aria-label={label}>
                {icon ? (
                  <>
                    {icon}
                    <span className="sr-only">{label}</span>
                  </>
                ) : (
                  <>
                    <span className="sr-only">{label}</span>
                  </>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
