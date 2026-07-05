import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Fitness Bootcamp Retreat Morocco | Anfa Training",
  description: "Join us for an exclusive, all-inclusive fitness retreat in Bouznika, Morocco. Muay Thai, yoga, bodyweight training, healthy cuisine and luxury stay.",
};

const bootcampFeatures = [
  {
    icon: "🏡",
    title: "Luxury Stay at Casa the Anfa",
    desc: "Relax in a cozy private single or double room equipped with modern amenities, television, and high-speed Wi-Fi."
  },
  {
    icon: "🍳",
    title: "Culinary Nutrition",
    desc: "Savor three healthy, custom-made meals prepared daily by our chefs, plus high-protein snacks to fuel your workouts."
  },
  {
    icon: "⚡",
    title: "Diverse Daily Training",
    desc: "Includes Extreme Bodyweight Training (EBT), Muay Thai & MMA, running, biking, CrossFit conditioning, and recovery yoga."
  },
  {
    icon: "🏊",
    title: "Rooftop Oasis & Pool",
    desc: "Unwind at our rooftop lounge, complete with a training zone, social grilling area, and a pool to cool off after training."
  },
  {
    icon: "🧼",
    title: "Daily Laundry & Service",
    desc: "Focus purely on your physical progression while we handle the chores with complimentary daily cleaning and laundry services."
  },
  {
    icon: "🕌",
    title: "Excursions & Culture",
    desc: "Explore historic Casablanca, bargain in the souks of Rabat, taste traditional mint tea, and visit local coastal beaches."
  }
];

export default function Camps() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "80px" }}>
        
        {/* Hero Banner with background image */}
        <section style={{ position: "relative", minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", textAlign: "center", overflow: "hidden" }}>
          <Image
            src="/images/camps_bg.jpg"
            alt="Bouznika Morocco Coastal View"
            fill
            style={{ objectFit: "cover", filter: "brightness(40%)" }}
            priority
          />
          <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
            <span style={{ color: "var(--primary)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "14px" }}>
              All-Inclusive Fitness Retreat
            </span>
            <h1 style={{ fontSize: "48px", fontWeight: 900, textTransform: "uppercase", margin: "12px 0 20px" }}>
              Anfa Training Boot Camp
            </h1>
            <p style={{ fontSize: "18px", color: "#e5e7eb", maxWidth: "700px", margin: "0 auto 32px", lineHeight: "1.6" }}>
              Transform your life, elevate your physical conditioning, and experience the beauty of Bouznika, Morocco.
            </p>
            <Link href="/onlinebooking" className="btn btn-primary">
              Book Your Spot Now
            </Link>
          </div>
        </section>

        {/* Overview Section */}
        <section className="section-padding" style={{ background: "var(--background)" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "60px", alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "32px", textTransform: "uppercase", marginBottom: "20px" }}>
                A Week of Ultimate <span className="orange-gradient">Adventure</span>
              </h2>
              <div style={{ color: "var(--text-muted)", fontSize: "16px", display: "flex", flexDirection: "column", gap: "16px", lineHeight: "1.7" }}>
                <p>
                  Escape to the captivating coastal town of Bouznika, a hidden gem nestled between the lush green landscapes and pristine beaches of Morocco. This exclusive retreat is designed to get you in the best shape of your life while providing complete relaxation.
                </p>
                <p>
                  At <strong>Casa the Anfa</strong>, we handle everything. You will participate in intensive athletic training, eat chef-prepared healthy meals, explore Morocco's rich history, and build relationships with a supportive community.
                </p>
                <p style={{ borderLeft: "3px solid var(--primary)", paddingLeft: "16px", fontStyle: "italic", color: "var(--text-light)" }}>
                  Important: To maintain high-quality guidance and an intimate training environment, each retreat is limited strictly to <strong>6-8 persons</strong>.
                </p>
              </div>
            </div>
            <div style={{ position: "relative", height: "350px", borderRadius: "20px", overflow: "hidden", border: "1px solid var(--card-border)", boxShadow: "var(--shadow)" }}>
              <Image
                src="/images/yasin_boxing.png"
                alt="Retreat rooftop workouts"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        {/* Retreat Features grid */}
        <section className="section-padding" style={{ background: "var(--card-bg)", borderBottom: "1px solid var(--card-border)", borderTop: "1px solid var(--card-border)" }}>
          <div className="container">
            <h2 style={{ fontSize: "32px", textTransform: "uppercase", textAlign: "center", marginBottom: "50px" }}>
              What is Included
            </h2>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
              {bootcampFeatures.map((f, i) => (
                <div key={i} className="card" style={{ padding: "30px" }}>
                  <div style={{ fontSize: "36px", marginBottom: "16px" }}>{f.icon}</div>
                  <h3 style={{ fontSize: "18px", color: "var(--text-light)", textTransform: "uppercase", marginBottom: "12px" }}>{f.title}</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.6" }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Retreat Daily Schedule teaser */}
        <section className="section-padding" style={{ background: "var(--background)" }}>
          <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
            <h2 style={{ fontSize: "32px", textTransform: "uppercase", marginBottom: "20px" }}>A Typical Day</h2>
            <p style={{ color: "var(--text-muted)", marginBottom: "40px" }}>Here is what you can expect during a full day at our retreat:</p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", textAlign: "left" }}>
              <div style={{ display: "flex", gap: "20px", background: "rgba(15,23,42,0.03)", padding: "20px", borderRadius: "12px", border: "1px solid var(--card-border)" }}>
                <span style={{ color: "var(--primary)", fontWeight: 700 }}>08:00 AM</span>
                <div>
                  <h4 style={{ color: "var(--text-light)" }}>Sunrise Yoga & Mobility</h4>
                  <p style={{ color: "var(--text-muted)", fontSize: "14px", marginTop: "4px" }}>Wake up your muscles on our rooftop oasis with deep stretching and breathing.</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "20px", background: "rgba(15,23,42,0.03)", padding: "20px", borderRadius: "12px", border: "1px solid var(--card-border)" }}>
                <span style={{ color: "var(--primary)", fontWeight: 700 }}>09:00 AM</span>
                <div>
                  <h4 style={{ color: "var(--text-light)" }}>Chef's Healthy Breakfast</h4>
                  <p style={{ color: "var(--text-muted)", fontSize: "14px", marginTop: "4px" }}>Moroccan eggs, fresh fruit, oatmeal, coffee, and fresh orange juice.</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "20px", background: "rgba(15,23,42,0.03)", padding: "20px", borderRadius: "12px", border: "1px solid var(--card-border)" }}>
                <span style={{ color: "var(--primary)", fontWeight: 700 }}>10:30 AM</span>
                <div>
                  <h4 style={{ color: "var(--text-light)" }}>EBT / Muay Thai Training</h4>
                  <p style={{ color: "var(--text-muted)", fontSize: "14px", marginTop: "4px" }}>Intense pad-work and technical combinations followed by bodyweight training.</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "20px", background: "rgba(15,23,42,0.03)", padding: "20px", borderRadius: "12px", border: "1px solid var(--card-border)" }}>
                <span style={{ color: "var(--primary)", fontWeight: 700 }}>01:30 PM</span>
                <div>
                  <h4 style={{ color: "var(--text-light)" }}>Custom Protein Lunch & Relax</h4>
                  <p style={{ color: "var(--text-muted)", fontSize: "14px", marginTop: "4px" }}>Freshly grilled fish or chicken with vegetables and complex carbs, followed by pool relaxation.</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "20px", background: "rgba(15,23,42,0.03)", padding: "20px", borderRadius: "12px", border: "1px solid var(--card-border)" }}>
                <span style={{ color: "var(--primary)", fontWeight: 700 }}>04:30 PM</span>
                <div>
                  <h4 style={{ color: "var(--text-light)" }}>Coastal Trail Run or Biking</h4>
                  <p style={{ color: "var(--text-muted)", fontSize: "14px", marginTop: "4px" }}>Interval cardio drills along the pristine sandy beaches of Bouznika.</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "20px", background: "rgba(15,23,42,0.03)", padding: "20px", borderRadius: "12px", border: "1px solid var(--card-border)" }}>
                <span style={{ color: "var(--primary)", fontWeight: 700 }}>07:30 PM</span>
                <div>
                  <h4 style={{ color: "var(--text-light)" }}>Moroccan Social Dinner</h4>
                  <p style={{ color: "var(--text-muted)", fontSize: "14px", marginTop: "4px" }}>Traditional tajine or couscous prepared clean, followed by green tea under the stars.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="section-padding" style={{ textAlign: "center", background: "var(--card-bg)", borderTop: "1px solid var(--card-border)" }}>
          <div className="container">
            <h2 style={{ fontSize: "36px", marginBottom: "16px", textTransform: "uppercase" }}>Reserve Your Spot Today</h2>
            <p style={{ color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto 32px", fontSize: "17px" }}>
              Our groups are kept small (6-8 guests) to guarantee personal coaching from Yasin. Contact us to inquire about availability and pricing for the next camp.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
              <Link href="/onlinebooking" className="btn btn-primary">Book Camp Retreat</Link>
              <Link href="/contact" className="btn btn-secondary">Inquire by Message</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
