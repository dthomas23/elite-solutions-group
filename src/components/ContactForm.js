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

    const subject = encodeURIComponent(`Elite Solutions Group inquiry: ${service}`);
    const body = encodeURIComponent(
      `Name: ${name}\nOrganization: ${company}\nEmail: ${email}\nService needed: ${service}\n\nWhat is going on:\n${message}`
    );

    setStatus("Your email program is opening with the information you entered.");
    window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>
          Your name
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
          What do you need help with?
          <select name="service" defaultValue="IT Consulting">
            <option>IT Consulting</option>
            <option>Monthly IT Support</option>
            <option>Computer Refresh or Setup</option>
            <option>Cybersecurity</option>
            <option>Compliance Technology Support</option>
            <option>Network or Firewall Work</option>
            <option>Cloud or Endpoint Management</option>
            <option>Website or Application Work</option>
          </select>
        </label>
      </div>
      <label>
        Tell me what is going on
        <textarea name="message" rows="6" required />
      </label>
      <button className="button primary full" type="submit">Send Your Request</button>
      {status && <p className="form-status" role="status">{status}</p>}
      <p className="form-note">Update the business email in <code>src/components/ContactForm.js</code> before publishing the final site.</p>
    </form>
  );
}
