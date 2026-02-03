// Main Tool Interface
export interface Tool {
  id: number;
  name: string;
  slug: string;
  category: string;
  pricing: string;
  description: string;
  website: string;
  logo: string;
}

// Category Type (Union of all possible categories)
export type ToolCategory =
  | "Productivity"
  | "Image Generation"
  | "Writing"
  | "Marketing"
  | "Design"
  | "Video"
  | "Audio"
  | "Translation"
  | "Presentation"
  | "Meetings"
  | "SEO"
  | "Website"
  | "Coding"
  | "Music"
  | "Chatbot"
  | "Marketplace"
  | "Image";

// Search & Filter Related Types
export interface ToolFilters {
  search: string;
  category: string;
  pricing: string;
}

// Props Types for Components
export interface ToolCardProps {
  tool: Tool;
}

export interface ToolListProps {
  tools: Tool[];
}

export interface ToolSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export interface ToolFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

// SEO Metadata Type
export interface PageSEO {
  title: string;
  description: string;
  url: string;
}
