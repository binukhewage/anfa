import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.col}>
            <span className={styles.logoText}>
              ANFA<span className={styles.logoAccent}>TRAINING</span>
            </span>
            <p className={styles.description}>
              Personal training, nutrition, and performance coaching. Evidence-based systems built around your lifestyle, body, and goals.
            </p>
            <div className={styles.socials}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="YouTube"
              >
                YT
              </a>
            </div>
          </div>

          <div className={styles.col}>
            <h4>Navigate</h4>
            <ul className={styles.links}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/prices">Prices</Link>
              </li>
              <li>
                <Link href="/camps">Bootcamps</Link>
              </li>
              <li>
                <Link href="/about-me">About Me</Link>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Services</h4>
            <ul className={styles.links}>
              <li>
                <Link href="/services#online">Online Coaching</Link>
              </li>
              <li>
                <Link href="/services#gym">1:1 Gym Coaching</Link>
              </li>
              <li>
                <Link href="/services#martial-arts">Muay Thai & MMA</Link>
              </li>
              <li>
                <Link href="/services#ebt">Extreme Bodyweight Training</Link>
              </li>
              <li>
                <Link href="/services#massage">Sports Massage</Link>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Contact Info</h4>
            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactLabel}>Email:</span>
                <a href="mailto:info@anfatraining.com">info@anfatraining.com</a>
              </li>
              <li>
                <span className={styles.contactLabel}>Phone:</span>
                <a href="tel:+212676777787">+212 (0) 676 777 787</a>
              </li>
              <li>
                <span className={styles.contactLabel}>Locations:</span>
                <span>Casablanca & Bouznika, Morocco (and Online Globally)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {currentYear} Anfa Training. All rights reserved. Created with Next.js.</p>
          <div className={styles.legalLinks}>
            <Link href="/general-conditions">General Conditions</Link>
            <Link href="/return-policy">Return Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
