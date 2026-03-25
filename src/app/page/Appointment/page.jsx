"use client";
import React, { useState } from "react";

// import PageHero from "../../components/PageHero";
import styles from "./style.module.css";
import Hero from "@/app/component/Hero/page";

const doctors = [
  { name: "Dr. A. Wanjiru", spec: "Cardiologist", emoji: "👩‍⚕️" },
  { name: "Dr. J. Otieno", spec: "Neurologist", emoji: "👨‍⚕️" },
  { name: "Dr. F. Hassan", spec: "Pediatrician", emoji: "👩‍⚕️" },
  { name: "Dr. P. Kamau", spec: "Orthopedic", emoji: "👨‍⚕️" },
  { name: "Dr. G. Njeri", spec: "Gynaecologist", emoji: "👩‍⚕️" },
  { name: "Dr. S. Mwangi", spec: "Oncologist", emoji: "👨‍⚕️" },
];

const timeSlots = [
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
];

const takenSlots = ["9:00 AM", "10:00 AM", "1:30 PM", "3:00 PM"];

const consultTypes = [
  { icon: "🏥", name: "In-Person Visit", desc: "Come to the hospital" },
  { icon: "💻", name: "Video Consult", desc: "Online via secure link" },
  { icon: "📞", name: "Phone Call", desc: "Voice consultation" },
];

const steps = ["Patient Info", "Choose Doctor", "Date & Time", "Confirm"];

export default function AppointmentPage() {
  const [step, setStep] = useState(0);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedType, setSelectedType] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const next = () => setStep((s) => Math.min(s + 1, 3));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  if (submitted) {
    return (
      <>
        <main>
          <Hero
            label="Book Appointment"
            icon="bi-calendar-check-fill"
            title="Book a Consultation"
            desc="Schedule your visit with any of our 120+ board-certified specialists."
            breadcrumb="Appointment"
          />
          <section className={styles.section}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                  <div className={styles.formCard}>
                    <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>
                      ✅
                    </div>
                    <h2
                      style={{
                        fontFamily: "Playfair Display,serif",
                        color: "var(--blue-deep)",
                        marginBottom: "0.75rem",
                      }}
                    >
                      Appointment Confirmed!
                    </h2>
                    <p
                      style={{
                        color: "var(--text-soft)",
                        marginBottom: "2rem",
                        lineHeight: "1.7",
                      }}
                    >
                      Your appointment has been booked successfully. A
                      confirmation SMS and email will be sent to you shortly.
                      Please arrive 15 minutes early.
                    </p>
                    <div
                      style={{
                        background: "var(--blue-pale)",
                        borderRadius: "12px",
                        padding: "1.5rem",
                        marginBottom: "2rem",
                        textAlign: "left",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "0.5rem",
                          alignItems: "center",
                          marginBottom: "0.5rem",
                        }}
                      >
                        <i
                          className="bi bi-person-fill"
                          style={{ color: "var(--blue-mid)" }}
                        ></i>
                        <span
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            color: "var(--blue-deep)",
                          }}
                        >
                          Booking Reference:{" "}
                          <span style={{ color: "var(--gold)" }}>
                            MCH-2026-8821
                          </span>
                        </span>
                      </div>
                      <div
                        style={{
                          fontSize: "0.85rem",
                          color: "var(--text-mid)",
                        }}
                      >
                        Present this reference at reception.
                      </div>
                    </div>
                    {/* <a href="/" className="btn-primary-custom">
                      Back to Home
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }

  return (
    <>
      <main>
        <Hero
          label="Book Appointment"
          icon="bi-calendar-check-fill"
          title="Book a Consultation"
          desc="Schedule your visit with any of our 120+ board-certified specialists in just a few steps."
          breadcrumb="Appointment"
        />

        <section className={styles.section}>
          <div className="container">
            <div className="row g-5">
              {/* FORM COLUMN */}
              <div className="col-lg-8">
                {/* Stepper */}
                <div className={styles.stepper}>
                  {steps.map((s, i) => (
                    <React.Fragment key={s}>
                      <div
                        className={`${styles.step} ${i === step ? styles.stepActive : ""} ${i < step ? styles.stepDone : ""}`}
                      >
                        <div className={styles.stepDot}>
                          {i < step ? (
                            <i className="bi bi-check-lg"></i>
                          ) : (
                            i + 1
                          )}
                        </div>
                        <span className={styles.stepLabel}>{s}</span>
                      </div>
                      {i < steps.length - 1 && (
                        <div
                          key={`line-${i}`}
                          className={styles.stepLine}
                        ></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <div className={styles.formCard}>
                  {/* STEP 1: Patient Info */}
                  {step === 0 && (
                    <>
                      <div className={styles.formTitle}>Your Information</div>
                      <div className={styles.formSubtitle}>
                        Please fill in your personal details below.
                      </div>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>
                              First Name{" "}
                              <span className={styles.required}>*</span>
                            </label>
                            <input
                              type="text"
                              className={styles.formControl}
                              placeholder="e.g. Jane"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>
                              Last Name{" "}
                              <span className={styles.required}>*</span>
                            </label>
                            <input
                              type="text"
                              className={styles.formControl}
                              placeholder="e.g. Mwangi"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>
                              Phone Number{" "}
                              <span className={styles.required}>*</span>
                            </label>
                            <input
                              type="tel"
                              className={styles.formControl}
                              placeholder="+254 7XX XXX XXX"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>
                              Email Address
                            </label>
                            <input
                              type="email"
                              className={styles.formControl}
                              placeholder="your@email.com"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>
                              Date of Birth{" "}
                              <span className={styles.required}>*</span>
                            </label>
                            <input type="date" className={styles.formControl} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>Gender</label>
                            <select className={styles.formControl}>
                              <option value="">Select gender</option>
                              <option>Male</option>
                              <option>Female</option>
                              <option>Prefer not to say</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>
                              ID / Passport Number
                            </label>
                            <input
                              type="text"
                              className={styles.formControl}
                              placeholder="National ID or Passport"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>
                              Reason for Visit{" "}
                              <span className={styles.required}>*</span>
                            </label>
                            <textarea
                              className={styles.formControl}
                              rows={3}
                              placeholder="Briefly describe your symptoms or reason for visit..."
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>
                              Insurance Provider
                            </label>
                            <select className={styles.formControl}>
                              <option value="">
                                Select insurer (optional)
                              </option>
                              <option>NHIF</option>
                              <option>AAR Insurance</option>
                              <option>Jubilee Health</option>
                              <option>Madison Insurance</option>
                              <option>CIC Insurance</option>
                              <option>Self Pay</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>
                              Insurance Number
                            </label>
                            <input
                              type="text"
                              className={styles.formControl}
                              placeholder="Policy / Member number"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* STEP 2: Choose Doctor */}
                  {step === 1 && (
                    <>
                      <div className={styles.formTitle}>
                        Choose a Specialist
                      </div>
                      <div className={styles.formSubtitle}>
                        Select the department and preferred doctor for your
                        consultation.
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>
                          Department <span className={styles.required}>*</span>
                        </label>
                        <select className={styles.formControl}>
                          <option value="">Select a department...</option>
                          <option>Cardiology</option>
                          <option>Neurology</option>
                          <option>Pediatrics</option>
                          <option>Orthopedics</option>
                          <option>Gynecology</option>
                          <option>Oncology</option>
                          <option>Pulmonology</option>
                          <option>Emergency Medicine</option>
                          <option>General Medicine</option>
                        </select>
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>
                          Select Doctor
                        </label>
                        <div className={styles.doctorPick}>
                          {doctors.map((d, i) => (
                            <div
                              key={d.name}
                              className={`${styles.doctorOption} ${selectedDoctor === i ? styles.doctorOptionSelected : ""}`}
                              onClick={() => setSelectedDoctor(i)}
                            >
                              <div className={styles.docEmoji}>{d.emoji}</div>
                              <div className={styles.docName}>{d.name}</div>
                              <div className={styles.docSpec}>{d.spec}</div>
                            </div>
                          ))}
                        </div>
                        {/* <div className={styles.formHint}>Can't find a specific doctor? We'll assign the best available specialist.</div> */}
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>
                          Consultation Type{" "}
                          <span className={styles.required}>*</span>
                        </label>
                        <div className={styles.consultTypes}>
                          {consultTypes.map((c, i) => (
                            <div
                              key={c.name}
                              className={`${styles.consultType} ${selectedType === i ? styles.consultTypeSelected : ""}`}
                              onClick={() => setSelectedType(i)}
                            >
                              <div className={styles.consultIcon}>{c.icon}</div>
                              <div className={styles.consultName}>{c.name}</div>
                              <div className={styles.consultDesc}>{c.desc}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {/* STEP 3: Date & Time */}
                  {step === 2 && (
                    <>
                      <div className={styles.formTitle}>
                        Pick a Date &amp; Time
                      </div>
                      <div className={styles.formSubtitle}>
                        Choose a convenient appointment slot.
                      </div>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>
                              Preferred Date{" "}
                              <span className={styles.required}>*</span>
                            </label>
                            <input type="date" className={styles.formControl} />
                            <div className={styles.formHint}>
                              OPD is open Mon–Sat, 8:00 AM – 5:00 PM
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className={styles.formGroup}>
                            <label className={styles.formLabel}>
                              Alternate Date
                            </label>
                            <input type="date" className={styles.formControl} />
                          </div>
                        </div>
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>
                          Available Time Slots{" "}
                          <span className={styles.required}>*</span>
                        </label>
                        <div className={styles.timeSlots}>
                          {timeSlots.map((t) => (
                            <div
                              key={t}
                              className={`${styles.slot} ${takenSlots.includes(t) ? styles.slotTaken : ""} ${selectedSlot === t ? styles.slotSelected : ""}`}
                              onClick={() =>
                                !takenSlots.includes(t) && setSelectedSlot(t)
                              }
                            >
                              {t}
                            </div>
                          ))}
                        </div>
                        <div className={styles.formHint}>
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              fontSize: "0.5rem",
                              color: "var(--text-soft)",
                            }}
                          ></i>{" "}
                          Strikethrough slots are already booked
                        </div>
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel}>
                          Additional Notes
                        </label>
                        <textarea
                          className={styles.formControl}
                          rows={3}
                          placeholder="Any previous records, allergies or special requirements..."
                        ></textarea>
                      </div>
                    </>
                  )}

                  {/* STEP 4: Confirm */}
                  {step === 3 && (
                    <>
                      <div className={styles.formTitle}>
                        Review &amp; Confirm
                      </div>
                      <div className={styles.formSubtitle}>
                        Please review your appointment details before
                        confirming.
                      </div>
                      <div
                        style={{
                          background: "var(--blue-pale)",
                          borderRadius: "14px",
                          padding: "1.75rem",
                          marginBottom: "1.5rem",
                        }}
                      >
                        {[
                          {
                            icon: "bi-person-fill",
                            label: "Patient",
                            value: "Jane Mwangi",
                          },
                          {
                            icon: "bi-telephone-fill",
                            label: "Phone",
                            value: "+254 712 345 678",
                          },
                          {
                            icon: "bi-heart-pulse-fill",
                            label: "Department",
                            value: "Cardiology",
                          },
                          {
                            icon: "bi-person-badge-fill",
                            label: "Doctor",
                            value:
                              selectedDoctor !== null
                                ? doctors[selectedDoctor].name
                                : "Best Available",
                          },
                          {
                            icon: "bi-calendar3",
                            label: "Date",
                            value: "Wednesday, 26 March 2026",
                          },
                          {
                            icon: "bi-clock-fill",
                            label: "Time",
                            value: selectedSlot || "Not selected",
                          },
                          {
                            icon: "bi-laptop-fill",
                            label: "Type",
                            value: consultTypes[selectedType].name,
                          },
                        ].map((row) => (
                          <div
                            key={row.label}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              padding: "0.6rem 0",
                              borderBottom: "1px solid rgba(187,222,251,.5)",
                            }}
                          >
                            <span
                              style={{
                                fontSize: "0.85rem",
                                color: "var(--text-soft)",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                              }}
                            >
                              <i
                                className={`bi ${row.icon}`}
                                style={{ color: "var(--blue-mid)" }}
                              ></i>
                              {row.label}
                            </span>
                            <span
                              style={{
                                fontSize: "0.88rem",
                                fontWeight: 600,
                                color: "var(--blue-deep)",
                              }}
                            >
                              {row.value}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.75rem",
                          background: "#fff8e1",
                          borderRadius: "10px",
                          padding: "1rem",
                          marginBottom: "1.5rem",
                        }}
                      >
                        <i
                          className="bi bi-info-circle-fill"
                          style={{
                            color: "var(--gold)",
                            fontSize: "1.1rem",
                            marginTop: "2px",
                            flexShrink: 0,
                          }}
                        ></i>
                        <p
                          style={{
                            fontSize: "0.85rem",
                            color: "var(--text-mid)",
                            margin: 0,
                            lineHeight: "1.6",
                          }}
                        >
                          By confirming this appointment you agree to our
                          cancellation policy. Please arrive 15 minutes before
                          your scheduled time. Bring your ID and insurance card.
                        </p>
                      </div>
                    </>
                  )}

                  {/* Nav buttons */}
                  <div className="d-flex gap-3 justify-content-between mt-4">
                    {step > 0 && (
                      <button onClick={prev} className="btn-outline-custom">
                        <i className="bi bi-arrow-left me-2"></i> Back
                      </button>
                    )}
                    <div className="ms-auto">
                      {step < 3 ? (
                        <button onClick={next} className="btn-primary-custom">
                          Continue <i className="bi bi-arrow-right ms-2"></i>
                        </button>
                      ) : (
                        <button
                          className={styles.submitBtn}
                          onClick={() => setSubmitted(true)}
                        >
                          <i className="bi bi-calendar-check me-2"></i>
                          Confirm Appointment
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* SIDEBAR */}
              <div className="col-lg-4">
                <div className={styles.sideCard}>
                  <div className={styles.sideTitle}>
                    <i
                      className="bi bi-info-circle-fill me-2"
                      style={{ color: "var(--blue-mid)" }}
                    ></i>
                    What to Bring
                  </div>
                  <div className={styles.checkList}>
                    {[
                      "National ID or Passport",
                      "Insurance card & policy number",
                      "Previous medical records or reports",
                      "List of current medications",
                      "Referral letter (if applicable)",
                    ].map((item) => (
                      <div key={item} className={styles.checkItem}>
                        <i
                          className={`bi bi-check-circle-fill ${styles.checkIcon}`}
                        ></i>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.sideCard}>
                  <div className={styles.sideTitle}>
                    <i
                      className="bi bi-clock-fill me-2"
                      style={{ color: "var(--blue-mid)" }}
                    ></i>
                    OPD Hours
                  </div>
                  <div className={styles.infoList}>
                    {[
                      { label: "Monday – Friday", value: "8:00 AM – 6:00 PM" },
                      { label: "Saturday", value: "8:00 AM – 2:00 PM" },
                      {
                        label: "Sunday & Public Holidays",
                        value: "Emergency Only",
                      },
                    ].map((h) => (
                      <div key={h.label} className={styles.infoItem}>
                        <div
                          className={styles.infoIcon}
                          style={{ background: "var(--blue-pale)" }}
                        >
                          <i
                            className="bi bi-calendar3"
                            style={{ color: "var(--blue-mid)" }}
                          ></i>
                        </div>
                        <div>
                          <div className={styles.infoLabel}>{h.label}</div>
                          <div className={styles.infoValue}>{h.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.sideCard}>
                  <div className={styles.sideTitle}>
                    <i
                      className="bi bi-geo-alt-fill me-2"
                      style={{ color: "var(--blue-mid)" }}
                    ></i>
                    Location
                  </div>
                  <div className={styles.infoList}>
                    <div className={styles.infoItem}>
                      <div
                        className={styles.infoIcon}
                        style={{ background: "var(--blue-pale)" }}
                      >
                        <i
                          className="bi bi-building"
                          style={{ color: "var(--blue-mid)" }}
                        ></i>
                      </div>
                      <div>
                        <div className={styles.infoLabel}>Address</div>
                        <div className={styles.infoValue}>
                          12 Ngong Road, Upper Hill, Nairobi
                        </div>
                      </div>
                    </div>
                    <div className={styles.infoItem}>
                      <div
                        className={styles.infoIcon}
                        style={{ background: "var(--blue-pale)" }}
                      >
                        <i
                          className="bi bi-car-front-fill"
                          style={{ color: "var(--blue-mid)" }}
                        ></i>
                      </div>
                      <div>
                        <div className={styles.infoLabel}>Parking</div>
                        <div className={styles.infoValue}>
                          Free parking available on-site (450 spaces)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.emergencyBox}>
                  <h4>Medical Emergency?</h4>
                  <p>
                    Do not book an appointment — go directly to our 24/7
                    emergency department or call immediately.
                  </p>
                  <a href="tel:911" className={styles.emergencyBtn}>
                    <i className="bi bi-telephone-fill me-2"></i>
                    Call 911 Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
