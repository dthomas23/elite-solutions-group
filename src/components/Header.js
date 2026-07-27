"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" href="/" onClick={close} aria-label="Elite Solutions Group home">
          <span className="brand-mark">ESG</span>
          <span className="brand-copy">
            <strong>Elite Solutions</strong>
            <small>Group</small>
          </span>
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={open ? "nav-links open" : "nav-links"} aria-label="Primary navigation">
          <Link href="/#services" onClick={close}>Services</Link>
          <Link href="/#managed-services" onClick={close}>Managed IT</Link>
          <Link href="/#process" onClick={close}>Process</Link>
          <Link href="/#industries" onClick={close}>Industries</Link>
          <Link href="/#about" onClick={close}>About</Link>
          <Link className="nav-cta" href="/#contact" onClick={close}>Consultation</Link>
        </nav>
      </div>
    </header>
  );
}
