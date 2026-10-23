/** Endereço público do site (sem barra no fim). Usado em canonical, OG, sitemap e Schema. */
export const urlSite = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
