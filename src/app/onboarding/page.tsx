"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LoadingLayout from "@/components/layout/LoadingLayout";
import Text from "@/components/Text";
import Title from "@/components/Title";

export default function Onboarding() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/profile");
    }, 100);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <LoadingLayout rocketImageSrc="/images/rocket.svg">
      <Text text="잠시만 기다려주세요." variant="subtitle" />
      <Title
        mainText="감정 로켓 탑승권을"
        highlightText="준비"
        subText="하고 있어요."
      />
      <Text text="마음을 가다듬고," variant="loading" center />
      <Text
        text="내가 지닌 다양한 감정들을 떠올려보세요."
        variant="loading"
        center
      />
    </LoadingLayout>
  );
}
