"use client";

import { Input } from "../ui/input";
import { ToolSearchProps } from "../../types";

export default function ToolSearch({
  value,
  onChange,
}: ToolSearchProps) {
  return (
    <div className="w-full max-w-md">
      <Input
        placeholder="Search AI tools..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full"
      />
    </div>
  );
}
