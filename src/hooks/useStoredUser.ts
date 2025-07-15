"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "@/data/types";

export const useStoredUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (!data || data === "undefined" || data === "null") {
      alert("사용자 정보가 없습니다. 다시 시작해주세요.");
      router.replace("/start");
      return;
    }

    try {
      const parsed: User = JSON.parse(data);
      setUser(parsed);
    } catch (e) {
      console.error("user 파싱 실패", e);
      router.replace("/profile");
    }
  }, [router]);

  return user;
}
