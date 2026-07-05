import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Coach Yasin | Anfa Training",
  description: "Learn about Yasin, founder of Anfa Training, licensed EuropeActive PT & Nutritionist with 20+ years of fitness and martial arts coaching experience.",
};

export default function AboutMe() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "80px" }}>
        {/* Banner */}
        <section className="page-banner">
          <div className="container">
            <span style={{ color: "var(--primary)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "14px" }}>
              The Founder & Head Coach
            </span>
            <h1 style={{ marginTop: "8px" }}>About Me</h1>
            <p>Personal trainer, nutritionist, Muay Thai coach, and the founder of Anfa Training.</p>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding" style={{ background: "var(--background)" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>
            
            {/* Image Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ position: "relative", width: "100%", height: "450px", borderRadius: "20px", overflow: "hidden", border: "1px solid var(--card-border)", boxShadow: "var(--shadow)" }}>
                <Image
                  src="/images/yasin_pt.jpg"
                  alt="Yasin Mchater - Personal Trainer"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              
              {/* Credentials list */}
              <div className="card" style={{ padding: "30px" }}>
                <h3 style={{ fontSize: "18px", color: "var(--text-light)", textTransform: "uppercase", marginBottom: "16px", letterSpacing: "0.05em", borderBottom: "1px solid var(--card-border)", paddingBottom: "10px" }}>
                  Qualifications & Licenses
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--text-muted)" }}>
                    <span style={{ color: "var(--primary)" }}>✓</span> <strong>EuropeActive EQF Level 3</strong> — Fitness Instructor
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--text-muted)" }}>
                    <span style={{ color: "var(--primary)" }}>✓</span> <strong>EuropeActive EQF Level 4</strong> — Personal Trainer & Nutritionist
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--text-muted)" }}>
                    <span style={{ color: "var(--primary)" }}>✓</span> <strong>SAFE Education Sweden</strong> — Certified Trainer & Advisor
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--text-muted)" }}>
                    <span style={{ color: "var(--primary)" }}>✓</span> <strong>FIFA Medical Network</strong> — Diploma Holder
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--text-muted)" }}>
                    <span style={{ color: "var(--primary)" }}>✓</span> <strong>University Level</strong> — Health Promotion Specialist
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--text-muted)" }}>
                    <span style={{ color: "var(--primary)" }}>✓</span> <strong>Licensed Practitioner</strong> — Thai & Sports Massage
                  </li>
                </ul>
              </div>
            </div>

            {/* Content Column */}
            <div>
              <h2 style={{ fontSize: "32px", textTransform: "uppercase", marginBottom: "24px" }}>
                My Journey & <span className="orange-gradient">Philosophy</span>
              </h2>
              
              <div style={{ color: "var(--text-muted)", fontSize: "16px", display: "flex", flexDirection: "column", gap: "18px", lineHeight: "1.7" }}>
                <p>
                  I have been living and breathing sports since I was six years old. Football came first, then at twelve my father brought me to martial arts — Wushu Kung Fu, Taekwondo, and eventually Muay Thai and MMA, which I still train and coach today. Strength training followed naturally, and by my late teens I had developed a serious passion for evidence-based health and athletic performance.
                </p>
                <p>
                  In 2009, I co-founded a martial arts association in Sweden focused on Muay Thai and MMA, coaching and developing competitive fighters. That experience — working with elite athletes to optimize speed, endurance, power, and mental toughness — together with my weight training knowledge, shaped how I think about training. Not as a collection of random workouts, but as a structured, purposeful system.
                </p>
                <p>
                  Every client I work with gets a system — not a template. Your training, nutrition, and recovery plan is built around your body, your goals, and your life. Whether you are a complete beginner or a competitive athlete, the methodology is the same: evidence-based, progressive, and built for long-term results.
                </p>
                <p>
                  I work across multiple formats — 1:1 sessions in Casablanca, home visits, online coaching, and intensive, fun bootcamps in Bouznika combining performance training, Muay Thai, yoga, and recovery.
                </p>

                <h3 style={{ fontSize: "20px", color: "var(--text-light)", textTransform: "uppercase", marginTop: "20px", marginBottom: "8px" }}>
                  Moroccan Built. Globally Connected.
                </h3>
                <p>
                  Anfa Training operates out of Casablanca, Morocco, with clients locally, across Europe, and online globally. I work and coach in <strong>Swedish</strong>, <strong>English</strong>, and <strong>Moroccan Darija (Arabic)</strong> — so wherever you are and whatever your background, we can communicate properly and train seriously.
                </p>
                <p>
                  If you are ready to stop guessing and start training with a real system — I am ready to build it with you.
                </p>
              </div>

              <div style={{ marginTop: "40px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link
                  href="/onlinebooking"
                  className="btn btn-primary"
                >
                  Apply Here
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  Get In Touch
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
