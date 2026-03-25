import styles from "./style.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row g-5">
          {/* Brand col */}
          <div className="col-lg-4">
            <a href="#" className={styles.brand}>
              <div className={styles.brandIcon}>
                <i className="bi bi-heart-pulse-fill"></i>
              </div>
              <span className={styles.brandName}>MediCare Hospital</span>
            </a>
            <p className={styles.tagline}>
              Providing compassionate, world-class healthcare to our community
              since 1985. Your health is our highest calling.
            </p>
            <div className={styles.socials}>
              {["facebook", "twitter-x", "instagram", "linkedin"].map((s) => (
                <a href="#" key={s} className={styles.socialIcon}>
                  <i className={`bi bi-${s}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="col-6 col-lg-2">
            <div className={styles.colTitle}>Quick Links</div>
            <ul className={styles.links}>
              {[
                "Home",
                "About Us",
                "Services",
                "Our Doctors",
                "Departments",
                "Careers",
              ].map((l) => (
                <li key={l}>
                  <a href="#">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div className="col-6 col-lg-2">
            <div className={styles.colTitle}>Departments</div>
            <ul className={styles.links}>
              {[
                "Cardiology",
                "Neurology",
                "Pediatrics",
                "Orthopedics",
                "Oncology",
                "Gynecology",
              ].map((d) => (
                <li key={d}>
                  <a href="#">{d}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-4">
            <div className={styles.colTitle}>Contact Us</div>
            {[
              {
                icon: "bi-geo-alt-fill",
                text: "12 Ngong Road, Nairobi, Kenya",
              },
              {
                icon: "bi-telephone-fill",
                text: "+254 700 000 911 (24/7 Emergency)",
              },
              {
                icon: "bi-envelope-fill",
                text: "info@medicare-hospital.co.ke",
              },
              { icon: "bi-clock-fill", text: "OPD: Mon–Sat 8:00 AM – 6:00 PM" },
            ].map((item) => (
              <div key={item.text} className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.bottom}>
          <span>
            © {new Date().getFullYear()} MediCare General Hospital. All rights
            reserved.
          </span>
          <span>
            Built with <span className={styles.heartAccent}>♥</span> for better
            health
          </span>
        </div>
      </div>
    </footer>
  );
}
