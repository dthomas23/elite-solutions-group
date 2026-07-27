import "./globals.css";

export const metadata = {
  title: "Elite Solutions Group | IT Support, Cybersecurity & Consulting",
  description:
    "Elite Solutions Group provides IT support, cybersecurity, monthly technology services, compliance technology support, networking, cloud, endpoint management, and web application services.",
  metadataBase: new URL("https://dthomas23.github.io/elite-solutions-group"),
  openGraph: {
    title: "Elite Solutions Group",
    description: "IT support and practical technology advice for organizations that handle sensitive information.",
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
