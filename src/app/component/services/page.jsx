import styles from "./style.module.css";

const services = [
  {
    icon: "bi-heart-pulse-fill",
    color: "#e3f2fd",
    iconColor: "#1565c0",
    title: "Cardiology",
    desc: "Comprehensive heart care with advanced diagnostics, interventional procedures, and cardiac rehabilitation.",
  },
  {
    icon: "bi-activity",
    color: "#e8f5e9",
    iconColor: "#2e7d32",
    title: "Neurology",
    desc: "Expert management of brain, spine, and nervous system disorders by certified neurologists.",
  },
  {
    icon: "bi-person-hearts",
    color: "#fff3e0",
    iconColor: "#e65100",
    title: "Pediatrics",
    desc: "Gentle, compassionate care for infants, children, and adolescents in a child-friendly environment.",
  },
  {
    icon: "bi-lungs-fill",
    color: "#fce4ec",
    iconColor: "#c62828",
    title: "Pulmonology",
    desc: "Diagnosis and treatment of respiratory conditions including asthma, COPD, and sleep disorders.",
  },
  {
    icon: "bi-bandaid-fill",
    color: "#ede7f6",
    iconColor: "#4527a0",
    title: "Orthopedics",
    desc: "Bone, joint, and muscle care — from sports injuries to joint replacement surgeries.",
  },
  {
    icon: "bi-eye-fill",
    color: "#e0f7fa",
    iconColor: "#00838f",
    title: "Ophthalmology",
    desc: "Complete eye care services including cataract surgery, LASIK, and diabetic eye screening.",
  },
  {
    icon: "bi-gender-female",
    color: "#fdf0ff",
    iconColor: "#7b1fa2",
    title: "Gynecology",
    desc: "Holistic women's health services from prenatal care to minimally invasive gynecological surgery.",
  },
  {
    icon: "bi-capsule-pill",
    color: "#fff8e1",
    iconColor: "#f57f17",
    title: "Oncology",
    desc: "State-of-the-art cancer diagnosis, chemotherapy, radiation therapy, and supportive care.",
  },
];

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className="container">
        <div className={styles.sectionHead}>
          <div className="section-label">What We Offer</div>
          <h2 className={styles.sectionTitle}>Specialised Medical Services</h2>
          <p className={styles.sectionDesc}>
            From routine wellness checks to complex procedures, our
            multidisciplinary teams provide the full spectrum of care.
          </p>
        </div>

        <div className="row g-4">
          {services.map((s) => (
            <div key={s.title} className="col-sm-6 col-lg-3">
              <div className={styles.card}>
                <div
                  className={styles.iconWrap}
                  style={{ background: s.color }}
                >
                  <i
                    className={`bi ${s.icon}`}
                    style={{ color: s.iconColor }}
                  ></i>
                </div>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
                <a href="#" className={styles.cardLink}>
                  Learn more <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
