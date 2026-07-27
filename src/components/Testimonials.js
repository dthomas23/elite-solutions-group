const placeholderTestimonials = [
  {
    quote: "Add a real client quote here about the quality of the work, communication, or support provided.",
    name: "Client name with approval",
    role: "Organization or industry"
  },
  {
    quote: "Add a real client quote here about trust, responsiveness, security, or solving a difficult technology problem.",
    name: "Client name with approval",
    role: "Organization or industry"
  },
  {
    quote: "Add a real client quote here about monthly support, reporting, computer refreshes, or technology recommendations.",
    name: "Client name with approval",
    role: "Organization or industry"
  }
];

export default function Testimonials({ testimonials = placeholderTestimonials }) {
  return (
    <section className="testimonials section-pad">
      <div className="container">
        <div className="testimonial-heading">
          <div>
            <p className="section-kicker">Client feedback</p>
            <h2>What clients say about the work.</h2>
          </div>
          <p>Replace these three sample cards with real quotes after the client gives permission to use their name or organization.</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <figure className="testimonial-card" key={`${item.name}-${index}`}>
              <div className="testimonial-stars" aria-hidden="true">★★★★★</div>
              <blockquote>“{item.quote}”</blockquote>
              <figcaption>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
                <small>REPLACE WITH AN APPROVED TESTIMONIAL</small>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
