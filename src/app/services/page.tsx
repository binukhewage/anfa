import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Coaching Services & Training | Anfa Training",
  description:
    "Explore our coaching systems including online training, 1:1 gym training, Muay Thai & MMA, Extreme Bodyweight Training, and sports massage.",
};

export default function Services() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "80px" }}>
        {/* Banner */}
        <section className="page-banner">
          <div className="container">
            <span
              style={{
                color: "var(--primary)",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontSize: "14px",
              }}
            >
              Tailored Coaching Systems
            </span>
            <h1 style={{ marginTop: "8px" }}>Our Services</h1>
            <p>
              Structured training and nutrition systems designed for real
              results, from beginners to elite athletes.
            </p>
          </div>
        </section>

        {/* Anchor Navigation */}
        <section
          style={{
            background: "var(--card-bg)",
            borderBottom: "1px solid var(--card-border)",
            padding: "15px 0",
          }}
        >
          <div
            className="container"
            style={{
              display: "flex",
              gap: "20px",
              overflowX: "auto",
              paddingBottom: "5px",
              justifyContent: "center",
            }}
          >
            <a
              href="#online"
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "var(--text-muted)",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              Online Coaching
            </a>
            <a
              href="#gym"
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "var(--text-muted)",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              1:1 Gym Coaching
            </a>
            <a
              href="#martial-arts"
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "var(--text-muted)",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              Muay Thai & MMA
            </a>
            <a
              href="#ebt"
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "var(--text-muted)",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              EBT Bodyweight
            </a>
            <a
              href="#recovery"
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "var(--text-muted)",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              Massage & Yoga
            </a>
            <a
              href="#tests"
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "var(--text-muted)",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              Analyses & Tests
            </a>
          </div>
        </section>

        {/* Service Sections */}
        <section style={{ background: "var(--background)" }}>
          {/* 1. Online Coaching */}
          <div
            id="online"
            className="section-padding"
            style={{ borderBottom: "1px solid var(--card-border)" }}
          >
            <div
              className="container"
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 0.8fr",
                gap: "60px",
                alignItems: "center",
              }}
            >
              <div>
                <span
                  style={{
                    color: "var(--primary)",
                    fontWeight: 700,
                    fontSize: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Program 01
                </span>
                <h2
                  style={{
                    fontSize: "32px",
                    textTransform: "uppercase",
                    margin: "8px 0 20px",
                  }}
                >
                  Performance Online Coaching
                </h2>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "16px",
                    marginBottom: "24px",
                    lineHeight: "1.7",
                  }}
                >
                  Our online coaching is a comprehensive, high-accountability
                  system designed for busy professionals and athletes worldwide.
                  No matter your location, you receive custom-tailored
                  programming and expert support to optimize your strength, body
                  composition, and recovery.
                </p>
                <ul className="check-list" style={{ marginBottom: "32px" }}>
                  <li>Custom-made training protocols updated weekly</li>
                  <li>
                    Tailored nutrition plans with calorie and macronutrient
                    targets
                  </li>
                  <li>
                    Daily consultation and accountability chat in our coaching
                    application
                  </li>
                  <li>
                    Weekly check-ins, biofeedback analyses, and video technique
                    reviews
                  </li>
                  <li>
                    Injury prevention, mobility, and structured recovery
                    guidance
                  </li>
                </ul>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  <Link href="/onlinebooking" className="btn btn-primary">
                    Apply Online
                  </Link>
                  <Link href="/prices" className="btn btn-secondary">
                    View Pricing
                  </Link>
                </div>
              </div>
              <div
                style={{
                  position: "relative",
                  height: "350px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid var(--card-border)",
                }}
              >
                <Image
                  src="/images/fitness.png"
                  alt="Online Coaching"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          {/* 2. 1:1 Gym Coaching */}
          <div
            id="gym"
            className="section-padding"
            style={{
              borderBottom: "1px solid var(--card-border)",
              background: "var(--card-bg)",
            }}
          >
            <div
              className="container"
              style={{
                display: "grid",
                gridTemplateColumns: "0.8fr 1.2fr",
                gap: "60px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: "350px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid var(--card-border)",
                }}
              >
                <Image
                  src="/images/crossfit.png"
                  alt="1:1 Gym Coaching"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <span
                  style={{
                    color: "var(--primary)",
                    fontWeight: 700,
                    fontSize: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Program 02
                </span>
                <h2
                  style={{
                    fontSize: "32px",
                    textTransform: "uppercase",
                    margin: "8px 0 20px",
                  }}
                >
                  1:1 Gym Performance Coaching
                </h2>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "16px",
                    marginBottom: "24px",
                    lineHeight: "1.7",
                  }}
                >
                  Train directly with Coach Yasin in Casablanca. Ideal for those
                  who value direct technical adjustments, real-time motivation,
                  and custom-made workouts set in a premium gym environment. We
                  focus on movement quality, progressive overload, and injury
                  rehabilitation.
                </p>
                <ul className="check-list" style={{ marginBottom: "32px" }}>
                  <li>55-minute intensive 1:1 training sessions at the gym</li>
                  <li>
                    Initial 60-minute movement screening and postural analysis
                  </li>
                  <li>Direct form correction to ensure safe, heavy lifting</li>
                  <li>
                    Custom workouts planned around physical constraints or
                    rehabilitation needs
                  </li>
                  <li>Includes gym access and training equipment</li>
                </ul>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  <Link href="/contact" className="btn btn-primary">
                    Book Consultation
                  </Link>
                  <Link href="/prices" className="btn btn-secondary">
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Muay Thai & MMA */}
          <div
            id="martial-arts"
            className="section-padding"
            style={{ borderBottom: "1px solid var(--card-border)" }}
          >
            <div
              className="container"
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 0.8fr",
                gap: "60px",
                alignItems: "center",
              }}
            >
              <div>
                <span
                  style={{
                    color: "var(--primary)",
                    fontWeight: 700,
                    fontSize: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Program 03
                </span>
                <h2
                  style={{
                    fontSize: "32px",
                    textTransform: "uppercase",
                    margin: "8px 0 20px",
                  }}
                >
                  Muay Thai & MMA Conditioning
                </h2>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "16px",
                    marginBottom: "24px",
                    lineHeight: "1.7",
                  }}
                >
                  Improve your combat sports technique or learn self-defense
                  from an elite preparation coach. We offer Muay Thai boxing and
                  MMA training for competitive fighters looking to elevate their
                  speed and endurance, as well as beginners wanting to burn fat
                  and develop confidence.
                </p>
                <ul className="check-list" style={{ marginBottom: "32px" }}>
                  <li>
                    Pad-work, punching combinations, elbows, knees, and kicking
                    mechanics
                  </li>
                  <li>
                    Tactical sparring preparation and ring movement conditioning
                  </li>
                  <li>
                    High-intensity cardiovascular drills built around martial
                    arts movements
                  </li>
                  <li>Self-defense mechanics to handle real-world scenarios</li>
                  <li>Available 1:1, 1:2, or in specialized group workshops</li>
                </ul>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  <Link href="/onlinebooking" className="btn btn-primary">
                    Apply Here
                  </Link>
                  <Link href="/about-me" className="btn btn-secondary">
                    Coach Credentials
                  </Link>
                </div>
              </div>
              <div
                style={{
                  position: "relative",
                  height: "350px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid var(--card-border)",
                }}
              >
                <Image
                  src="/images/martialarts.png"
                  alt="Muay Thai Coaching"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          {/* 4. Extreme Bodyweight Training (EBT) */}
          <div
            id="ebt"
            className="section-padding"
            style={{
              borderBottom: "1px solid var(--card-border)",
              background: "var(--card-bg)",
            }}
          >
            <div
              className="container"
              style={{
                display: "grid",
                gridTemplateColumns: "0.8fr 1.2fr",
                gap: "60px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: "350px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid var(--card-border)",
                }}
              >
                <Image
                  src="/images/bodyweight.png"
                  alt="Extreme Bodyweight Training"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <span
                  style={{
                    color: "var(--primary)",
                    fontWeight: 700,
                    fontSize: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Program 04
                </span>
                <h2
                  style={{
                    fontSize: "32px",
                    textTransform: "uppercase",
                    margin: "8px 0 20px",
                  }}
                >
                  ®EBT Extreme Bodyweight Training
                </h2>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "16px",
                    marginBottom: "24px",
                    lineHeight: "1.7",
                  }}
                >
                  EBT is our proprietary bodyweight system designed to build
                  structural integrity, strength, and work capacity. Utilizing
                  high-repetition workouts, isometric holds, and strict
                  progression protocols, EBT forces your body to develop raw
                  control and core strength without heavy weights.
                </p>
                <ul className="check-list" style={{ marginBottom: "32px" }}>
                  <li>55-minute high-rep calisthenics conditioning classes</li>
                  <li>
                    Progressive routines scaling from simple push/pull
                    variations to complex holds
                  </li>
                  <li>
                    Core stability, body weight control, and absolute muscular
                    endurance
                  </li>
                  <li>
                    Perfect for outdoor circle training or minimal-equipment
                    setups
                  </li>
                  <li>Open for all fitness levels with scaling progressions</li>
                </ul>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  <Link href="/contact" className="btn btn-primary">
                    Book Class
                  </Link>
                  <Link href="/prices" className="btn btn-secondary">
                    Pricing Plans
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Massage & Stretch Yoga */}
          <div
            id="recovery"
            className="section-padding"
            style={{ borderBottom: "1px solid var(--card-border)" }}
          >
            <div
              className="container"
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 0.8fr",
                gap: "60px",
                alignItems: "center",
              }}
            >
              <div>
                <span
                  style={{
                    color: "var(--primary)",
                    fontWeight: 700,
                    fontSize: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Program 05
                </span>
                <h2
                  style={{
                    fontSize: "32px",
                    textTransform: "uppercase",
                    margin: "8px 0 20px",
                  }}
                >
                  Sports Massage & Stretch Yoga
                </h2>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "16px",
                    marginBottom: "24px",
                    lineHeight: "1.7",
                  }}
                >
                  Optimize your recovery to sustain hard training. We offer
                  professional Sports, Thai, and Oil massage therapy alongside
                  Stretch Yoga sessions designed to alleviate muscle soreness,
                  improve joint range of motion, and restore mental focus.
                </p>
                <ul className="check-list" style={{ marginBottom: "32px" }}>
                  <li>
                    30 or 60-minute specialized massage sessions (Sports, relax,
                    or Thai style)
                  </li>
                  <li>
                    Incorporation of EPS (tense machine) and professional
                    massage guns
                  </li>
                  <li>
                    Stretch Yoga classes focused on deep static and active
                    stretching
                  </li>
                  <li>
                    Relief from tight fascia, chronic joint pain, and spinal
                    compression
                  </li>
                  <li>
                    Improves recovery times so you can train with higher
                    frequency
                  </li>
                </ul>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  <Link href="/contact" className="btn btn-primary">
                    Book Recovery Session
                  </Link>
                </div>
              </div>
              <div
                style={{
                  position: "relative",
                  height: "350px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid var(--card-border)",
                }}
              >
                <Image
                  src="/images/yasin_pt.jpg"
                  alt="Recovery Massage"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          {/* 6. Analyses & Tests */}
          <div
            id="tests"
            className="section-padding"
            style={{ background: "var(--card-bg)" }}
          >
            <div
              className="container"
              style={{
                display: "grid",
                gridTemplateColumns: "0.8fr 1.2fr",
                gap: "60px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: "350px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid var(--card-border)",
                }}
              >
                <Image
                  src="/images/fitness.png"
                  alt="Analyses & Tests"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <span
                  style={{
                    color: "var(--primary)",
                    fontWeight: 700,
                    fontSize: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Program 06
                </span>
                <h2
                  style={{
                    fontSize: "32px",
                    textTransform: "uppercase",
                    margin: "8px 0 20px",
                  }}
                >
                  Postural Analysis & Nutrition Planning
                </h2>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "16px",
                    marginBottom: "24px",
                    lineHeight: "1.7",
                  }}
                >
                  Understand your body's structural starting point. Our analysis
                  services range from basic movement screens to in-depth posture
                  reviews, metabolic reviews, and customized nutritional plans
                  to fuel performance and maintain long-term health.
                </p>
                <ul className="check-list" style={{ marginBottom: "32px" }}>
                  <li>
                    Complete skeletal posture screening to identify muscular
                    imbalances
                  </li>
                  <li>
                    Functional Movement Screen (FMS) to evaluate joint
                    restrictions
                  </li>
                  <li>
                    Detailed calorie and macronutrient breakdown adjusted to
                    your activity level
                  </li>
                  <li>
                    Custom meal plans, shopping lists, and recovery protocols
                  </li>
                  <li>
                    Includes follow-up analysis to track body composition
                    changes
                  </li>
                </ul>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  <Link href="/contact" className="btn btn-primary">
                    Request Analysis
                  </Link>
                  <Link href="/prices" className="btn btn-secondary">
                    Analysis Prices
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section
          className="section-padding"
          style={{
            textAlign: "center",
            background: "var(--card-bg)",
            borderTop: "1px solid var(--card-border)",
          }}
        >
          <div className="container">
            <h2
              style={{
                fontSize: "36px",
                marginBottom: "16px",
                textTransform: "uppercase",
              }}
            >
              Ready to Start Your Training?
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                maxWidth: "600px",
                margin: "0 auto 32px",
                fontSize: "17px",
              }}
            >
              Apply today for a free initial consultation. Yasin will evaluate
              your goals and design your custom-made training system.
            </p>
            <div
              style={{ display: "flex", gap: "16px", justifyContent: "center" }}
            >
              <Link href="/onlinebooking" className="btn btn-primary">
                Apply Now
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
