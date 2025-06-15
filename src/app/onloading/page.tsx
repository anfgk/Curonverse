"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Text from "@/components/Text";
import Title from "@/components/Title";
import LoadingLayout from "@/components/layout/LoadingLayout";
import { surveyService } from "@/services/survey";
import SubText from "@/components/SubText";

export default function Onloading() {
  const router = useRouter();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const mbtiResult = surveyService.calculateMBTI();
      router.push(`/result?mbti=${mbtiResult}`);
    }, 1000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <LoadingLayout rocketImageSrc="/images/rocket.svg">
      <SubText text="수고하셨습니다." variant="subtitle" />
      <Title
        mainText={`${userName}님의 감정 행성으로`}
        highlightText="이동"
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
