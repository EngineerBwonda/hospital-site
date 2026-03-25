"use client";

// import PageHero from "../../components/PageHero";
import Hero from "@/app/component/Hero/page";
import Link from "next/link";
import styles from "./style.module.css";

const mission = [
  {
    icon: "bi-bullseye",
    bg: "#e3f2fd",
    ic: "#1565c0",
    title: "Our Mission",
    desc: "To provide accessible, compassionate and world-class healthcare to every patient — regardless of their background — guided by clinical excellence and ethical practice.",
  },
  {
    icon: "bi-eye-fill",
    bg: "#fff8e1",
    ic: "#f57f17",
    title: "Our Vision",
    desc: "To be East Africa's most trusted healthcare institution, recognised for transforming patient outcomes through innovation, research and education.",
  },
  {
    icon: "bi-shield-heart-fill",
    bg: "#e8f5e9",
    ic: "#2e7d32",
    title: "Our Values",
    desc: "Compassion, integrity, innovation, excellence and equity. These principles guide every interaction, every decision and every treatment plan.",
  },
];

const milestones = [
  {
    year: "1985",
    text: "MediCare General Hospital founded with 50 beds and 12 staff members.",
  },
  {
    year: "1993",
    text: "Opened the Cardiology and Neurology departments; expanded to 150 beds.",
  },
  {
    year: "2001",
    text: "Achieved ISO 9001 accreditation and launched the first paediatric ICU in the region.",
  },
  {
    year: "2008",
    text: "Inaugurated the Cancer Treatment Centre with a linear accelerator.",
  },
  {
    year: "2015",
    text: "Reached 500 beds, introduced robotic-assisted surgery and opened the fertility clinic.",
  },
  {
    year: "2021",
    text: "Launched telemedicine services, serving over 10,000 remote patients annually.",
  },
  {
    year: "2024",
    text: "Expanded to 40+ departments with 120 specialists and 50,000+ patients served.",
  },
];

const awards = [
  {
    icon: "🏆",
    title: "Best Hospital in East Africa",
    year: "2023 — Africa Health Awards",
    desc: "Recognised for clinical excellence, patient satisfaction and innovation in healthcare delivery.",
  },
  {
    icon: "⭐",
    title: "ISO 9001:2015 Certified",
    year: "2001 — Renewed 2024",
    desc: "Continuous quality management certification reflecting our commitment to process excellence.",
  },
  {
    icon: "🩺",
    title: "Top Cardiac Centre Award",
    year: "2022 — Kenya Medical Association",
    desc: "Awarded for exceptional outcomes in interventional cardiology and cardiac surgery.",
  },
  {
    icon: "👶",
    title: "Excellence in Neonatal Care",
    year: "2023 — East Africa Paediatrics Summit",
    desc: "Recognised for our Level III NICU and lowest neonatal mortality rates in the region.",
  },
  {
    icon: "🔬",
    title: "Research & Innovation Award",
    year: "2022 — Nairobi University",
    desc: "Awarded for pioneering clinical research in tropical disease management.",
  },
  {
    icon: "💚",
    title: "Green Hospital Certification",
    year: "2023 — Kenya Environment Authority",
    desc: "Recognised for sustainable operations, solar energy adoption and zero-waste initiatives.",
  },
];

const values = [
  {
    icon: "❤️",
    bg: "#fce4ec",
    name: "Compassion",
    desc: "We treat every patient with kindness, empathy and respect for their dignity.",
  },
  {
    icon: "⚖️",
    bg: "#fff3e0",
    name: "Integrity",
    desc: "We uphold the highest ethical standards in all our clinical and administrative practices.",
  },
  {
    icon: "💡",
    bg: "#e3f2fd",
    name: "Innovation",
    desc: "We continually embrace new technologies and methods to improve patient outcomes.",
  },
  {
    icon: "🌍",
    bg: "#e8f5e9",
    name: "Equity",
    desc: "We believe everyone deserves quality healthcare, regardless of their circumstances.",
  },
  {
    icon: "🏅",
    bg: "#fff8e1",
    name: "Excellence",
    desc: "We pursue the highest standards in everything we do — clinical and beyond.",
  },
];

export default function AboutPage() {
  return (
    <>
      <main>
        <Hero
          label="Who We Are"
          icon="bi-hospital-fill"
          title="About MediCare Hospital"
          desc="Nearly four decades of healing, innovation and compassionate care — serving Nairobi and beyond since 1985."
          breadcrumb="About"
        />

        {/* Mission / Vision / Values cards */}
        <section className={`${styles.section} ${styles.missionSection}`}>
          <div className="container">
            <div className="row g-4">
              {mission.map((m) => (
                <div key={m.title} className="col-md-4">
                  <div className={styles.missionCard}>
                    <div
                      className={styles.missionIcon}
                      style={{ background: m.bg }}
                    >
                      <i className={`bi ${m.icon}`} style={{ color: m.ic }}></i>
                    </div>
                    <h3 className={styles.missionTitle}>{m.title}</h3>
                    <p className={styles.missionDesc}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className={`${styles.section} ${styles.storySection}`}>
          <div className="container">
            <div className="row g-5 align-items-start">
              <div className="col-lg-6">
                <div className={styles.storyBody}>
                  <div className={styles.storyLabel}>Our Story</div>
                  <h2 className={styles.storyTitle}>
                    Nearly 40 Years of Healing Lives
                  </h2>
                  <p className={styles.storyText}>
                    MediCare General Hospital was founded in 1985 by Dr. John
                    Mwangi with a singular vision: to bring specialist-level
                    healthcare to the heart of Nairobi. What began as a modest
                    50-bed facility has grown into one of East Africas premier
                    tertiary hospitals.
                  </p>
                  <p className={styles.storyText}>
                    Today, our 600-bed hospital employs over 1,200 clinical and
                    non-clinical staff, houses 40+ departments and welcomes more
                    than 50,000 patients every year. Our growth has always been
                    driven by one thing: our patients.
                  </p>
                  <div style={{ marginTop: "2rem" }}>
                    <Link href="/appointment" className="btn-primary-custom">
                      <i className="bi bi-calendar-check me-2"></i>
                      Book an Appointment
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.milestones}>
                  {milestones.map((m, i) => (
                    <div key={m.year} className={styles.milestone}>
                      <div className={styles.msDot}>
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <div className={styles.msYear}>{m.year}</div>
                        <div className={styles.msText}>{m.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section className={styles.statsStrip}>
          <div className="container">
            <div className="row g-4 text-center">
              {[
                { num: "50K+", label: "Patients Annually" },
                { num: "120+", label: "Board-Certified Specialists" },
                { num: "40+", label: "Departments" },
                { num: "600", label: "Hospital Beds" },
                { num: "39", label: "Years of Service" },
                { num: "99%", label: "Patient Satisfaction" },
              ].map((s) => (
                <div key={s.label} className="col-6 col-md-4 col-lg-2">
                  <div className={styles.statItem}>
                    <div className={styles.statNum}>{s.num}</div>
                    <div className={styles.statLabel}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Values */}
        <section className={`${styles.section} ${styles.awardsSection}`}>
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-8">
                <div className="section-label mb-2">Recognition</div>
                <h2
                  style={{
                    fontFamily: "Playfair Display,serif",
                    fontSize: "2rem",
                    color: "var(--blue-deep)",
                    marginBottom: "2rem",
                  }}
                >
                  Awards &amp; Accreditations
                </h2>
                <div className="row g-3">
                  {awards.map((a) => (
                    <div key={a.title} className="col-md-6">
                      <div className={styles.awardCard}>
                        <div className={styles.awardIcon}>{a.icon}</div>
                        <div>
                          <div className={styles.awardTitle}>{a.title}</div>
                          <div className={styles.awardYear}>{a.year}</div>
                          <div className={styles.awardDesc}>{a.desc}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-4">
                <div className="section-label mb-2">What Drives Us</div>
                <h2
                  style={{
                    fontFamily: "Playfair Display,serif",
                    fontSize: "2rem",
                    color: "var(--blue-deep)",
                    marginBottom: "2rem",
                  }}
                >
                  Our Core Values
                </h2>
                <div className={styles.valuesList}>
                  {values.map((v) => (
                    <div key={v.name} className={styles.valueItem}>
                      <div
                        className={styles.valueDot}
                        style={{ background: v.bg }}
                      >
                        {v.icon}
                      </div>
                      <div>
                        <div className={styles.valueName}>{v.name}</div>
                        <div className={styles.valueDesc}>{v.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
