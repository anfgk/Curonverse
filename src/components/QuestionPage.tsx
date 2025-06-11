"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import Title from "@/components/Title";
import NextButton from "@/components/NextButton";
import BeforeButton from "@/components/BeforeButton";
import StepHeader from "@/components/StepHeader";
import StepBadge from "@/components/StepBadge";
import Question from "@/components/Question";
import QuesBadge from "@/components/QuesBadge";
import CheckBox from "@/components/CheckBox";
import { surveyService } from "@/services/survey";

const Container = styled.div`
  width: 375px;
  height: 1106px;
  background: #393939;
  position: relative;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: auto;
  margin-bottom: 20px;
`;

const CheckBoxGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 24px 0;
`;

const QuestionContainer = styled.div<{
  isFocused: boolean;
  anyFieldFocused: boolean;
}>`
  width: 336px;
  height: 200px;
  margin-top: 44px;
  background: ${(props) => (props.isFocused ? "#FAFAFA" : "transparent")};
  border-radius: 10px;
  transition: all 0.3s ease;
  opacity: ${(props) => {
    if (!props.anyFieldFocused) return 1;
    return props.isFocused ? 1 : 0.5;
  }};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
`;

interface Question {
  id: string;
  firstText: string;
  secondText: string;
  questionNumber: number;
}

interface QuestionPageProps {
  currentStep: number;
  questions: Question[];
  previousPath: string;
  nextPath: string;
}

// QuestionPage 컴포넌트 정의, QuestionPageProps 타입을 받음
const QuestionPage: React.FC<QuestionPageProps> = ({
  currentStep, // 현재 질문 단계 (예: 1, 2, 3 ...)
  questions, // 질문 목록 배열, 각 질문 객체 포함
  previousPath, // 이전 페이지로 이동할 경로 URL 문자열
  nextPath, // 다음 페이지로 이동할 경로 URL 문자열
}) => {
  const router = useRouter();
  // Next.js의 useRouter 훅을 사용해 페이지 이동 및 라우팅 관련 기능 사용
  const [answers, setAnswers] = useState<Record<string, number>>({});
  // 사용자 답변을 저장하는 상태 (key: 질문 id, value: 답변 숫자)
  // 빈 객체를 초기값으로 설정
  const [focusedQuestion, setFocusedQuestion] = useState<string>(
    questions[0].id
  );
  // 현재 포커스가 잡힌 질문의 id를 상태로 관리
  // 초기값은 첫 번째 질문의 id로 설정

  // 사용자가 답변을 선택할 때 실행되는 함수
  const handleAnswer = (questionId: string, score: number) => {
    // 기존 답변 상태에 새로운 답변 추가
    const newAnswers = { ...answers, [questionId]: score };
    // 상태 업데이트
    setAnswers(newAnswers);
    // 서버에 답변 저장
    surveyService.saveAnswer(questionId, score);

    // 현재 질문의 인덱스 찾기
    const currentIndex = questions.findIndex((q) => q.id === questionId);

    // 다음 질문이 있고, 아직 답변하지 않은 경우 다음 질문으로 포커스 이동
    if (
      currentIndex < questions.length - 1 &&
      !answers[questions[currentIndex + 1].id]
    ) {
      setFocusedQuestion(questions[currentIndex + 1].id);
    }
  };

  // 이전 페이지로 이동하는 함수
  const handleBeforeClick = () => {
    router.push(previousPath);
  };

  // 다음 페이지로 이동하는 함수
  const handleNextClick = () => {
    // 모든 질문에 답변이 있는 경우에만 다음 페이지로 이동
    if (Object.values(answers).every((answer) => answer !== undefined)) {
      router.push(nextPath);
    }
  };

  // 질문 컨테이너를 클릭했을 때 실행되는 함수
  const handleQuestionClick = (questionId: string, event: React.MouseEvent) => {
    // 체크박스 그룹 내부에서 클릭된 경우 무시
    if ((event.target as HTMLElement).closest(".checkbox-group")) {
      return;
    }
    // 포커스된 질문 상태 업데이트
    setFocusedQuestion(questionId);
  };

  // 답변이 있는 질문의 개수 계산
  const answeredQuestions = Object.values(answers).filter(
    // 답변이 있는 경우만 필터링
    (answer) => answer !== undefined
    // 필터링된 배열의 길이 반환
  ).length;

  const answerOptions = [
    { label: "매우 아니다", score: 1, size: 36 },
    { label: "아니다", score: 2, size: 32 },
    { label: "보통이다", score: 3, size: 24 },
    { label: "그렇다", score: 4, size: 32 },
    { label: "매우 그렇다", score: 5, size: 36 },
  ];

  return (
    <Container>
      <ContentWrapper>
        <StepHeader
          currentStep={currentStep}
          currentQuestion={answeredQuestions + ((currentStep - 1) * 3 + 1)}
        />
        <StepBadge currentStep={String(currentStep)} totalSteps="4" />
        <Title
          mainText="본인의 성향과 가장 가까운"
          highlightText="하나를 선택"
          subText="해주세요."
        />

        {questions.map((question) => (
          <QuestionContainer
            key={question.id}
            isFocused={focusedQuestion === question.id}
            anyFieldFocused={!!focusedQuestion}
            onClick={(e) => handleQuestionClick(question.id, e)}
          >
            <QuesBadge
              currentQues={question.questionNumber}
              totalQues={12}
              isFocused={focusedQuestion === question.id}
            />
            <Question
              firstText={question.firstText}
              secondText={question.secondText}
              isFocused={focusedQuestion === question.id}
            />
            <CheckBoxGroup className="checkbox-group">
              {answerOptions.map((option) => (
                <CheckBox
                  key={option.score}
                  label={option.label}
                  isSelected={answers[question.id] === option.score}
                  onClick={() => handleAnswer(question.id, option.score)}
                  size={option.size}
                  isFocused={focusedQuestion === question.id}
                  hasAnySelection={!!answers[question.id]}
                />
              ))}
            </CheckBoxGroup>
          </QuestionContainer>
        ))}

        <ButtonWrapper>
          <BeforeButton onClick={handleBeforeClick} />
          <NextButton
            onClick={handleNextClick}
            disabled={
              !Object.values(answers).every((answer) => answer !== undefined)
            }
          />
        </ButtonWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default QuestionPage;
