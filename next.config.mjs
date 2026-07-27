/** @type {import('next').NextConfig} */

const repositoryName = "elite-solutions-group";
const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,

  // Generate static HTML, CSS, and JavaScript files
  output: "export",

  // Helps GitHub Pages serve folder-based routes
  trailingSlash: true,

  // GitHub Pages cannot run the Next.js image server
  images: {
    unoptimized: true,
  },

  // Your website will initially be hosted under:
  // dthomas23.github.io/elite-solutions-group
  basePath: isProduction ? `/${repositoryName}` : "",
  assetPrefix: isProduction ? `/${repositoryName}` : "",
};

export default nextConfig;
