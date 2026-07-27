import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";
import Reveal from "@/components/Reveal";

const services = [
  ["01", "IT Consulting", "I review what you already have, explain what is working, point out what needs attention, and give you a practical plan."],
  ["02", "Cybersecurity", "Endpoint protection, account security, MFA, vulnerability reviews, security updates, and help reducing everyday cyber risk."],
  ["03", "Compliance Support", "I help organize the technical side of compliance, document controls, identify gaps, and prepare clients for the next step."],
  ["04", "Monthly IT Support", "Regular updates, computer refreshes, software installs, device checks, network reviews, firewall updates, and written recommendations."],
  ["05", "Networks, Cloud & Servers", "Support for Microsoft 365, Azure, AWS, Intune, Entra ID, Windows, Linux, Wi-Fi, VPNs, backups, and virtual environments."],
  ["06", "Web & Application Work", "Business websites, JavaScript and Node.js applications, internal forms, dashboards, databases, and simple workflow tools."]
];

const industries = [
  "Law Firms & Legal Offices",
  "Private Investigators",
  "Healthcare Organizations",
  "Tax & Accounting Offices",
  "Government & Public Service",
  "Schools, Colleges & Nonprofits"
];

const monthlyServices = [
  "Windows, driver, and application updates",
  "Computer refreshes and new-device setup",
  "Endpoint protection and device health checks",
  "Network, Wi-Fi, VPN, and firewall reviews",
  "Microsoft 365, Azure, AWS, Intune, and Entra support",
  "Backup and recovery checks",
  "Security posture updates and recommendations",
  "Monthly or quarterly reports for leadership"
];

const pricing = [
  ["Windows Computer Refresh", "$150", "Windows refresh, updates, drivers, and basic setup."],
  ["Refresh + Data Migration", "$175+", "Computer refresh with standard user-file transfer and setup."],
  ["New Computer Setup", "$150+", "Updates, user account setup, approved software, and basic security settings."],
  ["Security Health Check", "$250+", "A focused review of updates, protection, accounts, MFA, and immediate concerns."],
  ["Network Assessment", "$350+", "A review of connectivity, Wi-Fi, firewall settings, addressing, and improvement needs."],
  ["Compliance Technology Review", "$500+", "A technical gap review with priorities, recommendations, and documentation support."]
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
            <div className="eyebrow hero-enter"><span /> IT Support • Cybersecurity • Compliance</div>
            <h1 className="hero-enter delay-one">Technology support for businesses that handle <em>sensitive information.</em></h1>
            <p className="hero-lead hero-enter delay-two">
              Elite Solutions Group helps law firms, private investigators, healthcare offices, tax professionals, schools, and public organizations keep their computers, networks, accounts, and data in better shape.
            </p>
            <div className="hero-actions hero-enter delay-three">
              <Link className="button primary" href="#contact">Talk About Your IT Needs</Link>
              <Link className="button secondary" href="#managed-services">View Monthly Services</Link>
            </div>
            <div className="trust-row hero-enter delay-four">
              <span>Clear advice</span><span>Hands-on support</span><span>Security focused</span><span>Partner support when needed</span>
            </div>
          </div>
        </section>

        <section className="statement section-pad">
          <Reveal className="container statement-grid">
            <p className="section-kicker">What makes this different</p>
            <h2>You are not just getting somebody who fixes computers.</h2>
            <p>
              I understand that some organizations work with confidential records, client files, medical information, tax documents, investigations, and legal matters. I look at the technology, the security risk, the documentation, and the business need together. Then I explain what needs to be done in plain language.
            </p>
          </Reveal>
        </section>

        <section id="services" className="services section-pad">
          <div className="container">
            <Reveal className="section-heading">
              <div><p className="section-kicker">What I do</p><h2>Real support for the technology your organization uses every day.</h2></div>
              <Link href="/services">See all services →</Link>
            </Reveal>
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
            <Reveal>
              <p className="section-kicker">Monthly IT service</p>
              <h2>Ongoing support without hiring a full-time IT person.</h2>
              <p className="managed-intro">
                Some clients need somebody who can come in on a regular schedule, check the environment, handle updates, review security, give an honest report, and recommend what should happen next. That is a service I already provide.
              </p>
              <Link className="button primary" href="#contact">Ask About Monthly Support</Link>
            </Reveal>
            <Reveal delay={120} className="managed-panel">
              <div className="signal"><span /><span /><span /><b>MONTHLY SERVICE CHECKLIST</b></div>
              <ul>{monthlyServices.map((item) => <li key={item}>{item}</li>)}</ul>
            </Reveal>
          </div>
        </section>

        <section className="pricing section-pad">
          <div className="container">
            <Reveal className="pricing-heading">
              <div><p className="section-kicker">Starting prices</p><h2>Simple pricing for common computer work.</h2></div>
              <p>These are starting prices. Business networks, older equipment, large data transfers, travel, licensing, and urgent work may change the final cost.</p>
            </Reveal>
            <div className="pricing-grid">
              {pricing.map(([name, price, description], index) => (
                <Reveal key={name} delay={index * 60}><article className="price-card"><span>{name}</span><strong>{price}</strong><p>{description}</p></article></Reveal>
              ))}
            </div>
            <Reveal className="monthly-note"><strong>Monthly support:</strong><span> Pricing is based on the number of devices, locations, support hours, security needs, and reporting required.</span></Reveal>
          </div>
        </section>

        <section id="process" className="process section-pad">
          <div className="container">
            <Reveal><p className="section-kicker">How I work</p><h2>I look at the problem first. Then we decide what makes sense.</h2></Reveal>
            <div className="process-grid">
              {[
                ["01", "Review", "I look at the computers, accounts, network, security settings, documentation, and the problem you are trying to solve."],
                ["02", "Explain", "I tell you what I found, what needs attention now, what can wait, and what the options are."],
                ["03", "Handle the Work", "I complete the work that fits my scope and bring in a trusted specialist when another area of expertise is needed."]
              ].map(([n, t, c], i) => <Reveal key={t} delay={i * 100}><article><span>{n}</span><h3>{t}</h3><p>{c}</p></article></Reveal>)}
            </div>
          </div>
        </section>

        <section id="industries" className="industries section-pad">
          <div className="container industries-grid">
            <Reveal><p className="section-kicker">Who I work with</p><h2>Organizations that need dependable IT and take privacy seriously.</h2></Reveal>
            <Reveal delay={100} className="industry-list">{industries.map((industry) => <span key={industry}>{industry}<b>+</b></span>)}</Reveal>
          </div>
        </section>

       <section id="about" className="about section-pad">
  <div className="container about-grid">
    <Reveal className="founder-card">
      <div className="founder-monogram">60+</div>

      <div>
        <strong>Years of Combined Experience</strong>
        <span>IT • Cybersecurity • Cloud • Infrastructure</span>
      </div>
    </Reveal>

    <Reveal delay={120}>
      <p className="section-kicker">About Elite Solutions Group</p>

      <h2>
        Experienced consultants who understand the technology, the risk,
        and the environment behind the work.
      </h2>

      <p>
        Elite Solutions Group brings together consultants with more than
        16 years of combined experience in information technology,
        cybersecurity, networking, cloud platforms, Windows and Linux
        systems, endpoint management, application development, and
        technology operations.
      </p>

      <p>
        The consulting team supports organizations where privacy,
        documentation, access control, and business continuity matter.
        This includes law firms, private investigators, healthcare
        offices, tax and accounting organizations, higher education
        institutions, government offices, nonprofits, and growing
        businesses.
      </p>

      <p>
        Our consultants understand how cybercrime, privacy requirements,
        evidence handling, incident documentation, and legal obligations
        can affect technology decisions. Each engagement begins with
        understanding how the organization operates, where risk exists,
        and what improvements are practical.
      </p>

      <p>
        Elite Solutions Group provides recommendations, completes work
        within the agreed scope, and coordinates with qualified legal,
        compliance, forensic, or cybersecurity partners when an
        engagement requires additional specialization.
      </p>

      <div className="skills">
        <span>Cloud Platforms</span>
        <span>Windows Systems</span>
        <span>Linux Systems</span>
        <span>Endpoint Management</span>
        <span>Networking</span>
        <span>Cybersecurity</span>
        <span>Compliance Support</span>
        <span>Application Development</span>
        <span>IT Strategy</span>
        <span>Incident Readiness</span>
      </div>
    </Reveal>
  </div>
</section>
        <section className="security-banner">
          <div className="container banner-grid">
            <div><p className="section-kicker">A clear scope</p><h2>Honest help without overselling the service.</h2></div>
            <p>
              Elite Solutions Group provides technology and cybersecurity support. We can help identify gaps, improve controls, organize documentation, and prepare for compliance-related work. We do not provide legal advice or issue compliance certifications. Formal legal opinions, independent audits, advanced forensics, and specialized penetration tests may require a qualified partner.
            </p>
          </div>
        </section>

        <Testimonials />

        <section id="contact" className="contact section-pad">
          <div className="container contact-grid">
            <Reveal>
              <p className="section-kicker">Contact</p>
              <h2>Tell me what is going on with your technology.</h2>
              <p>Describe the problem, the number of computers or locations involved, and what you need help with. I will review it and let you know the best next step.</p>
              <div className="contact-detail"><span>Service area</span><strong>Houston area and remote support</strong></div>
              <div className="contact-detail"><span>Types of work</span><strong>Assessments, monthly support, refreshes, projects, and consulting</strong></div>
            </Reveal>
            <Reveal delay={100}><ContactForm /></Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
