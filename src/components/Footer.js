import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">ESG</span>
            <span className="brand-copy"><strong>Elite Solutions</strong><small>Group</small></span>
          </div>
          <p>IT support, cybersecurity, compliance technology help, and practical advice for organizations that handle sensitive information.</p>
        </div>
        <div>
          <h3>Company</h3>
          <Link href="/#about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/#contact">Contact</Link>
        </div>
        <div>
          <h3>Information</h3>
          <Link href="/privacy">Privacy Policy</Link>
          <span>Houston, Texas</span>
        </div>
      </div>
      <div className="container copyright">© {new Date().getFullYear()} Elite Solutions Group. All rights reserved.</div>
    </footer>
  );
}
