import React from "react";
import styled from "styled-components";
import { Container } from "../styles/ResultPageStyles";

interface PageContainerProps {
  mounted: boolean;
}

const PageContainer = styled(Container)<PageContainerProps>`
  opacity: ${(props) => (props.mounted ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  width: 375px;
  height: 812px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

interface PageTransitionContainerProps {
  mounted: boolean;
  children: React.ReactNode;
}

const PageTransitionContainer: React.FC<PageTransitionContainerProps> = ({
  mounted,
  children,
}) => {
  return <PageContainer mounted={mounted}>{children}</PageContainer>;
};

export default PageTransitionContainer;
