const placeholderTestimonials = [
  {
    quote: "Replace this text with an approved statement describing the client’s experience, the problem addressed, and the result.",
    name: "Approved Client Name",
    role: "Law Firm, Government Agency, Healthcare, or Tax Organization"
  },
  {
    quote: "Use a concise, authentic quote that highlights trust, communication, discretion, responsiveness, or technical improvement.",
    name: "Approved Client Name",
    role: "Private Investigation, Education, or Professional Services"
  },
  {
    quote: "Only publish testimonials and organization names after receiving written permission from the client.",
    name: "Approved Client Name",
    role: "Client Title or Organization Type"
  }
];

export default function Testimonials({
  eyebrow = "Client perspective",
  title = "Trusted guidance for sensitive environments.",
  intro = "This section is ready for approved client testimonials. The starter text is intentionally marked so no endorsement is implied before permission is received.",
  testimonials = placeholderTestimonials
}) {
  return (
    <section className="testimonials section-pad">
      <div className="container">
        <div className="testimonial-heading">
          <div>
            <p className="section-kicker">{eyebrow}</p>
            <h2>{title}</h2>
          </div>
          <p>{intro}</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <figure className="testimonial-card" key={`${item.name}-${index}`}>
              <div className="testimonial-stars" aria-label="Testimonial placeholder">★★★★★</div>
              <blockquote>“{item.quote}”</blockquote>
              <figcaption>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
                <small>TESTIMONIAL PLACEHOLDER — REPLACE BEFORE PUBLISHING</small>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
