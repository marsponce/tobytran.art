'use client';

import Link from 'next/link';
// import { usePathname } from "next/navigation";
// import clsx from "clsx";
import { FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

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
] as NavLink[];

export function Nav() {
  // const pathname = usePathname();

  return (
    <nav>
      <ul>
        {NavLinks.map(({ href, label, icon }) => {
          // const isActive = pathname === href;

          return (
            <li key={label}>
              <Link key={href} href={href} aria-label={label}>
                {icon ? (
                  <>
                    {icon}
                    {label}
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
    <nav>
      <ul>
        {SocLinks.map(({ href, label, icon }) => {
          // const isActive = pathname === href;

          return (
            <li key={label}>
              <Link key={href} href={href} aria-label={label}>
                {icon ? (
                  <>
                    {icon}
                    {label}
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
