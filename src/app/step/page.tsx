"use client";

import StepFlowPage from "@/components/question/StepFlowPage";
import { usePageVisitLogger } from "@/hooks/usePageVisitLogger";

export default function Step() {
  // 페이지 방문 로깅 설정
  usePageVisitLogger({
    pageType: "MBTI_RESULT",
    getUserId: () => {
      const id = sessionStorage.getItem("userId");
      return id ? parseInt(id) : null;
    },
  });

  return <StepFlowPage />;
}
