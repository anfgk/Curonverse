import { useState } from "react";

export const usePageTransition = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [mounted, setMounted] = useState(false);

  const nextPage = () => {
    if (currentPage < 2) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return {
    currentPage,
    mounted,
    setMounted,
    nextPage,
    prevPage,
  };
};
