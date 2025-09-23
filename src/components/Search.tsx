"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleSearch = () => {
    const currentSearchParams = new URLSearchParams(searchParams.toString());
    currentSearchParams.set("title", search);
    router.push(`/store?${currentSearchParams}`);
  };
  return (
    <div className="flex justify-center items-center mb-4 ">
      <input
        onChange={(e) => setSearch(e.target.value)}
        className="bg-gray-400 py-1 px-1 rounded text-white"
        type="text"
        placeholder="search..."
      />
      <button
        type="submit"
        onClick={handleSearch}
        className="bg-gray-600 text-white px-2 py-1 rounded cursor-pointer ml-1"
      >
        Search
      </button>
    </div>
  );
}

export default Search;
