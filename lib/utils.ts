import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Merge Tailwind class names safely
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Generate slug from text
export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

// Capitalize first letter
export function capitalize(text: string): string {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Format category name
export function formatCategory(category: string): string {
  return category
    .split("-")
    .map((word) => capitalize(word))
    .join(" ");
}

// Truncate long text
export function truncate(text: string, length: number = 100): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
}

// Check if tool is free
export function isFreeTool(pricing: string): boolean {
  return pricing.toLowerCase().includes("free");
}

// Generate SEO friendly title
export function generateTitle(title: string): string {
  return `${title} | AI Tools Directory`;
}

// Scroll to top utility
export function scrollToTop() {
  if (typeof window !== "undefined") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}
