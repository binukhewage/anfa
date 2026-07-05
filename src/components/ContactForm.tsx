"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "online",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "online",
      message: "",
    });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {isSuccess ? (
        <div className={styles.successMsg}>
          <h3>Message Sent!</h3>
          <p>Thank you for reaching out. Yasin will contact you within 24 hours.</p>
        </div>
      ) : (
        <>
          <div className={styles.row}>
            <div className={styles.group}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder="Your Name"
              />
            </div>
            <div className={styles.group}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.group}>
              <label htmlFor="phone" className={styles.label}>
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
                placeholder="+212 (0) 6..."
              />
            </div>
            <div className={styles.group}>
              <label htmlFor="service" className={styles.label}>
                Interested In
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="online">Online Coaching</option>
                <option value="gym">1:1 Gym Coaching</option>
                <option value="bootcamp">Morocco Bootcamp Retreat</option>
                <option value="martial-arts">Muay Thai & MMA</option>
                <option value="ebt">Extreme Bodyweight Training (EBT)</option>
                <option value="massage">Sports Massage</option>
                <option value="other">Other / General Inquiry</option>
              </select>
            </div>
          </div>

          <div className={styles.group}>
            <label htmlFor="message" className={styles.label}>
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.textarea}
              placeholder="Tell me about your fitness level, goals, and any injuries or constraints..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`btn btn-primary ${styles.submitBtn}`}
          >
            {isSubmitting ? "Sending..." : "Submit Application"}
          </button>
        </>
      )}
    </form>
  );
}
