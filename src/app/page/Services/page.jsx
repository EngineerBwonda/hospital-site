"use client";

// import PageHero from "../../components/PageHero";
import Link from "next/link";
import styles from "./style.module.css";
import Hero from "@/app/component/Hero/page";

const services = [
  {
    icon: "bi-heart-pulse-fill",
    bg: "#e3f2fd",
    iconColor: "#1565c0",
    title: "Cardiology",
    desc: "Comprehensive diagnosis and treatment of heart conditions using the latest interventional cardiology techniques and imaging technologies.",
    tags: ["Echocardiography", "Angioplasty", "Pacemaker", "Heart Surgery"],
    doctors: 8,
    category: "Medical",
  },
  {
    icon: "bi-activity",
    bg: "#ede7f6",
    iconColor: "#5e35b1",
    title: "Neurology",
    desc: "Expert care for disorders of the brain, spinal cord and peripheral nervous system with advanced neuroimaging and electrophysiology.",
    tags: ["EEG", "MRI Guided", "Stroke Care", "Epilepsy"],
    doctors: 6,
    category: "Medical",
  },
  {
    icon: "bi-person-hearts",
    bg: "#fff3e0",
    iconColor: "#e65100",
    title: "Pediatrics",
    desc: "Dedicated child health services from newborn care to adolescent medicine in a warm, child-friendly environment.",
    tags: ["Neonatal ICU", "Vaccination", "Growth Monitoring", "Child Surgery"],
    doctors: 10,
    category: "Medical",
  },
  {
    icon: "bi-lungs-fill",
    bg: "#fce4ec",
    iconColor: "#c62828",
    title: "Pulmonology",
    desc: "Specialised respiratory care covering asthma, COPD, pneumonia, sleep apnoea and lung cancer management.",
    tags: ["Spirometry", "Bronchoscopy", "Sleep Study", "Oxygen Therapy"],
    doctors: 5,
    category: "Medical",
  },
  {
    icon: "bi-bandaid-fill",
    bg: "#e8f5e9",
    iconColor: "#2e7d32",
    title: "Orthopedics",
    desc: "Full spectrum of bone, joint and musculoskeletal care including minimally invasive joint replacement and sports medicine.",
    tags: [
      "Joint Replacement",
      "Arthroscopy",
      "Spine Surgery",
      "Sports Injury",
    ],
    doctors: 7,
    category: "Surgical",
  },
  {
    icon: "bi-eye-fill",
    bg: "#e0f7fa",
    iconColor: "#00838f",
    title: "Ophthalmology",
    desc: "Complete eye health services from routine exams to cataract surgery, retinal care and advanced LASIK vision correction.",
    tags: ["Cataract Surgery", "LASIK", "Glaucoma", "Retinal Care"],
    doctors: 4,
    category: "Surgical",
  },
  {
    icon: "bi-gender-female",
    bg: "#fdf0ff",
    iconColor: "#7b1fa2",
    title: "Gynecology",
    desc: "Comprehensive women's health encompassing prenatal care, fertility treatment, minimally invasive surgery and menopause management.",
    tags: ["Prenatal Care", "Laparoscopy", "Fertility", "Hysteroscopy"],
    doctors: 9,
    category: "Medical",
  },
  {
    icon: "bi-capsule-pill",
    bg: "#fff8e1",
    iconColor: "#f57f17",
    title: "Oncology",
    desc: "Multidisciplinary cancer care with chemotherapy, radiation, immunotherapy and surgical oncology under one roof.",
    tags: ["Chemotherapy", "Radiation", "Immunotherapy", "Palliative Care"],
    doctors: 6,
    category: "Medical",
  },
  {
    icon: "bi-droplet-fill",
    bg: "#fbe9e7",
    iconColor: "#bf360c",
    title: "Nephrology",
    desc: "Expert kidney care including chronic kidney disease management, dialysis and pre/post-transplant support.",
    tags: ["Haemodialysis", "Peritoneal Dialysis", "Biopsy", "Transplant Care"],
    doctors: 4,
    category: "Medical",
  },
  {
    icon: "bi-clipboard2-pulse-fill",
    bg: "#e8eaf6",
    iconColor: "#283593",
    title: "Emergency Medicine",
    desc: "24-hour emergency and trauma care with rapid triage, resuscitation bays and a dedicated trauma surgery team.",
    tags: ["Trauma Care", "Resuscitation", "Toxicology", "Acute Medicine"],
    doctors: 15,
    category: "Emergency",
  },
  {
    icon: "bi-thermometer-sun",
    bg: "#f3e5f5",
    iconColor: "#6a1b9a",
    title: "Dermatology",
    desc: "Diagnosis and treatment of skin, hair and nail conditions including cosmetic dermatology and skin cancer screening.",
    tags: [
      "Skin Cancer Screen",
      "Laser Therapy",
      "Psoriasis",
      "Acne Treatment",
    ],
    doctors: 3,
    category: "Medical",
  },
  {
    icon: "bi-tooth",
    bg: "#e1f5fe",
    iconColor: "#0277bd",
    title: "Dental & Maxillofacial",
    desc: "Comprehensive oral health care including implants, orthodontics, oral surgery and maxillofacial reconstruction.",
    tags: ["Dental Implants", "Orthodontics", "Oral Surgery", "Root Canal"],
    doctors: 5,
    category: "Surgical",
  },
];

export default function ServicesPage() {
  return (
    <>
      <main>
        <Hero
          label="Comprehensive Care"
          icon="bi-grid-3x3-gap-fill"
          title="Our Medical Services"
          desc="12 specialised departments, 80+ board-certified physicians and the latest technology — all working together for your health."
          breadcrumb="Services"
        />

        <section className={styles.section}>
          <div className="container">
            {/* Filter bar */}
            <div className={styles.filterBar}>
              {["All", "Medical", "Surgical", "Emergency"].map((cat) => (
                <button
                  key={cat}
                  className={`${styles.filterBtn} ${cat === "All" ? styles.filterBtnActive : ""}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Cards grid */}
            <div className="row g-4">
              {services.map((s) => (
                <div key={s.title} className="col-md-6 col-lg-4">
                  <div className={styles.card}>
                    <div className={styles.cardTop}>
                      <div
                        className={styles.iconWrap}
                        style={{ background: s.bg }}
                      >
                        <i
                          className={`bi ${s.icon}`}
                          style={{ color: s.iconColor }}
                        ></i>
                      </div>
                      <h3 className={styles.cardTitle}>{s.title}</h3>
                      <p className={styles.cardDesc}>{s.desc}</p>
                      <div className={styles.tagList}>
                        {s.tags.map((t) => (
                          <span key={t} className={styles.tag}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className={styles.cardFoot}>
                      <span className={styles.footInfo}>
                        <i
                          className="bi bi-person-fill"
                          style={{ color: "var(--blue-bright)" }}
                        ></i>
                        {s.doctors} Specialists
                      </span>
                      <Link href="/appointment" className={styles.learnLink}>
                        Book Now <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Banner */}
            <div className={styles.ctaBanner}>
              <h3>Not sure which service you need?</h3>
              <p>
                Our general practitioners will assess your condition and refer
                you to the right specialist.
              </p>
              <Link href="/appointment" className="btn-cream">
                <i className="bi bi-calendar-check me-2"></i>
                Book a General Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
