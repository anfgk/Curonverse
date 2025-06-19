import styled, { keyframes } from "styled-components";
import Image from "next/image";

export const twinkle = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  80% { opacity: 0.5; }
`;

export const Container = styled.div`
  width: 375px;
  height: 812px;
  background: #0f1227;
  position: fixed;
  overflow: scroll;
  margin: 0 auto;

  /* 모바일에서 콘텐츠가 잘리지 않도록 오버플로우만 처리 */
  @media (max-width: 375px) {
    width: 100vw;
  }

  @media (max-height: 812px) {
    height: 100vh;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const RocketImage = styled(Image)`
  margin-top: 100px;
  width: 86px !important;
  height: 86px !important;
  animation: ${twinkle} 2s ease-in-out infinite;
  display: block;
  margin-left: auto;
  margin-right: auto;

  /* 모바일에서 로켓 이미지 크기 조정 */
  @media (max-width: 375px) {
    margin-top: 60px;
    width: 70px !important;
    height: 70px !important;
  }

  @media (max-height: 812px) {
    margin-top: 60px;
    width: 70px !important;
    height: 70px !important;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
