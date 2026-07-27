import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

export const metadata = { title: "Privacy Policy | Elite Solutions Group" };

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="inner-page">
        <section className="inner-hero compact">
          <div className="container"><p className="section-kicker">Website information</p><h1>Privacy Policy</h1><p>Last updated: July 27, 2026</p></div>
        </section>
        <section className="section-pad">
          <div className="container legal-copy">
            <h2>Information you send</h2>
            <p>When you contact Elite Solutions Group, you may provide your name, organization, email address, phone number, and information about the technology issue or service you need.</p>
            <h2>How that information is used</h2>
            <p>The information is used to respond to your request, understand the work involved, prepare a proposal, schedule service, or communicate about an active project.</p>
            <h2>Sharing information</h2>
            <p>Personal information is not sold. Information may be shared with a service provider or professional partner only when it is reasonably needed for an approved project or request.</p>
            <h2>Security</h2>
            <p>Reasonable steps are taken to protect information. No website, email system, or online storage service can promise complete security.</p>
            <h2>Contact</h2>
            <p>Add the official Elite Solutions Group business email and mailing address here before the final launch.</p>
            <p className="legal-note">This is starter website language and not legal advice. Have the policy reviewed before adding analytics, online payments, client accounts, or systems that store sensitive client information.</p>
          </div>
        </section>
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
