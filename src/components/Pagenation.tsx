"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import ReactPaginate from "react-paginate";

function Pagenation({ pageCount }: { pageCount: number }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const handlePageClick = (e: { selected: number }) => {
    const page = e.selected + 1;
    const currentSearchParams = new URLSearchParams(searchParams.toString());
    currentSearchParams.set("page", page.toString());
    currentSearchParams.set("per_page", "4");
    router.push(`/store?${currentSearchParams}`);
  };
  return (
    <div className="flex justify-center mt-6">
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next ›"
        previousLabel="‹ Prev"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName="flex items-center space-x-2"
        pageClassName="px-3 py-1 rounded-lg border text-gray-700 hover:bg-blue-500 hover:text-white transition cursor-pointer"
        previousClassName="px-3 py-1 rounded-lg border text-gray-700 hover:bg-blue-500 hover:text-white transition cursor-pointer"
        nextClassName="px-3 py-1 rounded-lg border text-gray-700 hover:bg-blue-500 hover:text-white transition cursor-pointer"
        breakClassName="px-3 py-1 text-gray-500 cursor-default"
        activeClassName="bg-blue-600 text-white border-blue-600"
        disabledClassName="opacity-50 cursor-not-allowed"
      />
    </div>
  );
}

export default Pagenation;
