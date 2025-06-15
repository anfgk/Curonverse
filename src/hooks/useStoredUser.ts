"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// 응답 구조에 맞춰 타입 정의
interface User {
  id: number;
  email: string;
  name: string;
  nickname: string;
  gender: string;
  [key: string]: any; // 기타 필드 유연하게 허용
}

interface StoredUserResult {
  user: User | null;
  userId: number;
}

export function useStoredUser(): StoredUserResult {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const raw = sessionStorage.getItem("user");
    if (!raw) {
      alert("사용자 정보가 없습니다. 다시 시작해주세요.");
      router.replace("/profile");
      return;
    }

    try {
      const parsed = JSON.parse(raw);
      setUser(parsed?.data || null);
    } catch (e) {
      console.error("user 파싱 실패", e);
      router.replace("/profile");
    }
  }, [router]);

  return {
    user,
    userId: user ? user.id : 0
  };
}
