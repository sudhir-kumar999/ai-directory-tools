import Link from "next/link";
import { siteConfig } from "../../config/site";
import { Button } from "../ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              {siteConfig.name}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              Quick Links
            </h3>

            <ul className="space-y-2">
              {siteConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="
                      text-sm text-gray-600 dark:text-gray-300
                      hover:text-blue-600 dark:hover:text-blue-400
                      transition-colors
                    "
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Actions */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              Connect
            </h3>

            <div className="flex flex-wrap gap-3">
              <Link
                href={"https://github.com/sudhir-kumar999"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm">
                  GitHub
                </Button>
              </Link>

              <Link
                href={"https://sudhir-react-portfolio.netlify.app/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm">
                  Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-4 border-t text-center text-sm text-gray-600 dark:text-gray-400">
          © {currentYear} {siteConfig.name}. Built by {siteConfig.creator}
        </div>
      </div>
    </footer>
  );
}
