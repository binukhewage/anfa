"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./Header.module.css";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Prices", path: "/prices" },
  { label: "Bootcamps", path: "/camps" },
  { label: "About Me", path: "/about-me" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""} glass-nav`}
    >
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logoContainer}>
          <Image
            src="/anfalogo.png"
            alt="Anfa Training Logo"
            width={120}
            height={40}
            className={styles.logo}
            priority
          />
        </Link>

        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navActive : ""}`}>
          {navItems.map((item) => {
            const isActive =
              pathname === item.path ||
              (item.path !== "/" && pathname.startsWith(item.path));
            return (
              <Link
                key={item.label}
                href={item.path}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className={styles.cta}>
            <Link
              href="/onlinebooking"
              className="btn btn-primary"
            >
              Apply Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
