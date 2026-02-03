import { useState, useMemo } from "react";
// import { Tool } from "../types";
import { filterTools, getAllCategories } from "../lib/data";

export function useSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPricing, setSelectedPricing] = useState("All");

  // Get available categories
  const categories = useMemo(() => {
    const cats = getAllCategories();
    return ["All", ...cats];
  }, []);

  // Pricing options
  const pricingOptions = ["All", "Free", "Paid"];

  // Filtered tools based on search + filters
  const filteredTools = useMemo(() => {
    return filterTools(searchQuery, selectedCategory, selectedPricing);
  }, [searchQuery, selectedCategory, selectedPricing]);

  // Handlers
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handlePricingChange = (pricing: string) => {
    setSelectedPricing(pricing);
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedPricing("All");
  };

  return {
    searchQuery,
    selectedCategory,
    selectedPricing,
    categories,
    pricingOptions,
    filteredTools,
    handleSearchChange,
    handleCategoryChange,
    handlePricingChange,
    resetFilters,
  };
}
