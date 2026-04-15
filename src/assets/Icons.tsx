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
import blogSVG from './blog.svg';

import contactBG from './bg/contactbg.svg';
import aboutBG from './bg/aboutbg.svg';
import visBG from './bg/visualbg.svg';
import fiberBG from './bg/fiberbg.svg';
import shopBG from './bg/shopbg.svg';
import blogBG from './bg/blogbg.svg';

import backBtnSvg from './backbtn.svg';

import styles from './Icons.module.css';
import dynamic from 'next/dynamic';
import { useEffect, useRef } from 'react';

const ReactCurvedText = dynamic(() => import('react-curved-text'), {
  ssr: false,
});

interface IconProps {
  size?: number;
  className?: string;
  id?: string;
  forceInView?: boolean;
}

interface useInViewOptions extends IntersectionObserverInit {
  forceInView?: boolean;
}

function useInView(options?: useInViewOptions) {
  /* expand on mobile */
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (options?.forceInView) {
      el.classList.add(styles.inView);
      return;
    }

    const isMobile = window.matchMedia('(hover: none)').matches;
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      ([entry]) => el.classList.toggle(styles.inView, entry.isIntersecting),
      { rootMargin: '-60% 0px -40% 0px', threshold: 0, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}

export function BackBtnIcon({ size = 156, className, forceInView }: IconProps) {
  const wrapperRef = useInView({ forceInView });
  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className={clsx(className ?? '', styles.wrapper)}
    >
      <Image
        src={backBtnSvg}
        alt=""
        width={size}
        height={size}
        className={styles.svg}
        priority
      />
    </div>
  );
}

export function AboutIcon({ size = 224, className, forceInView }: IconProps) {
  const wrapperRef = useInView({ forceInView });
  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className={clsx(className ?? '', styles.wrapper)}
    >
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
        startOffset={50}
        tspanProps={{ dy: 16 }}
        reversed={true}
        text="about"
      />
    </div>
  );
}

export function ContactIcon({
  size = 224,
  className,
  forceInView,
  id,
}: IconProps) {
  const wrapperRef = useInView({ forceInView });
  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      style={{ width: size, height: size }}
      className={clsx(className ?? '', styles.wrapper)}
      id={clsx(id ?? '')}
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
        svgProps={{ className: clsx(styles.curvedText, styles.contactText) }}
        width={size * 2}
        height={size * 2}
        cx={(size * 2) / 2}
        cy={(size * 2) / 2}
        rx={size * 2 * 0.4}
        ry={size * 2 * 0.4}
        startOffset={50}
        tspanProps={{ dy: 16 }}
        reversed={true}
        text="contact"
      />
    </div>
  );
}

export function LogoIcon({ size = 224, className, forceInView }: IconProps) {
  const wrapperRef = useInView({ forceInView });
  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
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

export function ShopIcon({ size = 224, className, forceInView }: IconProps) {
  const wrapperRef = useInView({ forceInView });
  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
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
        tspanProps={{ dy: 16 }}
        text="shop"
      />
    </div>
  );
}

export function VisIcon({ size = 224, className, forceInView }: IconProps) {
  const wrapperRef = useInView({ forceInView });
  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      style={{ width: size, height: size }}
      className={clsx(className ?? '', styles.wrapper)}
    >
      <Image
        src={visBG}
        alt=""
        aria-hidden
        width={size}
        height={size}
        className={styles.artBg}
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
        startOffset={0}
        tspanProps={{ dy: 16 }}
        reversed={true}
        text="visual art"
      />
    </div>
  );
}

export function FiberIcon({ size = 224, className, forceInView }: IconProps) {
  const wrapperRef = useInView({ forceInView });
  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
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
        startOffset={25}
        tspanProps={{ dy: 16 }}
        text="fiber art"
      />
    </div>
  );
}

export function BlogIcon({ size = 224, className, forceInView }: IconProps) {
  const wrapperRef = useInView({ forceInView });
  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      style={{ width: size, height: size }}
      className={clsx(className ?? '', styles.wrapper)}
    >
      <Image
        src={blogBG}
        alt=""
        aria-hidden
        width={size}
        height={size}
        className={styles.bg}
        priority
      />
      <Image
        src={blogSVG}
        alt="Blog Clam"
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
        startOffset={50}
        tspanProps={{ dy: 16 }}
        text="blog"
      />
    </div>
  );
}
