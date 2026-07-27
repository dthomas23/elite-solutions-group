import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";

const groups = [
  ["IT Consulting", [
    "Review your current technology and identify problem areas",
    "Explain risks, priorities, and options in plain language",
    "Create a practical improvement plan",
    "Help compare vendors, products, and service proposals",
    "Provide written findings and recommendations"
  ]],
  ["Monthly IT Support", [
    "Windows, driver, and approved software updates",
    "Computer refreshes and new-device setup",
    "Endpoint protection and device-health checks",
    "User account, Microsoft 365, Intune, and Entra support",
    "Monthly or quarterly security and technology reports"
  ]],
  ["Cybersecurity", [
    "Security posture reviews",
    "Vulnerability scanning and remediation planning",
    "MFA, identity, and access-control reviews",
    "Endpoint protection and security-baseline checks",
    "Incident preparation and partner coordination when needed"
  ]],
  ["Compliance Technology Support", [
    "Review technical controls and identify gaps",
    "Help organize policies, screenshots, reports, and other evidence",
    "Support cyber-insurance and security questionnaire preparation",
    "Work with legal, audit, or compliance professionals when required",
    "Track recommended improvements and completed changes"
  ]],
  ["Networks, Cloud & Infrastructure", [
    "Network, Wi-Fi, firewall, VPN, and segmentation reviews",
    "Windows and Linux server support",
    "Microsoft 365, Azure, AWS, Intune, and Entra ID",
    "Virtualization, backup, recovery, and continuity planning",
    "Inventory, diagrams, and technical documentation"
  ]],
  ["Web & Application Work", [
    "Business and organizational websites",
    "JavaScript and Node.js applications",
    "Internal portals, intake forms, and dashboards",
    "Database and API connections",
    "Mobile application planning and prototypes"
  ]]
];

export const metadata = { title: "Services | Elite Solutions Group" };

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="inner-page">
        <section className="inner-hero">
          <div className="container">
            <p className="section-kicker">Services</p>
            <h1>IT support, security help, and clear technology advice.</h1>
            <p>I can come in for a one-time project, review your environment, provide monthly support, or help manage a larger project with another specialist.</p>
          </div>
        </section>
        <section className="section-pad">
          <div className="container detail-grid">
            {groups.map(([title, items]) => (
              <article className="detail-card" key={title}>
                <h2>{title}</h2>
                <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="container scope-note">
            <strong>About specialized work</strong>
            <p>Elite Solutions Group provides technology and cybersecurity services, not legal advice or compliance certification. Advanced digital forensics, formal audits, legal opinions, and specialized penetration tests may require a qualified partner and a written scope.</p>
          </div>
          <div className="container center-cta">
            <h2>Not sure what service you need?</h2>
            <p>Start by explaining the problem. I will help you figure out the right next step.</p>
            <Link className="button primary" href="/#contact">Contact Elite Solutions Group</Link>
          </div>
        </section>
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
