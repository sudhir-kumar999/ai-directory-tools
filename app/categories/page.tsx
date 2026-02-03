import Link from "next/link";
import { getAllCategories } from "../../lib/data";

export default function CategoriesPage() {
  const categories = getAllCategories();

  if (categories.length === 0) {
    return (
      <div className="px-4 py-10 text-center">
        <h1 className="text-xl font-bold">No Categories Found</h1>
        <p className="text-gray-600 mt-2">
          Please check back later for updated categories.
        </p>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-6 lg:px-8 py-4">
      
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">
          All Categories
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm sm:text-base">
          Explore AI tools grouped by different categories.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/categories/${category}`}
            className="
              border border-gray-200 dark:border-gray-800
              p-4 sm:p-5 rounded-lg
              hover:bg-gray-50 dark:hover:bg-gray-900
              transition-colors duration-200
              flex items-center justify-between
            "
          >
            <h2 className="text-base sm:text-lg font-semibold">
              {category}
            </h2>

            <span className="text-gray-400">→</span>
          </Link>
        ))}
      </div>

      {/* Footer Hint */}
      <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
        Total Categories: {categories.length}
      </div>
    </div>
  );
}
