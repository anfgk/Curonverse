import React from "react";
import styled from "styled-components";
import { Container } from "../styles/ResultPageStyles";

interface PageContainerProps {
  $mounted: boolean;
}

const PageContainer = styled(Container).withConfig({
  shouldForwardProp: (prop) => !["mounted"].includes(prop),
})<PageContainerProps>`
  opacity: ${(props) => (props.$mounted ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  width: 375px;
  height: 812px;
  margin: 0 auto;
  position: relative;
  overflow: scroll;
`;

interface PageTransitionContainerProps {
  mounted: boolean; // 컴포넌트가 마운트(화면에 표시)되었는지 여부를 나타내는 불리언 값
  children: React.ReactNode; // 이 컴포넌트 내부에 렌더링될 자식 요소들 (텍스트, JSX 등)
}

// PageTransitionContainer 컴포넌트 정의
// React.FC<PageTransitionContainerProps>를 사용하여 props 타입을 명시
const PageTransitionContainer: React.FC<PageTransitionContainerProps> = ({
  mounted, // 페이지가 마운트(렌더링)되었는지 여부를 나타내는 boolean prop
  children, // 이 컴포넌트 내부에 렌더링될 자식 요소들 (텍스트, JSX 등)
}) => {
  // PageContainer 컴포넌트를 렌더링하며,
  // mounted 값을 props로 전달하고 children을 내부에 포함시킴
  return <PageContainer $mounted={mounted}>{children}</PageContainer>;
};

export default PageTransitionContainer;
