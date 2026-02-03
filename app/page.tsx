import Link from "next/link";
import { getAllTools } from "../lib/data";
import { siteConfig } from "../config/site";

import ToolList from "../components/tools/ToolList";
import { Button } from "../components/ui/button";

export default function HomePage() {
  const tools = getAllTools();

  // Show only first 6 tools as featured
  const featuredTools = tools.slice(0, 6);

  return (
    <div className="space-y-10 px-4 md:px-6 lg:px-8">
      
      {/* Hero Section */}
      <section className="text-center space-y-4 py-10 md:py-14 lg:py-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Welcome to {siteConfig.name}
        </h1>

        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
          Discover and explore the best AI tools for productivity,
          design, writing, coding, marketing and more.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4">
          <Link href="/tools">
            <Button className="w-full sm:w-auto">
              Browse All Tools
            </Button>
          </Link>

          <Link href="/categories">
            <Button variant="outline" className="w-full sm:w-auto">
              Browse Categories
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Tools */}
      <section>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
          <h2 className="text-xl sm:text-2xl font-semibold">
            Featured AI Tools
          </h2>

          <Link href="/tools">
            <Button variant="link" className="p-0">
              View All
            </Button>
          </Link>
        </div>

        <ToolList tools={featuredTools} />
      </section>

      {/* Why Section */}
      <section className="bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 md:p-8 rounded-lg">
        <h2 className="text-lg sm:text-xl font-semibold mb-3">
          Why Use This Directory?
        </h2>

        <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
          <li>✓ Curated list of top AI tools</li>
          <li>✓ Easy search and filtering</li>
          <li>✓ Compare tools quickly</li>
          <li>✓ Regularly updated database</li>
          <li>✓ Clean and simple interface</li>
        </ul>
      </section>
    </div>
  );
}
