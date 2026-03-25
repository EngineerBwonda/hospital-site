"use client";

// import PageHero from "../../components/PageHero";
import Link from "next/link";
import styles from "./style.module.css";
import Hero from "@/app/component/Hero/page";

const doctors = [
  {
    name: "Dr. Amina Wanjiru",
    specialty: "Cardiologist",
    exp: "18 yrs",
    rating: "4.9",
    patients: "3.2K",
    emoji: "👩‍⚕️",
    bg: "linear-gradient(135deg,#0d3b6e,#1565c0)",
    tags: ["Echocardiography", "Angioplasty", "Heart Failure"],
    bio: "Fellowship-trained cardiologist with expertise in interventional procedures and heart failure management.",
    dept: "Cardiology",
  },
  {
    name: "Dr. James Otieno",
    specialty: "Neurologist",
    exp: "14 yrs",
    rating: "4.8",
    patients: "2.1K",
    emoji: "👨‍⚕️",
    bg: "linear-gradient(135deg,#1a237e,#3949ab)",
    tags: ["Stroke Care", "Epilepsy", "Headache"],
    bio: "Specialist in stroke management and epilepsy with advanced training in neurophysiology.",
    dept: "Neurology",
  },
  {
    name: "Dr. Fatuma Hassan",
    specialty: "Pediatrician",
    exp: "11 yrs",
    rating: "5.0",
    patients: "5.1K",
    emoji: "👩‍⚕️",
    bg: "linear-gradient(135deg,#004d40,#00897b)",
    tags: ["Neonatal Care", "Child Nutrition", "Vaccinations"],
    bio: "Passionate about child wellness with subspecialty training in neonatal intensive care.",
    dept: "Pediatrics",
  },
  {
    name: "Dr. Peter Kamau",
    specialty: "Orthopedic Surgeon",
    exp: "22 yrs",
    rating: "4.9",
    patients: "4.8K",
    emoji: "👨‍⚕️",
    bg: "linear-gradient(135deg,#4a148c,#7b1fa2)",
    tags: ["Joint Replacement", "Arthroscopy", "Spine"],
    bio: "Senior orthopedic surgeon specialising in complex joint replacement and minimally invasive spine surgery.",
    dept: "Orthopedics",
  },
  {
    name: "Dr. Grace Njeri",
    specialty: "Gynaecologist",
    exp: "15 yrs",
    rating: "4.9",
    patients: "3.9K",
    emoji: "👩‍⚕️",
    bg: "linear-gradient(135deg,#880e4f,#c2185b)",
    tags: ["Laparoscopy", "Prenatal Care", "Fertility"],
    bio: "Expert in minimally invasive gynaecological surgery and high-risk obstetrics.",
    dept: "Gynecology",
  },
  {
    name: "Dr. Samuel Mwangi",
    specialty: "Oncologist",
    exp: "19 yrs",
    rating: "4.8",
    patients: "1.7K",
    emoji: "👨‍⚕️",
    bg: "linear-gradient(135deg,#b71c1c,#e53935)",
    tags: ["Chemotherapy", "Immunotherapy", "Palliative"],
    bio: "Oncology specialist with expertise in haematological malignancies and solid tumour management.",
    dept: "Oncology",
  },
  {
    name: "Dr. Aisha Oduya",
    specialty: "Pulmonologist",
    exp: "12 yrs",
    rating: "4.7",
    patients: "2.3K",
    emoji: "👩‍⚕️",
    bg: "linear-gradient(135deg,#0d47a1,#1976d2)",
    tags: ["COPD", "Asthma", "Sleep Apnoea"],
    bio: "Respiratory medicine specialist with advanced training in sleep-disordered breathing and critical care.",
    dept: "Pulmonology",
  },
  {
    name: "Dr. Brian Oloo",
    specialty: "Emergency Physician",
    exp: "10 yrs",
    rating: "4.9",
    patients: "8.4K",
    emoji: "👨‍⚕️",
    bg: "linear-gradient(135deg,#e65100,#f57c00)",
    tags: ["Trauma", "Resuscitation", "Critical Care"],
    bio: "Board-certified emergency physician with subspecialty training in trauma and disaster medicine.",
    dept: "Emergency Medicine",
  },
];

export default function DoctorsPage() {
  return (
    <>
      <main>
        <Hero
          label="Expert Physicians"
          icon="bi-person-badge-fill"
          title="Meet Our Specialists"
          desc="Over 120 board-certified doctors across 40+ specialties, committed to evidence-based, compassionate care."
          breadcrumb="Doctors"
        />

        <section className={styles.section}>
          <div className="container">
            {/* Search & Filter */}
            <div className={styles.searchBar}>
              <div className={styles.searchWrap}>
                <i className={`bi bi-search ${styles.searchIcon}`}></i>
                <input
                  type="text"
                  className={styles.searchInput}
                  placeholder="Search by name or specialty..."
                />
              </div>
              <select className={styles.filterSelect}>
                <option value="">All Departments</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Pediatrics</option>
                <option>Orthopedics</option>
                <option>Gynecology</option>
                <option>Oncology</option>
                <option>Emergency Medicine</option>
              </select>
              <select className={styles.filterSelect}>
                <option value="">Sort By</option>
                <option>Highest Rated</option>
                <option>Most Experienced</option>
                <option>Most Patients</option>
              </select>
            </div>

            {/* Doctor Cards */}
            <div className="row g-4">
              {doctors.map((doc) => (
                <div key={doc.name} className="col-sm-6 col-lg-3">
                  <div className={styles.card}>
                    <div
                      className={styles.avatarArea}
                      style={{ background: doc.bg }}
                    >
                      {doc.emoji}
                      <div className={styles.availBadge}>
                        <span className={styles.dot}></span> Available
                      </div>
                    </div>
                    <div className={styles.body}>
                      <div className={styles.name}>{doc.name}</div>
                      <div className={styles.specialty}>{doc.specialty}</div>
                      <div className={styles.meta}>
                        <span className={styles.metaItem}>
                          <i
                            className="bi bi-briefcase-fill"
                            style={{ color: "var(--blue-bright)" }}
                          ></i>
                          {doc.exp}
                        </span>
                        <span className={styles.metaItem}>
                          <i
                            className="bi bi-star-fill"
                            style={{ color: "var(--gold)" }}
                          ></i>
                          {doc.rating}
                        </span>
                        <span className={styles.metaItem}>
                          <i
                            className="bi bi-people-fill"
                            style={{ color: "#43a047" }}
                          ></i>
                          {doc.patients} patients
                        </span>
                      </div>
                      <p className={styles.bio}>{doc.bio}</p>
                      <div className={styles.tags}>
                        {doc.tags.map((t) => (
                          <span key={t} className={styles.tag}>
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className={styles.actions}>
                        <Link href="/appointment" className={styles.btnBook}>
                          Book Appointment
                        </Link>
                        <a href="#" className={styles.btnProfile}>
                          <i className="bi bi-person"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
