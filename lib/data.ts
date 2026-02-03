import tools from "../data/tools.json";
import { Tool } from "../types";

// Get all tools
export function getAllTools(): Tool[] {
  return tools as Tool[];
}

// Get tool by slug
export function getToolBySlug(slug: string): Tool | undefined {
  return (tools as Tool[]).find((tool) => tool.slug === slug);
}

// Get tools by category
export function getToolsByCategory(category: string): Tool[] {
  return (tools as Tool[]).filter(
    (tool) => tool.category.toLowerCase() === category.toLowerCase()
  );
}

// Get all unique categories
export function getAllCategories(): string[] {
  const categories = (tools as Tool[]).map((tool) => tool.category);
  return Array.from(new Set(categories));
}

// Get tools by pricing (Free / Paid)
export function getToolsByPricing(pricing: string): Tool[] {
  return (tools as Tool[]).filter((tool) =>
    tool.pricing.toLowerCase().includes(pricing.toLowerCase())
  );
}

// Search tools by name or description
export function searchTools(query: string): Tool[] {
  if (!query) return tools as Tool[];

  return (tools as Tool[]).filter(
    (tool) =>
      tool.name.toLowerCase().includes(query.toLowerCase()) ||
      tool.description.toLowerCase().includes(query.toLowerCase())
  );
}

// Combined filter function
export function filterTools(
  query: string,
  category: string,
  pricing: string
): Tool[] {
  let filtered = tools as Tool[];

  // Search filter
  if (query) {
    filtered = filtered.filter(
      (tool) =>
        tool.name.toLowerCase().includes(query.toLowerCase()) ||
        tool.description.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Category filter
  if (category && category !== "All") {
    filtered = filtered.filter(
      (tool) => tool.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Pricing filter
  if (pricing && pricing !== "All") {
    filtered = filtered.filter((tool) =>
      tool.pricing.toLowerCase().includes(pricing.toLowerCase())
    );
  }

  return filtered;
}

// Get related tools (for detail page)
export function getRelatedTools(
  currentSlug: string,
  category: string
): Tool[] {
  return (tools as Tool[])
    .filter(
      (tool) =>
        tool.slug !== currentSlug &&
        tool.category.toLowerCase() === category.toLowerCase()
    )
    .slice(0, 4);
}
