import styles from "./style.module.css";

const features = [
  {
    icon: "🏥",
    title: "24/7 Emergency Care",
    desc: "Round-the-clock emergency services with rapid response teams always on standby.",
  },
  {
    icon: "🔬",
    title: "Advanced Diagnostics",
    desc: "Cutting-edge MRI, CT, and lab technology for accurate, fast diagnosis.",
  },
  {
    icon: "🩺",
    title: "Personalised Treatment",
    desc: "Tailored care plans crafted by multidisciplinary teams around your unique needs.",
  },
  {
    icon: "🏆",
    title: "Award-Winning Care",
    desc: "Recognised nationally for clinical excellence and patient satisfaction.",
  },
];

const testimonials = [
  {
    quote:
      "The cardiology team here saved my father's life. The care and professionalism were beyond anything we expected. Truly exceptional people.",
    name: "Grace Muthoni",
    role: "Patient, Cardiology Dept",
    avatar: "👩🏾",
    bg: "#e3f2fd",
  },
  {
    quote:
      "I delivered my twins here and the gynecology team made the whole experience peaceful and safe. The nurses are incredibly kind and attentive.",
    name: "Aisha Abdallah",
    role: "Patient, Maternity Ward",
    avatar: "👩🏽",
    bg: "#fce4ec",
  },
  {
    quote:
      "After my knee replacement, the rehabilitation program was world-class. I'm back on the football pitch at 58. I can't thank them enough.",
    name: "Robert Kipchoge",
    role: "Patient, Orthopedics",
    avatar: "👨🏾",
    bg: "#e8f5e9",
  },
];

export default function Trust() {
  return (
    <section className={styles.section} id="about">
      <div className="container position-relative">
        <div className={styles.sectionHead}>
          <div className={`section-label ${styles.sectionLabel}`}>
            Why Choose Us
          </div>
          <h2 className={styles.sectionTitle}>Care You Can Truly Trust</h2>
          <p className={styles.sectionDesc}>
            We combine clinical expertise with heartfelt compassion to deliver
            outcomes that matter to you and your family.
          </p>
        </div>

        {/* Features */}
        <div className="row g-4 mb-5">
          {features.map((f) => (
            <div key={f.title} className="col-sm-6 col-lg-3">
              <div className={styles.featureCard}>
                <span className={styles.featureIcon}>{f.icon}</span>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="row g-4">
          {testimonials.map((t) => (
            <div key={t.name} className="col-md-4">
              <div className={styles.testimonialCard}>
                <div className={styles.stars}>★★★★★</div>
                {/* <p className={styles.quote}>"{t.quote}"</p> */}
                <div className={styles.reviewer}>
                  <div
                    className={styles.reviewerAvatar}
                    style={{ background: t.bg }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className={styles.reviewerName}>{t.name}</div>
                    <div className={styles.reviewerRole}>{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
