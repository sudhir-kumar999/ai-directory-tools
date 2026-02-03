export const siteConfig = {
  name: "AI Tools Directory",
  description:
    "Discover the best AI tools for productivity, writing, design, coding, marketing and more in one place.",
  url: "https://aitools-directory.vercel.app",

  creator: "Sudhir Kumar",

  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Tools",
      href: "/tools",
    },
    {
      title: "Categories",
      href: "/categories",
    },
  ],

  links: {
    github: "https://github.com/yourusername/ai-tools-directory",
    portfolio: "https://yourportfolio.com",
  },

  defaultMetadata: {
    title: "AI Tools Directory",
    description:
      "Find and compare the best AI tools for every need – writing, coding, design, video, productivity and more.",
  },
};

export type SiteConfig = typeof siteConfig;
