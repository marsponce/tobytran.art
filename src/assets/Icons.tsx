// /src/assets/Icons.tsx

'use client';

import Image from 'next/image';
import clsx from 'clsx';
import contactSVG from './contact.svg';
import aboutSVG from './tubi.svg';
import logoSVG from './logo.svg';
import visSVG from './vis.svg';
import fiberSVG from './fiber.svg';
import shopSVG from './shop.svg';

import contactBG from './bg/contactbg.svg';
import aboutBG from './bg/aboutbg.svg';
import visBG from './bg/visualbg.svg';
import fiberBG from './bg/fiberbg.svg';
import shopBG from './bg/shopbg.svg';

import styles from './Icons.module.css';
import dynamic from 'next/dynamic';

const ReactCurvedText = dynamic(() => import('react-curved-text'), {
  ssr: false,
});

interface IconProps {
  size?: number;
  className?: string;
}

export function AboutIcon({ size = 256, className }: IconProps) {
  return (
    <div className={clsx(className ?? '', styles.wrapper)}>
      <Image
        src={aboutBG}
        alt=""
        aria-hidden
        width={size}
        height={size}
        className={styles.bg}
        priority
      />
      <Image
        src={aboutSVG}
        alt="About Sunfish"
        width={size}
        height={size}
        className={styles.svg}
        priority
      />
      <ReactCurvedText
        svgProps={{ className: styles.curvedText }}
        width={size}
        height={size}
        cx={size / 2}
        cy={size / 2}
        rx={size * 0.4}
        ry={size * 0.4}
        startOffset={100}
        tspanProps={{ dy: -10 }}
        text="about"
      />
    </div>
  );
}

export function ContactIcon({ size = 256, className }: IconProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className={clsx(className ?? '', styles.wrapper)}
    >
      <Image
        src={contactBG}
        alt=""
        aria-hidden
        width={size}
        height={size}
        className={styles.bg}
        priority
      />
      <Image
        src={contactSVG}
        alt="Contact Whale"
        width={size}
        height={size}
        className={styles.contactSvg}
        priority
      />
      <ReactCurvedText
        svgProps={{ className: styles.curvedText }}
        width={size}
        height={size}
        cx={size / 2}
        cy={size / 2}
        rx={size * 0.4}
        ry={size * 0.4}
        startOffset={64}
        tspanProps={{}}
        reversed={true}
        text="contact"
      />
    </div>
  );
}

export function LogoIcon({ size = 256, className }: IconProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className={clsx(className ?? '', styles.wrapper)}
    >
      <Image
        src={logoSVG}
        alt="Toby Tran Art Logo"
        width={size}
        height={size}
        className={styles.svg}
        priority
      />
    </div>
  );
}

export function ShopIcon({ size = 256, className }: IconProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className={clsx(className ?? '', styles.wrapper)}
    >
      <Image
        src={shopBG}
        alt=""
        aria-hidden
        width={size}
        height={size}
        className={styles.bg}
        priority
      />
      <Image
        src={shopSVG}
        alt="Shop Shark"
        width={size}
        height={size}
        className={styles.svg}
        priority
      />

      <ReactCurvedText
        svgProps={{ className: styles.curvedText }}
        width={size}
        height={size}
        cx={size / 2}
        cy={size / 2}
        rx={size * 0.4}
        ry={size * 0.4}
        startOffset={64}
        tspanProps={{ dy: -10 }}
        text="shop"
      />
    </div>
  );
}

export function VisIcon({ size = 256, className }: IconProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className={clsx(className ?? '', styles.wrapper)}
    >
      <Image
        src={visBG}
        alt=""
        aria-hidden
        width={size}
        height={size}
        className={styles.bg}
        priority
      />
      <Image
        src={visSVG}
        alt="Visual Octo"
        width={size}
        height={size}
        className={styles.artSvg}
        priority
      />

      <ReactCurvedText
        svgProps={{ className: styles.curvedText }}
        width={size}
        height={size}
        cx={size / 2}
        cy={size / 2}
        rx={size * 0.4}
        ry={size * 0.4}
        startOffset={64}
        tspanProps={{}}
        reversed={true}
        text="visual art"
      />
    </div>
  );
}

export function FiberIcon({ size = 256, className }: IconProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className={clsx(className ?? '', styles.wrapper)}
    >
      <Image
        src={fiberBG}
        alt=""
        aria-hidden
        width={size}
        height={size}
        className={styles.bg}
        priority
      />
      <Image
        src={fiberSVG}
        alt="Fiber Shrimp"
        width={size}
        height={size}
        className={styles.artSvg}
        priority
      />

      <ReactCurvedText
        svgProps={{ className: styles.curvedText }}
        width={size}
        height={size}
        reversed={true}
        cx={size / 2}
        cy={size / 2}
        rx={size * 0.4}
        ry={size * 0.4}
        startOffset={100}
        tspanProps={{}}
        text="fiber art"
      />
    </div>
  );
}
