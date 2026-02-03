import Link from "next/link";
import { getToolBySlug } from "../../../lib/data";
import { Button } from "../../../components/ui/button";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ToolDetailPage({ params }: Props) {
  // Unwrap params Promise
  const { slug } = await params;

  const tool = getToolBySlug(slug);

  if (!tool) {
    return (
      <div>
        <h1 className="text-xl font-bold">Tool Not Found</h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{tool.name}</h1>

      <p className="text-gray-600 mb-4">{tool.description}</p>

      <div className="mb-4">
        <strong>Category:</strong> {tool.category}
      </div>

      <div className="mb-4">
        <strong>Pricing:</strong> {tool.pricing}
      </div>

      <Link
        href={tool.website}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>Visit Website</Button>
      </Link>
    </div>
  );
}
