import React from "react";
import {
  Container,
  ContentWrapper,
  RocketImage,
  TextContainer,
} from "./LoadingLayout.styles";
import StarBackground from "@/components/StarBackground";
import LoadingSpinner from "@/components/LoadingSpinner";
import Text from "@/components/Text";

interface LoadingLayoutProps {
  children?: React.ReactNode;
  showRocket?: boolean;
  showSpinner?: boolean;
  rocketImageSrc?: string;
  showTextContainer?: boolean;
  subText?: React.ReactNode;
  title?: React.ReactNode;
  text?: React.ReactNode;
}

const LoadingLayout = ({
  children,
  showRocket = true,
  showSpinner = true,
  rocketImageSrc = "/images/rocket.svg",
  showTextContainer = true,
  subText,
  title,
  text,
}: LoadingLayoutProps) => (
  <Container>
    <StarBackground />
    <ContentWrapper>
      {showTextContainer && children ? (
        <>
          {React.Children.map(children, (child) =>
            React.isValidElement(child) && child.type !== Text ? child : null
          )}
        </>
      ) : (
        children
      )}
      {subText}
      {title}
      {showRocket && (
        <RocketImage
          src={rocketImageSrc}
          alt="Rocket"
          width={86}
          height={86}
          priority
        />
      )}
      <TextContainer>
        {React.Children.map(children, (child) =>
          React.isValidElement(child) && child.type === Text ? child : null
        )}
      </TextContainer>
      {showSpinner && <LoadingSpinner />}
    </ContentWrapper>
  </Container>
);

export default LoadingLayout;
