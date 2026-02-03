"use client";

import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface ToolFiltersProps {
  categories: string[];
  pricingOptions: string[];
  selectedCategory: string;
  selectedPricing: string;
  onCategoryChange: (value: string) => void;
  onPricingChange: (value: string) => void;
  onReset: () => void;
}

export default function ToolFilters({
  categories,
  pricingOptions,
  selectedCategory,
  selectedPricing,
  onCategoryChange,
  onPricingChange,
  onReset,
}: ToolFiltersProps) {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      
      {/* Category Filter */}
      <Select
        value={selectedCategory}
        onValueChange={onCategoryChange}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>

        <SelectContent>
          {categories.map((cat) => (
            <SelectItem key={cat} value={cat}>
              {cat}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Pricing Filter */}
      <Select
        value={selectedPricing}
        onValueChange={onPricingChange}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>

        <SelectContent>
          {pricingOptions.map((price) => (
            <SelectItem key={price} value={price}>
              {price}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Reset Button */}
      <Button variant="outline" onClick={onReset}>
        Reset Filters
      </Button>
    </div>
  );
}
