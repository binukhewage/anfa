"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function OnlineBooking() {
  const [isLoading, setIsLoading] = useState(true);
  const [iframeUrl, setIframeUrl] = useState("https://anfatraining.com/onlinebooking/");

  useEffect(() => {
    // Check if there is an environment variable override for the booking URL
    if (process.env.NEXT_PUBLIC_BOOKING_URL) {
      setIframeUrl(process.env.NEXT_PUBLIC_BOOKING_URL);
    }
  }, []);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <Header />
      <main style={{ paddingTop: "80px", background: "var(--background)", minHeight: "100vh" }}>
        {/* Banner */}
        <section className="page-banner">
          <div className="container">
            <span style={{ color: "var(--primary)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "14px" }}>
              Secure Scheduler
            </span>
            <h1 style={{ marginTop: "8px" }}>Online Booking</h1>
            <p>Schedule your next training, consultation, or sports massage session instantly.</p>
          </div>
        </section>

        {/* Booking Widget Wrapper */}
        <section style={{ padding: "60px 0" }}>
          <div className="container" style={{ maxWidth: "1000px" }}>
            <div 
              className="card" 
              style={{ 
                padding: "24px", 
                background: "var(--card-bg)", 
                borderRadius: "20px", 
                border: "1px solid var(--card-border)", 
                boxShadow: "var(--shadow)",
                position: "relative",
                minHeight: "650px",
                overflow: "hidden"
              }}
            >
              {/* Premium Loading Spinner */}
              {isLoading && (
                <div 
                  style={{ 
                    position: "absolute", 
                    top: 0, 
                    left: 0, 
                    right: 0, 
                    bottom: 0, 
                    background: "var(--card-bg)", 
                    display: "flex", 
                    flexDirection: "column",
                    alignItems: "center", 
                    justifyContent: "center",
                    zIndex: 10,
                    transition: "opacity 0.3s ease"
                  }}
                >
                  <div 
                    style={{ 
                      width: "50px", 
                      height: "50px", 
                      borderRadius: "50%", 
                      border: "3px solid rgba(255, 107, 0, 0.1)", 
                      borderTop: "3px solid var(--primary)",
                      animation: "spin 1s linear infinite",
                      marginBottom: "16px"
                    }}
                  />
                  <p style={{ color: "var(--text-muted)", fontSize: "15px", fontFamily: "var(--font-headings)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Loading Booking Calendar...
                  </p>
                  
                  {/* Embedded Spin Animation keyframe helper style block */}
                  <style jsx global>{`
                    @keyframes spin {
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                    }
                  `}</style>
                </div>
              )}

              {/* Secure Amelia Iframe */}
              <iframe
                src={iframeUrl}
                onLoad={handleIframeLoad}
                style={{ 
                  width: "100%", 
                  height: "750px", 
                  border: "none",
                  borderRadius: "12px",
                  background: "transparent"
                }}
                title="Amelia Online Booking Scheduler"
                allow="payment; payment-handler; clipboard-write"
              />
            </div>

            {/* Quick Notes / Disclaimer */}
            <div style={{ marginTop: "24px", textAlign: "center", color: "var(--text-muted)", fontSize: "13px" }}>
              <p>🔒 All transactions are secured and processed using Stripe. 24-hour cancellation rules apply.</p>
              <p style={{ marginTop: "4px" }}>Having trouble booking? Feel free to <a href="/contact" style={{ color: "var(--primary)", fontWeight: 600 }}>send us a direct message</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
