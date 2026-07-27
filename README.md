# Elite Solutions Group Website

A launch-ready Next.js website for Elite Solutions Group.

## 1. Install and run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## 2. Customize before publishing

1. Replace `hello@elitesolutionsgroup.com` in `src/components/ContactForm.js` with your real business email.
2. Replace `https://example.com` in `src/app/layout.js` with your final domain.
3. Update the service area, phone number, and social links as needed.
4. Replace the ESG lettermark with your original logo when ready.
5. Review the privacy policy before launch.

## 3. Deploy with GitHub and Vercel

1. Create a new GitHub repository.
2. Upload this project or push it with Git.
3. In Vercel, select **Add New → Project**.
4. Import the GitHub repository.
5. Keep the detected Next.js settings and deploy.
6. Add your custom domain in the project’s Domain settings.

## Contact form

The starter form creates a prefilled email using the visitor’s email application. This avoids losing inquiries while no backend email provider is configured. Later, connect the form to Resend, Formspree, HubSpot, or your CRM.

## Service-language note

The website intentionally describes compliance as readiness and preparation. Advanced penetration tests and formal audits may be coordinated through qualified partners based on the engagement scope.

## Testimonials and client names

The site includes a testimonial section on the home, services, and privacy pages. The included cards are intentionally labeled placeholders and must be replaced before publishing.

Edit `src/components/Testimonials.js`, or pass a custom `testimonials` array into the component on a page. Only use quotes, names, logos, and organization names after receiving written approval from the client. This is especially important for law firms, investigators, healthcare organizations, tax organizations, government clients, and educational institutions.

The site describes Elite Solutions Group as a technology and cybersecurity consultancy familiar with legal and regulated environments. It also states that the business does not provide legal advice, compliance certification, independent audits, or unauthorized penetration testing.

## July 2026 Managed Services Update

The homepage now includes:

- Monthly managed IT and compliance-update services
- Security posture analysis and leadership reporting
- Windows refresh, installation, network, and firewall maintenance language
- Published starting prices for common computer and assessment work
- Legal, investigative, healthcare, tax, government, and education positioning
- Scroll-reveal animations, animated grid and scan effects, floating orange elements, and interactive cards
- Reduced-motion accessibility support

Before publishing, replace the placeholder email, website URL, and testimonial content. Only name clients or publish endorsements after receiving permission.
