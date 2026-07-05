import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Anfa Training | A System for Real Results",
  description:
    "Evidence-based personal training, nutrition, and athletic performance coaching in Casablanca, Morocco and online globally.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={`container ${styles.heroContent}`}>
            <div className={styles.heroText}>
              <span className={styles.heroSubtitle}>
                Online Training & Casablanca
              </span>
              <h1 className={`${styles.heroTitle} text-gradient`}>
                A System For{" "}
                <span className="orange-gradient">Real Results</span>
              </h1>
              <p className={styles.heroDesc}>
                Evidence-based personal training, nutrition, and performance
                coaching custom-built around your body, your lifestyle, and your
                goals. We design training systems that work.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link href="/onlinebooking" className="btn btn-primary">
                  Apply For Coaching
                </Link>
                <Link href="/services" className="btn btn-secondary">
                  Explore Services
                </Link>
              </div>
              <div className={styles.heroMeta}>
                <span className={styles.heroMetaIcon}>📍</span>
                <span>
                  Based in Casablanca, Maroc & Available Globally Online
                </span>
              </div>
            </div>
            <div className={styles.heroImageContainer}>
              <Image
                src="/images/yasin_pt.jpg"
                alt="Yasin - Founder and Coach of Anfa Training"
                fill
                className={styles.heroImage}
                priority
              />
              <div className={styles.heroImageOverlay}></div>
            </div>
          </div>
        </section>

        {/* Credentials / About Intro */}
        <section className={`${styles.certSection} section-padding`}>
          <div className={`container ${styles.certGrid}`}>
            <div className={styles.certImageContainer}>
              <Image
                src="/images/yasin_boxing.png"
                alt="Yasin Training Muay Thai Boxing"
                fill
                className={styles.certImage}
              />
            </div>
            <div className={styles.certText}>
              <h2>Certified Trainer & Coach</h2>
              <p>
                With over 20 years of practical experience across strength
                training, combat sports, and rehabilitation, I hold an
                international license with EuropeActive (EREPS) qualifications.
                I provide professional fitness and health promotion systems
                tailored for each client.
              </p>
              <div className={styles.certList}>
                <div className={styles.certItem}>
                  <span>🏆</span> EuropeActive EQF Level 4 PT
                </div>
                <div className={styles.certItem}>
                  <span>🍎</span> Certified Nutritionist
                </div>
                <div className={styles.certItem}>
                  <span>⚽</span> FIFA Medical Network Coach
                </div>
                <div className={styles.certItem}>
                  <span>🥊</span> Muay Thai & MMA Specialist
                </div>
                <div className={styles.certItem}>
                  <span>🎓</span> Health Promotion Specialist
                </div>
                <div className={styles.certItem}>
                  <span>💆</span> Sports Massage Practitioner
                </div>
              </div>
              <div style={{ marginTop: "32px" }}>
                <Link href="/about-me" className="btn btn-outline">
                  Read My Full Story
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Box */}
        <section className="section-padding styles.philosophy">
          <div className="container">
            <div className={styles.philosophyBox}>
              <h2>Anfa Training Philosophy</h2>
              <h3 className={styles.philosophyQuote}>
                Train Hard. Eat Healthy. Sleep Well. Have Fun. Get Results.
              </h3>
              <p className={styles.philosophyDesc}>
                We want to be more than a company that just sells services that
                make you move. We want to help you adopt a healthier lifestyle
                as it is the best investment you can make in your life.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="section-padding">
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>Core Training Programs</h2>
              <p>
                We build specialized training and nutritional systems structured
                to deliver lasting results.
              </p>
            </div>
            <div className={styles.servicesGrid}>
              {/* Service 1 */}
              <div className={`${styles.serviceCard} card`}>
                <div className={styles.serviceIconWrapper}>01</div>
                <h3>1:1 Gym Coaching</h3>
                <p>
                  Personalized training and technique refinement in Casablanca.
                  Train with purpose and custom-made structure to achieve your
                  goals.
                </p>
                <Link href="/services#gym" className={styles.serviceLink}>
                  Details <span>→</span>
                </Link>
              </div>

              {/* Service 2 */}
              <div className={`${styles.serviceCard} card`}>
                <div className={styles.serviceIconWrapper}>02</div>
                <h3>Online Performance</h3>
                <p>
                  Custom training systems, nutritional planning, and daily
                  check-ins on our custom coaching application. Train seriously
                  from anywhere.
                </p>
                <Link href="/services#online" className={styles.serviceLink}>
                  Details <span>→</span>
                </Link>
              </div>

              {/* Service 3 */}
              <div className={`${styles.serviceCard} card`}>
                <div className={styles.serviceIconWrapper}>03</div>
                <h3>Muay Thai & MMA</h3>
                <p>
                  Improve your fighting skills, learn effective self-defense,
                  and build athletic endurance from an elite combat sports
                  preparation coach.
                </p>
                <Link
                  href="/services#martial-arts"
                  className={styles.serviceLink}
                >
                  Details <span>→</span>
                </Link>
              </div>

              {/* Service 4 */}
              <div className={`${styles.serviceCard} card`}>
                <div className={styles.serviceIconWrapper}>04</div>
                <h3>Extreme Bodyweight (EBT)</h3>
                <p>
                  Performance-based bodyweight training using high-repetition
                  structured progressions to build real functional strength and
                  control.
                </p>
                <Link href="/services#ebt" className={styles.serviceLink}>
                  Details <span>→</span>
                </Link>
              </div>

              {/* Service 5 */}
              <div className={`${styles.serviceCard} card`}>
                <div className={styles.serviceIconWrapper}>05</div>
                <h3>Morocco Bootcamp Retreat</h3>
                <p>
                  All-inclusive intensive fitness adventure in Bouznika,
                  Morocco. Savor healthy custom meals, daily training, and yoga.
                </p>
                <Link href="/camps" className={styles.serviceLink}>
                  Details <span>→</span>
                </Link>
              </div>

              {/* Service 6 */}
              <div className={`${styles.serviceCard} card`}>
                <div className={styles.serviceIconWrapper}>06</div>
                <h3>Analyses & Tests</h3>
                <p>
                  From posture analysis and movement screens to detailed
                  metabolic and nutritional planning to optimize your daily
                  recovery.
                </p>
                <Link href="/services#tests" className={styles.serviceLink}>
                  Details <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Focus Areas Detail Section */}
        <section className={`${styles.focusSection} section-padding`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>Performance Coaching Focus</h2>
              <p>
                My coaching methodologies are backed by science and proven by
                20+ years of training athletes and beginners.
              </p>
            </div>
            <div className={styles.focusGrid}>
              {/* Item 1 */}
              <div className={styles.focusItem}>
                <div className={styles.focusImageContainer}>
                  <Image
                    src="/images/fitness.png"
                    alt="Fitness and Strength Training"
                    fill
                    className={styles.focusImage}
                  />
                </div>
                <div className={styles.focusText}>
                  <h3>Fitness & Strength</h3>
                  <p>
                    Build strength, improve your physique, and train with
                    purpose through a structured performance approach. This is
                    not random workouts, but a system combining progressive
                    strength training, hypertrophy protocols, and injury
                    prevention. Whether you are starting out or an experienced
                    lifter, you will train smarter and move better.
                  </p>
                  <Link href="/prices" className="btn btn-secondary">
                    View Pricing
                  </Link>
                </div>
              </div>

              {/* Item 2 */}
              <div className={styles.focusItem}>
                <div className={styles.focusImageContainer}>
                  <Image
                    src="/images/crossfit.png"
                    alt="Athletic Training"
                    fill
                    className={styles.focusImage}
                  />
                </div>
                <div className={styles.focusText}>
                  <h3>Athletic Training</h3>
                  <p>
                    Train like an athlete with a system built for pure
                    performance. Develop raw power, speed, agility, and stamina
                    through structured, high-quality training. Every session has
                    a clear purpose: to improve how you move, increase sports
                    performance, and keep you injury-free. Take your training
                    beyond standard fitness.
                  </p>
                  <Link href="/services" className="btn btn-secondary">
                    View Programs
                  </Link>
                </div>
              </div>

              {/* Item 3 */}
              <div className={styles.focusItem}>
                <div className={styles.focusImageContainer}>
                  <Image
                    src="/images/bodyweight.png"
                    alt="Extreme Bodyweight Training"
                    fill
                    className={styles.focusImage}
                  />
                </div>
                <div className={styles.focusText}>
                  <h3>Extreme Bodyweight Training (EBT)</h3>
                  <p>
                    EBT is a performance-based bodyweight training system
                    designed to build incredible strength, control, and muscular
                    endurance. Using high-repetition structures and precise
                    progressions, you develop functional strength without
                    relying on heavy weights or machines. It pushes your limits
                    through precision and control.
                  </p>
                  <Link href="/onlinebooking" className="btn btn-primary">
                    Book EBT Session
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Detailed Panel */}
        <section className={`${styles.wygSection} section-padding`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2>What You Get With Anfa Training</h2>
              <p>
                Professional guidance and comprehensive support resources are
                integrated into every coaching program.
              </p>
            </div>
            <div className={styles.wygGrid}>
              <div className={styles.wygCard}>
                <h3>Performance Online</h3>
                <ul className={styles.wygList}>
                  <li>Custom-made training protocols</li>
                  <li>Tailored nutrition and hydration planning</li>
                  <li>Mobile application access with video tutorials</li>
                  <li>Weekly progress reports and adjustments</li>
                  <li>Daily consultation and message access to Coach Yasin</li>
                </ul>
              </div>

              <div className={styles.wygCard}>
                <h3>1:1 Gym Coaching</h3>
                <ul className={styles.wygList}>
                  <li>
                    Full access to private training facility in Casablanca
                  </li>
                  <li>
                    Initial 60-minute comprehensive movement screen &
                    consultation
                  </li>
                  <li>55-minute intense 1:1 coaching sessions</li>
                  <li>Direct form adjustment and technique correction</li>
                  <li>Progressive load tracking</li>
                </ul>
              </div>

              <div className={styles.wygCard}>
                <h3>Hybrid Performance</h3>
                <ul className={styles.wygList}>
                  <li>Combination of 1:1 sessions and online app coaching</li>
                  <li>
                    All-inclusive training, nutrition & recovery protocols
                  </li>
                  <li>Rooftop yoga, running, and conditioning support</li>
                  <li>Bi-weekly posture checks</li>
                  <li>24/7 accountability check-ins</li>
                </ul>
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
              Ready to Build Your System?
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                maxWidth: "600px",
                margin: "0 auto 32px",
                fontSize: "17px",
              }}
            >
              Get started with a free 60-minute consultation meeting to analyze
              your goals, posture, and design your personal roadmap.
            </p>
            <div
              style={{ display: "flex", gap: "16px", justifyContent: "center" }}
            >
              <Link href="/onlinebooking" className="btn btn-primary">
                Apply For Consultation
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Send Us A Message
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
