import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Anfa Training",
  description: "Get in touch with Coach Yasin. Apply for coaching, book a consultation, or send us a message about personal training in Casablanca.",
};

export default function Contact() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "80px" }}>
        {/* Banner */}
        <section className="page-banner">
          <div className="container">
            <span style={{ color: "var(--primary)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "14px" }}>
              Get In Touch
            </span>
            <h1 style={{ marginTop: "8px" }}>Contact</h1>
            <p>Ready to start training with a system? Drop me a message or book an appointment.</p>
          </div>
        </section>

        {/* Contact info and form grid */}
        <section style={{ background: "var(--background)", padding: "60px 0" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: "60px", alignItems: "start" }}>
            
            {/* Info Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
              <div>
                <h2 style={{ fontSize: "24px", textTransform: "uppercase", marginBottom: "16px", color: "var(--text-light)" }}>Contact Info</h2>
                <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: "1.6" }}>
                  Have questions about our training systems, pricing plans, or upcoming fitness retreats in Bouznika? Reach out directly and we will respond as soon as possible.
                </p>
              </div>

              <div className="card" style={{ padding: "30px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "45px", height: "45px", borderRadius: "50%", background: "rgba(255, 107, 0, 0.1)", display: "flex", alignItems: "center", color: "var(--primary)", fontSize: "20px", flexShrink: 0, justifyContent: "center" }}>
                    ✉️
                  </div>
                  <div>
                    <h4 style={{ color: "var(--text-light)", fontSize: "14px", textTransform: "uppercase" }}>Email</h4>
                    <a href="mailto:info@anfatraining.com" style={{ color: "var(--text-muted)", fontSize: "16px" }}>info@anfatraining.com</a>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "45px", height: "45px", borderRadius: "50%", background: "rgba(255, 107, 0, 0.1)", display: "flex", alignItems: "center", color: "var(--primary)", fontSize: "20px", flexShrink: 0, justifyContent: "center" }}>
                    📞
                  </div>
                  <div>
                    <h4 style={{ color: "var(--text-light)", fontSize: "14px", textTransform: "uppercase" }}>Phone / WhatsApp</h4>
                    <a href="tel:+212676777787" style={{ color: "var(--text-muted)", fontSize: "16px" }}>+212 (0) 676 777 787</a>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "45px", height: "45px", borderRadius: "50%", background: "rgba(255, 107, 0, 0.1)", display: "flex", alignItems: "center", color: "var(--primary)", fontSize: "20px", flexShrink: 0, justifyContent: "center" }}>
                    📍
                  </div>
                  <div>
                    <h4 style={{ color: "var(--text-light)", fontSize: "14px", textTransform: "uppercase" }}>Primary Location</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "15px" }}>Casablanca, Morocco</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: "18px", textTransform: "uppercase", marginBottom: "12px", color: "var(--text-light)" }}>Online Booking</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "14px", marginBottom: "16px" }}>
                  You can also apply directly through our secure online booking page to request your free 60-minute consultation.
                </p>
                <Link
                  href="/onlinebooking"
                  className="btn btn-outline"
                  style={{ display: "inline-block" }}
                >
                  Go to Online Booking
                </Link>
              </div>
            </div>

            {/* Form Column */}
            <div>
              <h2 style={{ fontSize: "24px", textTransform: "uppercase", marginBottom: "20px", color: "var(--text-light)" }}>Send us a message</h2>
              <ContactForm />
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
