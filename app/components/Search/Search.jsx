import { SearchArrow } from "@/app/svgs";

export const Search = () => {
  return (
    <form className="max-w-md mx-auto z-0 mb-24">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <SearchArrow />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-14 text-sm text-gray-900 border border-gray-300  rounded-2xl bg-gray-50 "
          placeholder="Search"
          required
        />
      </div>
    </form>
  );
};
