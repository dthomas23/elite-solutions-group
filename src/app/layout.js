import "./globals.css";

export const metadata = {
  title: "Elite Solutions Group | IT, Cybersecurity & Cloud Consulting",
  description:
    "Elite Solutions Group provides practical IT consulting, cybersecurity, compliance-readiness, cloud, networking, endpoint protection, and application solutions.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Elite Solutions Group",
    description: "Practical technology. Stronger security. Smarter solutions.",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
