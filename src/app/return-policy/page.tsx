import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Return Policy | Anfa Training",
  description: "Read the cancellation and return policy rules for Anfa Training services and retreats.",
};

export default function ReturnPolicy() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "80px" }}>
        <section className="page-banner">
          <div className="container">
            <span style={{ color: "var(--primary)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "14px" }}>
              Legal Information
            </span>
            <h1 style={{ marginTop: "8px" }}>Return Policy</h1>
            <p>Right of Cancellation and Return Policy rules.</p>
          </div>
        </section>

        <section style={{ background: "var(--background)", padding: "60px 0" }}>
          <div className="container" style={{ maxWidth: "800px" }}>
            <h2 style={{ fontSize: "24px", color: "var(--text-light)", textTransform: "uppercase", marginTop: "32px", marginBottom: "16px" }}>RIGHT OF CANCELLATION/RETURN</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: "1.7", marginBottom: "16px" }}>RIGHT OF CANCELLATION/RETURN</p>
            <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: "1.7", marginBottom: "16px" }}>• Right of withdrawal when buying on the internet - According to the Distance Contracts Act (2005:59), you as a private person have the right to withdraw or complain about your purchase within 14 days after you received the item/made your exercise notification (the withdrawal period). If you regret your purchase, it is important that you contact us via the contact form on the website. Note. we do not trigger complaints locally in individual locations or via our instructors.</p>
            <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: "1.7", marginBottom: "16px" }}>• The right of withdrawal only applies to unused goods in the original box and with labels remaining. When registering for a training session, the right of withdrawal only applies if the training session or Bootcamp has not started. Gift cards and processed products such as printed clothing and sale items cannot be returned. These are not included in open purchase.</p>
            <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: "1.7", marginBottom: "16px" }}>• When exercising the right of withdrawal, the item must be returned/sent back to Anfa Training within 14 days of receiving the item. The buyer is responsible for the return cost. The product was sent in return to the address: (For Morocco) Anfa Training S.A.R.L 12 rue Saria Ben Zounaim Etg. 3 appt 3 palmier Casablanca Maroc. (For Europe) Anfa Training C/O Soleus Invest Travessera de Gracia 278, local 5 08025 Barcelona Spain.</p>
            <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: "1.7", marginBottom: "16px" }}>• Reimbursement is made without delay and no later than 30 days after the buyer&#x27;s notification that the contract has been withdrawn, provided that ANFA TRAINING has received the goods in return, or a receipt that the goods have been sent back within the cancellation period (14 days).</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
