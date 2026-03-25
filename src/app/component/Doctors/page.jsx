import styles from "./style.module.css";

const doctors = [
  {
    name: "Dr. Amina Wanjiru",
    specialty: "Cardiologist",
    exp: "18 yrs",
    rating: "4.9",
    emoji: "👩‍⚕️",
    bg: "linear-gradient(135deg,#0d3b6e,#1565c0)",
  },
  {
    name: "Dr. James Otieno",
    specialty: "Neurologist",
    exp: "14 yrs",
    rating: "4.8",
    emoji: "👨‍⚕️",
    bg: "linear-gradient(135deg,#1a237e,#3949ab)",
  },
  {
    name: "Dr. Fatuma Hassan",
    specialty: "Pediatrician",
    exp: "11 yrs",
    rating: "5.0",
    emoji: "👩‍⚕️",
    bg: "linear-gradient(135deg,#004d40,#00897b)",
  },
  {
    name: "Dr. Peter Kamau",
    specialty: "Orthopedic Surgeon",
    exp: "22 yrs",
    rating: "4.9",
    emoji: "👨‍⚕️",
    bg: "linear-gradient(135deg,#4a148c,#7b1fa2)",
  },
];

export default function Doctors() {
  return (
    <section className={styles.section} id="doctors">
      <div className="container">
        <div className={styles.sectionHead}>
          <div className="section-label">Our Team</div>
          <h2 className={styles.sectionTitle}>Meet Our Expert Doctors</h2>
          <p className={styles.sectionDesc}>
            Board-certified specialists with decades of experience, committed to
            delivering the very best care.
          </p>
        </div>

        <div className="row g-4">
          {doctors.map((doc) => (
            <div key={doc.name} className="col-sm-6 col-lg-3">
              <div className={styles.card}>
                <div className={styles.avatarWrap}>
                  <div className={styles.avatar} style={{ background: doc.bg }}>
                    {doc.emoji}
                  </div>
                  <div className={styles.availBadge}>
                    <span className={styles.dot}></span>
                    Available
                  </div>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.doctorName}>{doc.name}</div>
                  <div className={styles.specialty}>{doc.specialty}</div>
                  <div className={styles.meta}>
                    <span className={styles.metaItem}>
                      <i
                        className="bi bi-briefcase-fill"
                        style={{ color: "var(--blue-bright)" }}
                      ></i>
                      {doc.exp} exp
                    </span>
                    <span className={styles.metaItem}>
                      <i
                        className="bi bi-star-fill"
                        style={{ color: "var(--gold)" }}
                      ></i>
                      {doc.rating}
                    </span>
                  </div>
                  <a href="#appointment" className={styles.bookBtn}>
                    Book Consultation
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
