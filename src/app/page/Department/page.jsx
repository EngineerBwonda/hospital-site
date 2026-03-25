"use client";

// import PageHero from "../../components/PageHero";
import Link from "next/link";
import styles from "./style.module.css";
import Hero from "@/app/component/Hero/page";

const departments = [
  {
    icon: "bi-heart-pulse-fill",
    bg: "#e3f2fd",
    ic: "#1565c0",
    name: "Cardiology",
    floor: "Floor 3",
    doctors: 8,
    beds: 24,
    desc: "Advanced cardiac care with catheterisation labs, cardiac ICU, and echo suites delivering round-the-clock heart services.",
    services: [
      "Interventional Cardiology",
      "Cardiac Imaging",
      "Heart Failure Clinic",
      "Electrophysiology",
    ],
  },
  {
    icon: "bi-activity",
    bg: "#ede7f6",
    ic: "#5e35b1",
    name: "Neurology & Neurosurgery",
    floor: "Floor 4",
    doctors: 9,
    beds: 18,
    desc: "Comprehensive brain and spine care featuring a dedicated stroke unit, neurosurgery theatre and neuro-rehabilitation programme.",
    services: [
      "Stroke Unit",
      "Epilepsy Clinic",
      "Spine Surgery",
      "Neurophysiology",
    ],
  },
  {
    icon: "bi-person-hearts",
    bg: "#fff3e0",
    ic: "#e65100",
    name: "Pediatrics",
    floor: "Floor 1",
    doctors: 10,
    beds: 30,
    desc: "Child-centred care in a playful environment — from Level III NICU for premature babies to adolescent medicine.",
    services: [
      "NICU Level III",
      "Paediatric ICU",
      "Child Surgery",
      "Adolescent Clinic",
    ],
  },
  {
    icon: "bi-bandaid-fill",
    bg: "#e8f5e9",
    ic: "#2e7d32",
    name: "Orthopedics",
    floor: "Floor 2",
    doctors: 7,
    beds: 20,
    desc: "State-of-the-art bone and joint care with dedicated orthopaedic theatres and a sports injury rehabilitation gym.",
    services: [
      "Joint Replacement",
      "Sports Medicine",
      "Spine Surgery",
      "Physiotherapy",
    ],
  },
  {
    icon: "bi-gender-female",
    bg: "#fdf0ff",
    ic: "#7b1fa2",
    name: "Obstetrics & Gynaecology",
    floor: "Floor 5",
    doctors: 9,
    beds: 28,
    desc: "Holistic women's health from antenatal clinics and labour suites to advanced laparoscopic gynaecological surgery.",
    services: [
      "Labour Suite",
      "Prenatal Clinic",
      "Laparoscopy",
      "Fertility Centre",
    ],
  },
  {
    icon: "bi-capsule-pill",
    bg: "#fff8e1",
    ic: "#f57f17",
    name: "Oncology",
    floor: "Floor 6",
    doctors: 6,
    beds: 16,
    desc: "Multidisciplinary cancer care combining chemotherapy suites, a linear accelerator for radiation therapy and a palliative care unit.",
    services: [
      "Chemotherapy Suite",
      "Radiation Oncology",
      "Tumour Board",
      "Palliative Care",
    ],
  },
  {
    icon: "bi-clipboard2-pulse-fill",
    bg: "#fbe9e7",
    ic: "#c62828",
    name: "Emergency & Trauma",
    floor: "Ground Floor",
    doctors: 15,
    beds: 12,
    desc: "24-hour emergency care with rapid resuscitation bays, a dedicated trauma theatre and direct CT imaging access.",
    services: ["Resus Bay", "Trauma Surgery", "Triage Clinic", "Toxicology"],
  },
  {
    icon: "bi-lungs-fill",
    bg: "#fce4ec",
    ic: "#ad1457",
    name: "Pulmonology",
    floor: "Floor 3",
    doctors: 5,
    beds: 14,
    desc: "Respiratory excellence covering bronchoscopy suites, a sleep laboratory and a dedicated COPD management programme.",
    services: ["Bronchoscopy", "Sleep Lab", "Pulmonary Rehab", "Critical Care"],
  },
];

const floors = [
  {
    floor: "G",
    label: "Ground Floor — Emergency & Trauma, Radiology, Pharmacy",
  },
  { floor: "1", label: "Floor 1 — Pediatrics, NICU, Outpatient Clinics" },
  { floor: "2", label: "Floor 2 — Orthopedics, Physiotherapy, Day Surgery" },
  { floor: "3", label: "Floor 3 — Cardiology, Pulmonology, Cardiac ICU" },
  { floor: "4", label: "Floor 4 — Neurology, Neurosurgery, Neuro-Rehab" },
  {
    floor: "5",
    label: "Floor 5 — Obs & Gynae, Labour Suite, Fertility Centre",
  },
  {
    floor: "6",
    label: "Floor 6 — Oncology, Radiation Therapy, Palliative Care",
  },
];

export default function DepartmentsPage() {
  return (
    <>
      <main>
        <Hero
          label="Our Facilities"
          icon="bi-building-fill-cross"
          title="Hospital Departments"
          desc="8 specialised departments across 6 floors, each equipped with cutting-edge technology and led by world-class consultants."
          breadcrumb="Departments"
        />

        <section className={styles.section}>
          <div className="container">
            <div className="row g-4">
              {departments.map((dept) => (
                <div key={dept.name} className="col-md-6 col-lg-4">
                  <div className={styles.deptCard}>
                    <div className={styles.deptHeader}>
                      <div
                        className={styles.iconBox}
                        style={{ background: dept.bg }}
                      >
                        <i
                          className={`bi ${dept.icon}`}
                          style={{ color: dept.ic }}
                        ></i>
                      </div>
                      <div>
                        <div className={styles.deptTitle}>{dept.name}</div>
                        <div className={styles.deptLocation}>
                          <i
                            className="bi bi-geo-alt-fill"
                            style={{ color: "var(--blue-bright)" }}
                          ></i>
                          {dept.floor}
                        </div>
                      </div>
                    </div>

                    <div className={styles.deptBody}>
                      <p className={styles.deptDesc}>{dept.desc}</p>
                      <div className={styles.statRow}>
                        <div className={styles.statItem}>
                          <div className={styles.statNum}>{dept.doctors}</div>
                          <div className={styles.statLbl}>Specialists</div>
                        </div>
                        <div className={styles.statItem}>
                          <div className={styles.statNum}>{dept.beds}</div>
                          <div className={styles.statLbl}>Beds</div>
                        </div>
                        <div className={styles.statItem}>
                          <div className={styles.statNum}>24/7</div>
                          <div className={styles.statLbl}>Availability</div>
                        </div>
                      </div>
                      <div className={styles.services}>
                        {dept.services.map((s) => (
                          <span key={s} className={styles.serviceTag}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={styles.deptFoot}>
                      <Link href="/appointment" className={styles.btnPrimary}>
                        Book Appointment
                      </Link>
                      <Link href="/doctors" className={styles.btnSecondary}>
                        Our Doctors
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Floor Directory */}
            <div className={styles.mapSection}>
              <div className={styles.mapCard}>
                <div style={{ flex: 1 }}>
                  <h3>Hospital Floor Directory</h3>
                  <p>
                    Find your department quickly with our floor-by-floor guide.
                    Our reception team is always available to assist.
                  </p>
                  <Link href="/appointment" className="btn-cream">
                    <i className="bi bi-calendar-check me-2"></i>
                    Book a Visit
                  </Link>
                </div>
                <div style={{ flex: 1 }}>
                  <ul className={styles.floorList}>
                    {floors.map((f) => (
                      <li key={f.floor} className={styles.floorItem}>
                        <span className={styles.floorBadge}>{f.floor}</span>
                        {f.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
