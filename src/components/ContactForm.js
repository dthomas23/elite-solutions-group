"use client";

import { useState } from "react";

const BUSINESS_EMAIL = "hello@elitesolutionsgroup.com";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const company = data.get("company");
    const email = data.get("email");
    const service = data.get("service");
    const message = data.get("message");

    const subject = encodeURIComponent(`Consultation request: ${service}`);
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nService: ${service}\n\nProject details:\n${message}`
    );

    setStatus("Your email application is opening with your consultation request.");
    window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>
          Name
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Organization
          <input name="company" type="text" autoComplete="organization" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Area of interest
          <select name="service" defaultValue="IT Consulting">
            <option>IT Consulting</option>
            <option>Monthly Managed IT Services</option>
            <option>Computer Refresh or Installation</option>
            <option>Cybersecurity</option>
            <option>Compliance Readiness</option>
            <option>Networking & Infrastructure</option>
            <option>Cloud & Endpoint Management</option>
            <option>Web & Application Solutions</option>
          </select>
        </label>
      </div>
      <label>
        How can we help?
        <textarea name="message" rows="6" required />
      </label>
      <button className="button primary full" type="submit">Request a Consultation</button>
      {status && <p className="form-status" role="status">{status}</p>}
      <p className="form-note">Before launch, replace the placeholder business email in <code>src/components/ContactForm.js</code>.</p>
    </form>
  );
}
