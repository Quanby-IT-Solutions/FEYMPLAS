// src/components/home/TouchPoint/Pagination.tsx
interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  return (
    <nav
      aria-label="Pagination"
      className="mt-8 flex items-center justify-center space-x-4"
    >
      {/* Left Long Arrow Button */}
      <button className="flex items-center justify-center bg-stone-200 hover:bg-stone-300 transition text-stone-600 p-2 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      {/* Current Page and Total Pages */}
      <div className="flex items-center space-x-2 text-neutral-400 text-sm">
        <span className="text-lg font-medium text-stone-800">
          {String(currentPage).padStart(2, "0")}
        </span>{" "}
        /{" "}
        <span className="text-base">{String(totalPages).padStart(2, "0")}</span>
      </div>
      {/* Right Long Arrow Button */}
      <button className="flex items-center justify-center bg-stone-200 hover:bg-green-300 transition text-green-800 p-2 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </nav>
  );
};

export default Pagination;
