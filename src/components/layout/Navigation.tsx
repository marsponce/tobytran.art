// /src/components/layouts/Navigation.tsx

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import styles from './Navigation.module.css';

import * as Icons from '@/assets/Icons';

type NavLink = {
  href: string;
  label: string;
  icon?: React.ComponentType<{ forceInView?: boolean }> | React.ReactNode;
};

const NavLinks = [
  {
    href: '/',
    label: 'Home',
    icon: Icons.LogoIcon,
  },
  {
    href: '/about',
    label: 'About',
    icon: Icons.AboutIcon,
  },
  {
    href: '/fiber-art',
    label: 'Fiber Art',
    icon: Icons.FiberIcon,
  },
  {
    href: '/contact',
    label: 'Contact',
    icon: Icons.ContactIcon,
  },
  {
    href: '/visual-art',
    label: 'Visual Art',
    icon: Icons.VisIcon,
  },
  {
    href: '/blog',
    label: 'Blog',
    icon: Icons.BlogIcon,
  },
] as NavLink[];

export function Nav() {
  const pathname = usePathname();
  const isIndex = pathname === '/';

  return (
    <nav className={clsx(isIndex ? styles.navIndex : styles.nav)}>
      <ul>
        {pathname !== '/' && (
          <li>
            <Link href="/" aria-label="back">
              Back
            </Link>
          </li>
        )}
        {NavLinks.map(({ href, label, icon }) => {
          const isActive = pathname === href;
          if (!isActive && !isIndex) return null;

          const Icon = icon as React.ComponentType<{ forceInView?: boolean }>;

          const content = icon ? (
            <>
              <h1>
                <Icon forceInView={!isIndex} />
                <span className="sr-only">{label}</span>
              </h1>
            </>
          ) : (
            <h1>{label}</h1>
          );

          return (
            <li key={label}>
              {isActive ? (
                <button
                  aria-current="page"
                  aria-label={label}
                  className={styles.activeLink}
                >
                  {content}
                </button>
              ) : (
                <Link href={href} aria-label={label}>
                  {content}
                </Link>
              )}
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
            <li key={label} className={styles.socItem}>
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
