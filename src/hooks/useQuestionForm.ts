"use client";

import { useRouter } from "next/navigation";
import { testService } from "@/services/testService";
import { healingRoutineService } from "@/services/healingroutineService";
import { mbtiRhythms, mbtiKeywords, mbtiFullDescriptions, mbtiRhythmDescriptions, mbtiDescriptions } from "@/data/mbtiData";
import { TestResult, EmotionType, EmotionKeyword } from "@/data/types";

// MBTI 문자열을 숫자 ID로 매핑
const mbtiToIdMap: Record<string, number> = {
  'EPSA': 1, 'EPSU': 2, 'EPIA': 3, 'EPIU': 4,
  'EHSA': 5, 'EHSU': 6, 'EHIA': 7, 'EHIU': 8,
  'RPSA': 9, 'RPSU': 10, 'RPIA': 11, 'RPIU': 12,
  'RHSA': 13, 'RHSU': 14, 'RHIA': 15, 'RHIU': 16
};

// 리듬 이름을 ID로 매핑
const rhythmToIdMap: Record<string, number> = {
  'Spark Flame': 1,
  'Warm Flow': 2,
  'Healing Loop': 3,
  'Quiet Sync': 4,
  'Silent Echo': 5,
  'Hidden Pearl': 6
};

// MBTI 결과를 감정 MBTI로 변환하는 함수
function convertMBTIToEmotionMBTI(mbti: string): string {
  // MBTI 결과를 기반으로 감정 MBTI 유형 결정
  // 실제 로직은 프로젝트 요구사항에 따라 조정 필요
  const [e, s, t, j] = mbti.split('');
  
  // 감정 표현성 (E/I)
  const emotionExpression = e === 'E' ? 'E' : 'R';
  
  // 감정 처리 방식 (S/N)
  const emotionProcessing = s === 'S' ? 'P' : 'H';
  
  // 감정 인식 방식 (T/F)
  const emotionAwareness = t === 'T' ? 'S' : 'I';
  
  // 감정 정리 방식 (J/P)
  const emotionClosure = j === 'J' ? 'A' : 'U';
  
  return emotionExpression + emotionProcessing + emotionAwareness + emotionClosure;
}

// EmotionType 객체 생성 함수
function createEmotionType(emotionMbti: string): EmotionType {
  const keywords = ["불꽃", "직진", "선명"]; // 이미지에 맞는 키워드
  const description = "감정을 빠르게 표현하고 자기중심으로 해석하며, 즉시 자각하고 정리하는 사람이에요.";
  
  // 색상 매핑 (이미지에 맞게 업데이트)
  const colors = {
    'EPSA': '#FF6B35', // 밝은 오렌지
    'EPSU': '#E74C3C', // 빨간색
    'EPIA': '#FF8C42', // 오렌지
    'EPIU': '#C0392B', // 진한 빨간색/적갈색
    'EHSA': '#F39C12', // 노란색/오렌지
    'EHSU': '#16A085', // 청록색/녹청색
    'EHIA': '#9B59B6', // 보라색
    'EHIU': '#E91E63', // 연한 보라색/핑크
    'RPSA': '#2C3E50', // 진한 파란색
    'RPSU': '#34495E', // 더 진한 파란색
    'RPIA': '#27AE60', // 녹청색
    'RPIU': '#1ABC9C', // 청록색
    'RHSA': '#3498DB', // 연한 파란색
    'RHSU': '#2980B9', // 중간 파란색
    'RHIA': '#5D6D7E', // 진한 파란색/인디고
    'RHIU': '#F8BBD9', // 핑크/연한 보라색
  };

  const colorInfo = colors[emotionMbti as keyof typeof colors] || colors['EPSA'];

  return {
    id: mbtiToIdMap[emotionMbti] || 1,
    code: emotionMbti,
    title: `${emotionMbti} 감정 성향`,
    description: description,
    color: colorInfo,
    hexCode: colorInfo,
    keywords: keywords.map((keyword, index) => ({
      id: index + 1,
      keyword: keyword,
      description: "감정이 순간적으로 튀어나오는 뜨거운 에너지에요."
    }))
  };
}

// MBTI 결과 계산 함수
function calculateMBTI(answers: { questionId: number; score: number }[]) {
  const scores = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };

  // 각 질문의 답변을 기반으로 점수 계산
  answers.forEach(answer => {
    const questionId = answer.questionId;
    const score = answer.score;

    // 질문 ID에 따른 차원별 점수 계산
    if (questionId <= 3) {
      // E vs I 질문들 (1-3번)
      if (questionId === 1 || questionId === 3) {
        scores.E += score; // E 지향 질문들
      } else {
        scores.I += score; // I 지향 질문들
      }
    } else if (questionId <= 6) {
      // S vs N 질문들 (4-6번)
      if (questionId === 4 || questionId === 6) {
        scores.S += score; // S 지향 질문들
      } else {
        scores.N += score; // N 지향 질문들
      }
    } else if (questionId <= 9) {
      // T vs F 질문들 (7-9번)
      if (questionId === 7 || questionId === 9) {
        scores.T += score; // T 지향 질문들
      } else {
        scores.F += score; // F 지향 질문들
      }
    } else {
      // J vs P 질문들 (10-12번)
      if (questionId === 10 || questionId === 12) {
        scores.J += score; // J 지향 질문들
      } else {
        scores.P += score; // P 지향 질문들
      }
    }
  });

  // 점수 차이를 계산하여 더 정확한 MBTI 결정
  const eiDifference = scores.E - scores.I;
  const snDifference = scores.S - scores.N;
  const tfDifference = scores.T - scores.F;
  const jpDifference = scores.J - scores.P;

  // MBTI 유형 결정 (점수 차이가 클수록 더 확실한 선호)
  const mbti = [
    eiDifference > 0 ? 'E' : 'I',
    snDifference > 0 ? 'S' : 'N',
    tfDifference > 0 ? 'T' : 'F',
    jpDifference > 0 ? 'J' : 'P'
  ].join('');

  // 점수 차이의 절댓값을 계산하여 선호 강도 측정
  const preferences = {
    EI: Math.abs(eiDifference),
    SN: Math.abs(snDifference),
    TF: Math.abs(tfDifference),
    JP: Math.abs(jpDifference)
  };

  // MBTI를 감정 MBTI 유형으로 변환
  const emotionMbti = convertMBTIToEmotionMBTI(mbti);
  
  // 리듬 결정
  const rhythmName = mbtiRhythms[emotionMbti] || 'Spark Flame';
  const rhythmId = rhythmToIdMap[rhythmName] || 1;

  return {
    mbti,
    scores,
    preferences,
    emotionMbti,
    rhythmId,
    rhythmName
  };
}

export function useQuestionForm(userId: number) {
  const router = useRouter();

  const questionForm = async (
    answers: Record<number, Record<number, number>>
  ) => {
    console.log(userId, "userId");
    if (!userId) {
      alert("사용자 정보가 없습니다.");
      router.replace("/profile");
      return;
    }

    // 변환: step별 answer → 평탄화된 배열
    const flattened = Object.values(answers).flatMap((stepAnswers) =>
      Object.entries(stepAnswers).map(([questionId, score]) => {
        const id = Number(questionId);
        return {
          questionId: id,
          score,
        };
      })
    );

    try {
      // 테스트 결과 저장
      const testResult = await testService.submitTest({
        userId,
        type: "emotion",
        answers: flattened,
      });

      // MBTI 결과 계산
      const mbtiResult = calculateMBTI(flattened);

      const healingRoutine = await healingRoutineService.getHealingRoutine({
        mbtiId: mbtiResult.rhythmId, // rhythmId를 mbtiId로 사용
        rhythmId: mbtiResult.rhythmId,
      });

      // TestResult 타입에 맞는 완전한 데이터 구조 생성
      const finalTestResult: TestResult = {
        testResultId: Date.now(),
        testSessionId: Date.now(),
        emotionType: createEmotionType(mbtiResult.emotionMbti),
        rhythmId: mbtiResult.rhythmId,
        rhythm: mbtiResult.rhythmName,
        rhythmAnalysis: mbtiRhythmDescriptions[mbtiResult.rhythmName] || "감정 리듬 분석 결과입니다.",
        rhythmColor: healingRoutine.data?.rhythmColor || "#FF7448",
        rhythmColorHex: healingRoutine.data?.rhythmColorHex || "#FF7448",
        rhythmDescription: mbtiRhythmDescriptions[mbtiResult.rhythmName] || "감정 리듬에 대한 설명입니다.",
        temperature: 36.5, // 기본값, 실제로는 계산 필요
        temperatureAnalysis: {
          temperature: 36.5,
          description: "평균적인 감정 온도입니다.",
          rhythm: mbtiResult.rhythmName,
          state: "안정",
          temperatureDescription: "감정이 안정적인 상태입니다.",
          title: "평온한 감정 상태",
          analysis: ["감정이 안정적입니다.", "일상적인 감정 상태를 유지하고 있습니다."]
        },
        expressionPercentile: 50,
        processingPercentile: 50,
        connectionPercentile: 50,
        awarenessPercentile: 50,
        healingQuote: "감정을 이해하고 받아들이는 것이 중요합니다.",
        recommendedRoutine: "일상적인 감정 관리 루틴을 추천합니다.",
        healingKeywords: healingRoutine.data?.healingKeywords || ["안정", "평온", "균형"],
        healingRoutines: healingRoutine.data ? [healingRoutine.data] : [],
        percentTotal: 50,
        percentGender: 50
      };

      sessionStorage.setItem("test", JSON.stringify(finalTestResult));
      sessionStorage.setItem("healingRoutine", JSON.stringify(healingRoutine.data));
      router.push("/result");
    } catch (error) {
      console.error("제출 중 오류 발생:", error);
      alert("제출에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return { questionForm };
}
