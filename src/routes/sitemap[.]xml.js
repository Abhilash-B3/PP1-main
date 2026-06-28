import { createFileRoute } from "@tanstack/react-router";

const BASE_URL = "";

const paths = [
  "/",
  "/about",
  "/services",
  "/pricing",
  "/how-it-works",
  "/why-choose-us",
  "/testimonials",
  "/faq",
  "/careers",
  "/contact",
  "/privacy",
  "/terms",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = paths.map(
          (p) =>
            `  <url>\n    <loc>${BASE_URL}${p}</loc>\n    <changefreq>weekly</changefreq>\n  </url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
