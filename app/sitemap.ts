import { getAllTools } from "../lib/data";
import { siteConfig } from "../config/site";

export default function sitemap() {
  const tools = getAllTools();

  const toolUrls = tools.map((tool) => ({
    url: `${siteConfig.url}/tools/${tool.slug}`,
    lastModified: new Date(),
  }));

  const staticUrls = [
    {
      url: `${siteConfig.url}`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}/tools`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}/categories`,
      lastModified: new Date(),
    },
  ];

  return [...staticUrls, ...toolUrls];
}
