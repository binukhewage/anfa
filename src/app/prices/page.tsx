import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Coaching Prices & Plans | Anfa Training",
  description:
    "Check pricing plans for our fitness training programs: online coaching, 1:1 PT sessions, group classes, sports massage, and meal plans.",
};

const priceCategories = [
  {
    category: "Online Coaching",
    items: [
      {
        title: "Personal Training Online",
        subtitle: "All you need for serious online training.",
        price: "119€",
        period: "4 Weeks",
        features: [
          "Custom-made training protocol for your level",
          "Custom meal plan with macro adjustments",
          "Daily in-app accountability and check-ins",
          "Support, video feedback & adjustments",
          "Bi-weekly performance reviews",
        ],
        cta: "Book Online",
        url: "/onlinebooking",
      },
    ],
  },
  {
    category: "1:1 Coaching Sessions",
    items: [
      {
        title: "Performance Training (1:1 Gym)",
        subtitle: "Improve technique, strength & performance.",
        price: "69€",
        period: "55 min session",
        features: [
          "1:1 coaching at the private facility",
          "Technique correction & progressive loading",
          "Rehab, injury prevention or power training",
          "Gym entry and equipment included",
        ],
        cta: "Book Gym Session",
        url: "/onlinebooking",
      },
      {
        title: "Performance Home (City)",
        subtitle: "We bring the training to your home.",
        price: "69€",
        period: "55 min session",
        features: [
          "Trainer travels directly to your home in city",
          "Training equipment provided for the session",
          "Postural checks & customized workout structure",
          "Saves travel time and fits your schedule",
        ],
        cta: "Book Home City",
        url: "/onlinebooking",
      },
      {
        title: "Performance Home (Suburban)",
        subtitle: "We travel to the suburbs.",
        price: "89€",
        period: "55 min session",
        features: [
          "Trainer travels to your suburban residence",
          "Training equipment provided for the session",
          "Postural checks & custom-made workouts",
          "All travel fees included in price",
        ],
        cta: "Book Home Suburban",
        url: "/onlinebooking",
      },
      {
        title: "Muay Thai & MMA (1:1)",
        subtitle: "Learn combat skills or self defense.",
        price: "69€",
        period: "55 min session",
        features: [
          "Focus on technique, pad-work and movement",
          "Tailored for competitive fighters or beginners",
          "Intense cardiovascular conditioning",
          "Learn practical, real-world self defense",
        ],
        cta: "Book Combat Session",
        url: "/onlinebooking",
      },
    ],
  },
  {
    category: "Group Classes",
    items: [
      {
        title: "Group Training Class",
        subtitle: "Sleek conditioning with a team.",
        price: "19€",
        period: "55 min session",
        features: [
          "Circle training, cardio conditioning, and speed drills",
          "High energy environment with fellow trainees",
          "Outdoors or at the gym facilities",
          "Coached and scaled for all experience levels",
        ],
        cta: "Book Class",
        url: "/onlinebooking",
      },
      {
        title: "Extreme Bodyweight (EBT)",
        subtitle: "Proprietary bodyweight system.",
        price: "19€",
        period: "55 min session",
        features: [
          "High repetition functional training blocks",
          "Develop raw core stability and endurance",
          "Uses only body weight and strict progression",
          "Cardiovascular push and physical testing",
        ],
        cta: "Book EBT Class",
        url: "/onlinebooking",
      },
      {
        title: "Stretch Yoga Class",
        subtitle: "Become flexible like a martial artist.",
        price: "19€",
        period: "Per session",
        features: [
          "Static and active stretching routines",
          "Helps open tight joints, hips, and lower back",
          "Stretching conducted to pleasant, calming music",
          "Improves relaxation, recovery and balance",
        ],
        cta: "Book Yoga Class",
        url: "/onlinebooking",
      },
    ],
  },
  {
    category: "Specialized & Recovery",
    items: [
      {
        title: "Posture Analysis & Meal Plan",
        subtitle: "POSTURE SCREENING, TESTS & MEAL PLANNING",
        price: "69€",
        period: "One time setup",
        features: [
          "Comprehensive joint and skeletal alignment review",
          "Detailed functional mobility screening",
          "Tailored caloric calculation & macronutrient split",
          "Custom meal plans and nutrient timing advice",
        ],
        cta: "Request Analysis",
        url: "/onlinebooking",
      },
      {
        title: "Sports Massage",
        subtitle: "Sport, Oil, relax, Thai & Gun recovery.",
        price: "39€",
        period: "Starting price",
        features: [
          "Sports, Thai, relax, or Oil massage variations",
          "Aids lymphatic drainage and muscle stiffness",
          "Incorporates EPS machines and massage guns",
          "Speeds up recovery for heavy training sessions",
        ],
        cta: "Book Massage",
        url: "/onlinebooking",
      },
    ],
  },
];

export default function Prices() {
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
              Invest In Your Health
            </span>
            <h1 style={{ marginTop: "8px" }}>Pricing Plans</h1>
            <p>
              Evidence-based coaching packages custom-built around your
              lifestyle, body, and goals.
            </p>
          </div>
        </section>

        {/* Pricing grids grouped by category */}
        <section style={{ background: "var(--background)", padding: "60px 0" }}>
          <div
            className="container"
            style={{ display: "flex", flexDirection: "column", gap: "60px" }}
          >
            {priceCategories.map((cat) => (
              <div key={cat.category}>
                <h2
                  style={{
                    fontSize: "24px",
                    textTransform: "uppercase",
                    marginBottom: "24px",
                    color: "var(--primary)",
                    letterSpacing: "0.05em",
                    borderBottom: "1px solid var(--card-border)",
                    paddingBottom: "10px",
                  }}
                >
                  {cat.category}
                </h2>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "30px",
                  }}
                >
                  {cat.items.map((item) => (
                    <div
                      key={item.title}
                      className="card"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            fontSize: "20px",
                            color: "var(--text-light)",
                            textTransform: "uppercase",
                            marginBottom: "6px",
                          }}
                        >
                          {item.title}
                        </h3>
                        <p
                          style={{
                            color: "var(--text-muted)",
                            fontSize: "14px",
                            marginBottom: "20px",
                            fontStyle: "italic",
                          }}
                        >
                          {item.subtitle}
                        </p>

                        <div
                          style={{
                            margin: "20px 0",
                            borderBottom: "1px solid var(--card-border)",
                            paddingBottom: "16px",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "40px",
                              fontWeight: 900,
                              color: "var(--text-light)",
                            }}
                          >
                            {item.price}
                          </span>
                          {item.period && (
                            <span
                              style={{
                                color: "var(--text-muted)",
                                fontSize: "14px",
                                marginLeft: "6px",
                              }}
                            >
                              / {item.period}
                            </span>
                          )}
                        </div>

                        <ul
                          className="check-list"
                          style={{ marginBottom: "24px" }}
                        >
                          {item.features.map((f, i) => (
                            <li
                              key={i}
                              style={{ fontSize: "14px", marginBottom: "8px" }}
                            >
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        href={item.url}
                        target={
                          item.url.startsWith("http") ? "_blank" : "_self"
                        }
                        className="btn btn-primary"
                        style={{
                          width: "100%",
                          textAlign: "center",
                          textTransform: "uppercase",
                        }}
                      >
                        {item.cta}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Disclaimer */}
        <section
          className="section-padding"
          style={{
            background: "var(--card-bg)",
            textAlign: "center",
            borderTop: "1px solid var(--card-border)",
          }}
        >
          <div className="container">
            <h2
              style={{
                fontSize: "28px",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              What You Get With Every Program
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                maxWidth: "700px",
                margin: "0 auto 30px",
                fontSize: "16px",
                lineHeight: "1.7",
              }}
            >
              Every client program begins with a complete functional screen,
              posture check, and goals alignment meeting. When you buy our
              coaching services, you are buying a{" "}
              <strong>personalized fitness ecosystem</strong> engineered for
              real, sustainable results.
            </p>
            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  background: "rgba(15,23,42,0.03)",
                  padding: "16px 24px",
                  borderRadius: "12px",
                  border: "1px solid var(--card-border)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span>🛡️</span> 14-Day Return Policy
              </div>
              <div
                style={{
                  background: "rgba(15,23,42,0.03)",
                  padding: "16px 24px",
                  borderRadius: "12px",
                  border: "1px solid var(--card-border)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span>📜</span> Regulated EuropeActive Standard
              </div>
              <div
                style={{
                  background: "rgba(15,23,42,0.03)",
                  padding: "16px 24px",
                  borderRadius: "12px",
                  border: "1px solid var(--card-border)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span>🤝</span> No Hidden Enrollment Fees
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
