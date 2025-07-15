"use client";

import PoemPage from "@/components/poem/PoemPage";
import { usePageVisitLogger } from "@/hooks/usePageVisitLogger";

export default function Poem() {
  // 페이지 방문 로깅 설정
  usePageVisitLogger({
    pageType: "POEM_SELECT",
    getUserId: () => {
      const id = localStorage.getItem("userId");
      return id ? parseInt(id) : null;
    },
  });

  return <PoemPage />;
}
