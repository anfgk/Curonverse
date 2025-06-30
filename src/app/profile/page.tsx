"use client";

import ProfilePage from "@/components/profile/ProfilePage";
import { usePageVisitLogger } from "@/hooks/usePageVisitLogger";

export default function Profile() {
  // 페이지 방문 로깅 설정
  usePageVisitLogger({
    pageType: "USER_PROFILE",
    getUserId: () => {
      const id = sessionStorage.getItem("userId");
      return id ? parseInt(id) : null;
    },
  });

  return <ProfilePage />;
}
