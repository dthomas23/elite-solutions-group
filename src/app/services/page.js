import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";

const groups = [
  ["Legal-Sector IT Consulting", ["Technology assessments for law firms and legal-service organizations", "Confidentiality-focused network and endpoint reviews", "Secure remote-access and collaboration planning", "Vendor evaluation, documentation, and project coordination", "Technology support designed around sensitive client and case information"]],
  ["Cybersecurity & Cybercrime Readiness", ["Security posture and cybercrime-risk reviews", "Vulnerability scanning and remediation planning", "Identity, MFA, and access-control reviews", "Endpoint protection and security baselines", "Incident-readiness planning and coordination with forensic or legal specialists"]],
  ["Compliance Readiness", ["NIST and CIS-aligned gap assessments", "FERPA, healthcare, financial, and professional-services safeguards", "Cyber-insurance questionnaire support", "Policy, evidence, and control documentation", "Coordination with attorneys, auditors, assessors, and specialized partners"]],
  ["Networking & Infrastructure", ["Network, Wi-Fi, firewall, segmentation, and VPN reviews", "Windows and Linux server support", "Virtualization and cloud infrastructure", "Backup, continuity, and disaster-recovery planning", "Technology inventory, diagrams, and documentation"]],
  ["Cloud & Endpoint Management", ["Microsoft 365 and Azure administration", "AWS consulting and cloud planning", "Intune and Entra ID configuration", "Device configuration, patching, encryption, and endpoint protection", "Secure user onboarding and offboarding workflows"]],
  ["Web & Application Solutions", ["Secure business and organizational websites", "JavaScript and Node.js applications", "Internal portals, intake forms, and dashboards", "Database and API integration", "Mobile application planning and prototyping"]]
];

export const metadata = { title: "Services | Elite Solutions Group" };

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="inner-page">
        <section className="inner-hero">
          <div className="container">
            <p className="section-kicker">Legal-sector and regulated technology</p>
            <h1>Security-conscious IT for sensitive work.</h1>
            <p>Engage Elite Solutions Group for an assessment, a defined implementation project, ongoing support, or coordination with a specialized legal, audit, forensic, or cybersecurity partner.</p>
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
            <strong>Responsible scope matters.</strong>
            <p>Elite Solutions Group provides technology and cybersecurity consulting—not legal advice, legal representation, compliance certification, or independent audit opinions. Advanced digital forensics and penetration testing may be performed with qualified partners under an authorized written scope.</p>
          </div>
          <div className="container center-cta"><h2>Not sure where to begin?</h2><p>Start with a focused technology and security assessment.</p><Link className="button primary" href="/#contact">Schedule a Consultation</Link></div>
        </section>
        <Testimonials title="Client confidence belongs on every service page." intro="Replace these starter cards with approved testimonials that describe discretion, communication, practical problem-solving, and measurable improvements." />
      </main>
      <Footer />
    </>
  );
}
