import styles from "./style.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroPattern}></div>
      <div className={styles.heroGrid}></div>

      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left: Copy */}
          <div className="col-lg-6">
            <div className={styles.heroContent}>
              <div className={styles.heroLabel}>
                <i className="bi bi-shield-check-fill"></i>
                Trusted Healthcare Since 1985
              </div>

              <h1 className={styles.heroTitle}>
                Your Health,
                <span className={styles.heroTitleAccent}>Our Sacred</span>
                Commitment.
              </h1>

              <p className={styles.heroDesc}>
                World-class medical care delivered with compassion. Our
                board-certified specialists are here for you — from routine
                check-ups to complex procedures.
              </p>

              <div className={styles.heroCta}>
                <Link href="/page/Appointment" className="btn-primary-custom">
                  <i className="bi bi-calendar-check me-2"></i>
                  Book Appointment
                </Link>
                <Link href="#services" className="btn-cream">
                  <i className="bi bi-play-circle me-2"></i>
                  Our Services
                </Link>
              </div>

              <div className={styles.heroStats}>
                {[
                  { number: "50K+", label: "Patients Served" },
                  { number: "120+", label: "Specialists" },
                  { number: "40+", label: "Departments" },
                  { number: "99%", label: "Satisfaction Rate" },
                ].map((stat) => (
                  <div key={stat.label} className={styles.statItem}>
                    <div className={styles.statNumber}>{stat.number}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Quick Appointment Form */}
          <div className="col-lg-6">
            <div className={styles.heroRight}>
              {/* Floating badges */}
              <div
                className={`${styles.floatingBadge} ${styles.floatingBadge1}`}
              >
                <div className={`${styles.badgeIcon} ${styles.badgeIconBlue}`}>
                  <i className="bi bi-clock-fill"></i>
                </div>
                <div>
                  <div style={{ fontSize: "0.72rem", color: "#5a6e8c" }}>
                    Open 24/7
                  </div>
                  <div>Emergency Care</div>
                </div>
              </div>

              <div
                className={`${styles.floatingBadge} ${styles.floatingBadge2}`}
              >
                <div className={`${styles.badgeIcon} ${styles.badgeIconGold}`}>
                  <i className="bi bi-award-fill"></i>
                </div>
                <div>
                  <div style={{ fontSize: "0.72rem", color: "#5a6e8c" }}>
                    Accredited
                  </div>
                  <div>ISO Certified</div>
                </div>
              </div>

              <div className={styles.heroCard}>
                <div className={styles.cardTitle}>
                  <i
                    className="bi bi-calendar2-plus me-2"
                    style={{ color: "var(--gold-light)" }}
                  ></i>
                  Quick Appointment
                </div>

                <div className={styles.appointmentForm}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Full Name</label>
                    <input
                      type="text"
                      className={styles.formControl}
                      placeholder="e.g. Jane Mwangi"
                    />
                  </div>
                  <div className="row g-2">
                    <div className="col-6">
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Phone</label>
                        <input
                          type="tel"
                          className={styles.formControl}
                          placeholder="+254..."
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Date</label>
                        <input type="date" className={styles.formControl} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Department</label>
                    <select className={styles.formControl}>
                      <option value="">Select department...</option>
                      <option>General Medicine</option>
                      <option>Cardiology</option>
                      <option>Pediatrics</option>
                      <option>Orthopedics</option>
                      <option>Gynecology</option>
                      <option>Neurology</option>
                    </select>
                  </div>
                  <button className={styles.submitBtn}>
                    Confirm Appointment{" "}
                    <i className="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
