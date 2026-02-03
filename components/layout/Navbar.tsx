"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { siteConfig } from "../../config/site";
import { cn } from "../../lib/utils";

import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b bg-white dark:bg-gray-950 relative z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-gray-900 dark:text-white"
        >
          {siteConfig.name}
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            {siteConfig.mainNav.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-colors",
                      "hover:text-blue-600 dark:hover:text-blue-400",
                      pathname === item.href
                        ? "text-blue-600 dark:text-blue-400 font-semibold"
                        : "text-gray-700 dark:text-gray-300"
                    )}
                  >
                    {item.title}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Actions */}
        <div className="flex items-center gap-3">
          
          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* GitHub Button (Desktop Only) */}
          <Link
            href={"https://github.com/sudhir-kumar999"}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block"
          >
            <Button variant="outline" size="sm">
              GitHub
            </Button>
          </Link>

          {/* Hamburger Button (Mobile) */}
          <button
            className="md:hidden border p-2 rounded text-gray-800 dark:text-gray-200"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {open && (
        <div
          className="
            md:hidden
            fixed top-16 left-0 w-full
            bg-white dark:bg-gray-950
            border-t shadow-lg
            z-50
          "
        >
          <div className="flex flex-col p-4 gap-3">
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-2 py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-gray-700 dark:text-gray-300"
                )}
              >
                {item.title}
              </Link>
            ))}

            <Link
              href={"https://github.com/sudhir-kumar999"}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
              onClick={() => setOpen(false)}
            >
              <Button variant="outline" size="sm" className="w-full">
                GitHub
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
