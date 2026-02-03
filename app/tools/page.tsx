"use client";

import { getAllTools } from "../../lib/data";
import ToolList from "../../components/tools/ToolList";
import ToolSearch from "../../components/tools/ToolSearch";
import ToolFilters from "../../components/tools/ToolFilter";
import { useSearch } from "../../hooks/useSearch";

export default function ToolsPage() {
  const tools = getAllTools();

  const {
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
  } = useSearch(tools);

  return (
    <div className="px-4 md:px-6 lg:px-8 py-4">
      
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Browse AI Tools
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm sm:text-base">
          Search, filter and explore the best AI tools available today.
        </p>
      </div>

      {/* Search and Filters Section */}
      <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          
          <div className="flex-1">
            <ToolSearch
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>

          <div className="flex-1">
            <ToolFilters
              categories={categories}
              pricingOptions={pricingOptions}
              selectedCategory={selectedCategory}
              selectedPricing={selectedPricing}
              onCategoryChange={handleCategoryChange}
              onPricingChange={handlePricingChange}
              onReset={resetFilters}
            />
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
        Showing{" "}
        <span className="font-semibold">
          {filteredTools.length}
        </span>{" "}
        tools
      </div>

      {/* Tools List */}
      <ToolList tools={filteredTools} />

      {/* Empty State */}
      {filteredTools.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-600 dark:text-gray-300">
            No tools found matching your filters.
          </p>

          <button
            onClick={resetFilters}
            className="mt-3 text-blue-600 hover:underline text-sm"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
