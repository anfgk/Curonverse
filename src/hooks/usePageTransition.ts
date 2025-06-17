import { useState } from "react";

// usePageTransition 훅 정의
export const usePageTransition = () => {
  // 현재 페이지 번호를 관리하는 상태 변수
  const [currentPage, setCurrentPage] = useState<number>(1);
  // 페이지가 마운트되었는지 여부를 관리하는 상태 변수
  const [mounted, setMounted] = useState(false);

  // 다음 페이지로 이동하는 함수
  const nextPage = () => {
    // 현재 페이지가 3보다 작으면 페이지 번호를 1 증가
    if (currentPage < 3) setCurrentPage(currentPage + 1);
  };

  // 이전 페이지로 이동하는 함수
  const prevPage = () => {
    // 현재 페이지가 1보다 크면 페이지 번호를 1 감소
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // 페이지 번호와 마운트 상태를 반환
  return {
    currentPage,
    mounted,
    setMounted,
    nextPage,
    prevPage,
    setCurrentPage,
  };
};
