import { getAllTools } from "../../../lib/data";
import ToolList from "../../../components/tools/ToolList";

interface Props {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  const categoryFromUrl = decodeURIComponent(category);

  const allTools = getAllTools();

  const tools = allTools.filter(
    (tool) =>
      tool.category.toLowerCase() === categoryFromUrl.toLowerCase()
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Category: {categoryFromUrl}
      </h1>

      {tools.length === 0 ? (
        <p className="text-gray-600">
          No tools found in this category.
        </p>
      ) : (
        <ToolList tools={tools} />
      )}
    </div>
  );
}
