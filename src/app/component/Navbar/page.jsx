// components/Navbar.jsx   (or .js)
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/page/Services" },
    { label: "Doctors", href: "/page/Doctors" },
    { label: "Departments", href: "/page/Department" },
    { label: "About", href: "/page/About" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          {/* Brand Logo */}
          <Link href="/" className={styles.brand}>
            <div className={styles.brandIcon}>
              <i className="bi bi-heart-pulse-fill"></i>
            </div>
            <div className={styles.brandText}>
              <span className={styles.brandName}>MediCare</span>
              <span className={styles.brandSub}>General Hospital</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <ul className={`${styles.navLinks} d-none d-lg-flex`}>
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${
                    pathname === item.href ? styles.activeLink : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Emergency & CTA */}
          <div className="d-flex align-items-center gap-3">
            <span className={styles.emergencyBadge}>
              <i className="bi bi-telephone-fill me-1"></i>
              Emergency: 911
            </span>

            <Link
              href="/page/Appointment"
              className="btn-primary-custom d-none d-md-inline-block"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
