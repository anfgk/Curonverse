import { useEffect, useRef } from "react";
import { getOrCreateVisitorId } from "@/utils/uuid";
import { PageType, PageTypeIdMap } from "@/data/types";

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

      const blob = new Blob([JSON.stringify(payload)], {
        type: "application/json",
      });
      navigator.sendBeacon("/api/page-visit-log", blob);
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      handleUnload();
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, [pageType, getUserId]);
}
