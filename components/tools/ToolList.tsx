"use client";

import { Tool } from "../../types";
import ToolCard from "./ToolCard";

interface ToolListProps {
  tools: Tool[];
}

export default function ToolList({ tools }: ToolListProps) {
  // Empty State
  if (!tools || tools.length === 0) {
    return (
      <div className="text-center py-10">
        <h3 className="text-lg font-semibold">
          No tools found
        </h3>
        <p className="text-sm text-gray-500 mt-2">
          Try changing search or filter options
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
}
