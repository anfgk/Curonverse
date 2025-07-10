"use client";

import { useEffect, useRef } from "react";
import { getOrCreateVisitorId } from "@/utils/uuid";

export type PageType = 
  | "USER_PROFILE" 
  | "MBTI_RESULT" 
  | "POEM" 
  | "RESULT";

const PageTypeIdMap: Record<PageType, number> = {
  USER_PROFILE: 1,
  MBTI_RESULT: 2,
  POEM: 3,
  RESULT: 4,
};

interface PageVisitLoggerOptions {
  pageType: PageType;
  getUserId?: () => number | null;
}

export function usePageVisitLogger({ pageType, getUserId }: PageVisitLoggerOptions) {
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const uuid = getOrCreateVisitorId();
    const userId = getUserId?.() ?? null;
    const typeId = PageTypeIdMap[pageType];
    const startTime = Date.now();
    let hasSent = false;

    const handleUnload = () => {
      if (hasSent) return;
      hasSent = true;

      const duration = Math.max(1, Math.floor((Date.now() - startTime) / 1000));

      const payload = {
        userId,
        uuid,
        typeId,
        duration,
      };

      if (duration < 2) return;

      // 백엔드 API 호출 대신 클라이언트 사이드에서만 로깅
      console.log("Page visit logged:", payload);
      
      // 로컬 스토리지에 방문 기록 저장 (선택사항)
      if (typeof window !== "undefined") {
        const visitLogs = JSON.parse(localStorage.getItem("visitLogs") || "[]");
        visitLogs.push({
          ...payload,
          timestamp: new Date().toISOString()
        });
        localStorage.setItem("visitLogs", JSON.stringify(visitLogs.slice(-50))); // 최근 50개만 유지
      }
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      handleUnload();
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, [pageType, getUserId]);
}
