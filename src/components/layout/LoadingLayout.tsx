import React from "react";
import {
  Container,
  ContentWrapper,
  RocketImage,
  TextContainer,
} from "./LoadingLayout.styles";
import StarBackground from "@/components/StarBackground";
import LoadingSpinner from "@/components/LoadingSpinner";

interface LoadingLayoutProps {
  children?: React.ReactNode;
  showRocket?: boolean;
  showSpinner?: boolean;
  rocketImageSrc?: string;
  showTextContainer?: boolean;
}

const LoadingLayout = ({
  children,
  showRocket = true,
  showSpinner = true,
  rocketImageSrc = "/images/rocket.png",
  showTextContainer = true,
}: LoadingLayoutProps) => (
  <Container>
    <StarBackground />
    <ContentWrapper>
      {showTextContainer ? <TextContainer>{children}</TextContainer> : children}
      {showRocket && (
        <RocketImage
          src={rocketImageSrc}
          alt="Rocket"
          width={86}
          height={86}
          priority
        />
      )}
      {showSpinner && <LoadingSpinner />}
    </ContentWrapper>
  </Container>
);

export default LoadingLayout;
