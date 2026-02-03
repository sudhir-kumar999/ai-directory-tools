import { Tool } from "../types";
import { siteConfig } from "../config/site";

// Generate base metadata for any page
export function generateBaseMetadata(
  title: string,
  description: string,
  path: string = ""
) {
  const url = `${siteConfig.url}${path}`;

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    metadataBase: new URL(siteConfig.url),

    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}

// Metadata for tools listing page
export function toolsPageMetadata() {
  return generateBaseMetadata(
    "Browse AI Tools",
    "Discover the best AI tools for productivity, design, writing, coding and more.",
    "/tools"
  );
}

// Metadata for category pages
export function categoryPageMetadata(category: string) {
  return generateBaseMetadata(
    `${category} AI Tools`,
    `Find best AI tools for ${category}. Browse curated list of top AI tools.`,
    `/categories/${category}`
  );
}

// Metadata for single tool detail page
export function toolDetailMetadata(tool: Tool) {
  return generateBaseMetadata(
    tool.name,
    tool.description,
    `/tools/${tool.slug}`
  );
}

// Generate sitemap entries for tools
export function generateToolSitemap(tools: Tool[]) {
  return tools.map((tool) => ({
    url: `${siteConfig.url}/tools/${tool.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
}

// Generate sitemap entries for categories
export function generateCategorySitemap(categories: string[]) {
  return categories.map((category) => ({
    url: `${siteConfig.url}/categories/${category}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));
}
