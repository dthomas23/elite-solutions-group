import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";
import Reveal from "@/components/Reveal";

const services = [
  ["01", "IT Consulting & Analysis", "Technology assessments, monthly security posture reporting, modernization roadmaps, recommendations, vendor coordination, and executive-level guidance."],
  ["02", "Cybersecurity & Cybercrime Readiness", "Vulnerability reviews, endpoint safeguards, identity protection, incident preparation, cybercrime risk awareness, and remediation planning."],
  ["03", "Compliance & Legal-Sector Technology", "Gap reviews, evidence preparation, policy support, technical safeguards, confidentiality-focused workflows, and partner coordination."],
  ["04", "Managed IT & Monthly Maintenance", "Windows updates, computer refreshes, software installation, endpoint checks, network and firewall reviews, documentation, and recurring support."],
  ["05", "Cloud, Network & Infrastructure", "Microsoft 365, Azure, AWS, Intune, Entra ID, Wi-Fi, VPNs, Windows and Linux servers, backups, and recovery planning."],
  ["06", "Web & Application Solutions", "Responsive websites, Node.js and JavaScript applications, internal portals, dashboards, databases, and workflow automation."]
];

const industries = ["Law Firms & Legal Services", "Private Investigators", "Government & Public Sector", "Healthcare Organizations", "Tax & Financial Services", "Education & Research"];

const monthlyServices = [
  "Security posture analysis and recommendations",
  "Windows and application update oversight",
  "Endpoint protection and device health reviews",
  "Network, Wi-Fi, VPN, and firewall reviews",
  "Backup and recovery verification",
  "Microsoft 365, Azure, AWS, Intune, and Entra support",
  "Technology inventory and change documentation",
  "Monthly or quarterly leadership reports"
];

const pricing = [
  ["Windows Computer Refresh", "$150", "Operating system refresh, updates, drivers, and basic configuration."],
  ["Refresh + Data Migration", "$175+", "Computer refresh with standard user-file transfer and setup."],
  ["New Computer Setup", "$150+", "Updates, account setup, approved applications, and security configuration."],
  ["Security Health Check", "$250+", "Focused review of endpoint, identity, updates, protection, and immediate risks."],
  ["Network Assessment", "$350+", "Review of connectivity, Wi-Fi, firewall, addressing, and improvement priorities."],
  ["Compliance Readiness Review", "$500+", "Technical gap review, prioritized recommendations, and documentation guidance."]
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-grid" />
          <div className="hero-glow" />
          <div className="orb orb-one" /><div className="orb orb-two" />
          <div className="scan-line" />
          <div className="container hero-content">
            <div className="eyebrow hero-enter"><span /> Legal-Sector IT • Cybersecurity • Managed Services</div>
            <h1 className="hero-enter delay-one">Technology leadership<br />for organizations that<br /><em>cannot afford downtime.</em></h1>
            <p className="hero-lead hero-enter delay-two">Elite Solutions Group provides security-conscious IT consulting, recurring technology management, compliance readiness, networking, endpoint protection, cloud support, and practical analysis for organizations handling confidential and regulated information.</p>
            <div className="hero-actions hero-enter delay-three">
              <Link className="button primary" href="#contact">Schedule a Consultation</Link>
              <Link className="button secondary" href="#managed-services">View Managed Services</Link>
            </div>
            <div className="trust-row hero-enter delay-four">
              <span>Assessment-led</span><span>Security-focused</span><span>Legally aware</span><span>Partner-enabled</span>
            </div>
          </div>
        </section>

        <section className="statement section-pad">
          <Reveal className="container statement-grid">
            <p className="section-kicker">More than ordinary computer support.</p>
            <h2>Technical guidance shaped by confidentiality, evidence, risk, and responsibility.</h2>
            <p>Legal, investigative, government, healthcare, tax, and educational environments require thoughtful documentation, secure access, responsible data handling, cybercrime awareness, and clear escalation. We combine hands-on technical work with analysis, recommendations, and specialized partner support when required.</p>
          </Reveal>
        </section>

        <section id="services" className="services section-pad">
          <div className="container">
            <Reveal className="section-heading"><div><p className="section-kicker">Core capabilities</p><h2>Services built around real operational risk.</h2></div><Link href="/services">View full service details →</Link></Reveal>
            <div className="service-grid">
              {services.map(([number, title, copy], index) => (
                <Reveal key={title} delay={index * 70}>
                  <article className="service-card"><span className="service-number">{number}</span><div className="service-icon">↗</div><h3>{title}</h3><p>{copy}</p></article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="managed-services" className="managed section-pad">
          <div className="container managed-grid">
            <Reveal><p className="section-kicker">Managed IT & compliance updates</p><h2>Ongoing technology oversight without hiring a full-time IT director.</h2><p className="managed-intro">We can serve as a scheduled technology advisor and hands-on support resource—reviewing your environment, reporting on security posture, recommending improvements, and completing approved updates, refreshes, installations, and infrastructure changes.</p><Link className="button primary" href="#contact">Request a Monthly Plan</Link></Reveal>
            <Reveal delay={120} className="managed-panel"><div className="signal"><span /><span /><span /><b>MONTHLY SERVICE STATUS</b></div><ul>{monthlyServices.map((item) => <li key={item}>{item}</li>)}</ul></Reveal>
          </div>
        </section>

        <section className="pricing section-pad">
          <div className="container">
            <Reveal className="pricing-heading"><div><p className="section-kicker">Project pricing</p><h2>Clear starting points for common technology work.</h2></div><p>Final pricing depends on device condition, data volume, licensing, travel, urgency, and scope. Business environments may require a written assessment before work begins.</p></Reveal>
            <div className="pricing-grid">
              {pricing.map(([name, price, description], index) => <Reveal key={name} delay={index * 60}><article className="price-card"><span>{name}</span><strong>{price}</strong><p>{description}</p></article></Reveal>)}
            </div>
            <Reveal className="monthly-note"><strong>Monthly managed services:</strong><span> Customized after an environment review, device count, support hours, security requirements, and reporting needs are confirmed.</span></Reveal>
          </div>
        </section>

        <section id="process" className="process section-pad"><div className="container"><Reveal><p className="section-kicker">How we work</p><h2>A disciplined path from uncertainty to improvement.</h2></Reveal><div className="process-grid">{[["01","Assess","We review your technology, risks, business needs, documentation, and immediate challenges."],["02","Plan","You receive a prioritized roadmap, recommendations, pricing, defined scope, and clear next steps."],["03","Implement & Report","We complete approved work, document changes, coordinate partners, and provide actionable updates."]].map(([n,t,c],i)=><Reveal key={t} delay={i*100}><article><span>{n}</span><h3>{t}</h3><p>{c}</p></article></Reveal>)}</div></div></section>

        <section id="industries" className="industries section-pad"><div className="container industries-grid"><Reveal><p className="section-kicker">Who we serve</p><h2>Technology support for organizations where trust and documentation matter.</h2></Reveal><Reveal delay={100} className="industry-list">{industries.map((industry) => <span key={industry}>{industry}<b>+</b></span>)}</Reveal></div></section>

        <section id="about" className="about section-pad"><div className="container about-grid"><Reveal className="founder-card"><div className="founder-monogram">DT</div><div><strong>David Thomas</strong><span>Founder & Lead Technology Consultant</span></div></Reveal><Reveal delay={120}><p className="section-kicker">Leadership</p><h2>Technical capability with an understanding of regulated and legally sensitive work.</h2><p>Elite Solutions Group is led by an IT and cybersecurity professional, technology educator, and U.S. Army veteran with experience across networking, cloud platforms, endpoint management, Windows and Linux systems, cybercrime concepts, security documentation, web and mobile development, and technology environments where privacy and accountability matter.</p><p>We assess, explain, recommend, implement, document, and coordinate. When an engagement requires legal interpretation, certification, formal digital forensics, or advanced penetration testing, we work within an authorized scope and coordinate qualified professionals. Elite Solutions Group does not provide legal advice.</p><div className="skills"><span>Azure</span><span>AWS</span><span>Microsoft 365</span><span>Intune</span><span>Linux</span><span>Networking</span><span>Node.js</span><span>Cybersecurity</span><span>Cybercrime Awareness</span><span>Legal-Sector IT</span></div></Reveal></div></section>

        <section className="security-banner"><div className="container banner-grid"><div><p className="section-kicker">Security and compliance</p><h2>Preparation—not empty promises.</h2></div><p>We help identify gaps, implement practical safeguards, improve documentation, and prepare technical evidence. We support compliance readiness but do not certify compliance or issue legal opinions. Formal audits, legal interpretations, digital forensics, and advanced penetration tests may be delivered with qualified partners.</p></div></section>

        <Testimonials title="Technology support built for trust, discretion, and accountability." intro="Add approved feedback from legal, investigative, government, healthcare, tax, education, and professional-service clients. Never publish a client name or endorsement without permission." />

        <section id="contact" className="contact section-pad"><div className="container contact-grid"><Reveal><p className="section-kicker">Start a conversation</p><h2>Let’s identify what your organization needs next.</h2><p>Tell us about your environment, security concerns, monthly support needs, or upcoming project. We’ll recommend a practical and responsible path forward.</p><div className="contact-detail"><span>Service area</span><strong>Houston and remote consulting</strong></div><div className="contact-detail"><span>Engagements</span><strong>Assessments, projects, refreshes, and managed support</strong></div></Reveal><Reveal delay={100}><ContactForm /></Reveal></div></section>
      </main>
      <Footer />
    </>
  );
}
