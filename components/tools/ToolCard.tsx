"use client";

import Link from "next/link";
import Image from "next/image";
import { Tool } from "../../types";
import { truncate, isFreeTool, cn } from "../../lib/utils";

import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          
          {/* Logo */}
          <div className="w-12 h-12 relative">
            <Image
              src={"/logos/default.png"}
              alt={tool.name}
              width={48}
              height={48}
              className="rounded-md object-contain"
            />
          </div>

          {/* Name & Category */}
          <div>
            <h3 className="font-semibold text-lg">{tool.name}</h3>

            <p className="text-sm text-gray-500">
              {tool.category}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
          {truncate(tool.description, 120)}
        </p>

        {/* Pricing Badge */}
        <div className="mt-3">
          <span
            className={cn(
              "px-3 py-1 rounded-full text-xs font-medium",
              isFreeTool(tool.pricing)
                ? "bg-green-100 text-green-700"
                : "bg-blue-100 text-blue-700"
            )}
          >
            {tool.pricing}
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex justify-between">
        <Link href={`/tools/${tool.slug}`}>
          <Button size="sm" variant="outline">
            View Details
          </Button>
        </Link>

        <Link
          href={tool.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="sm">
            Visit Website
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
