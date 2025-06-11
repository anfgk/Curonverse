import React from "react";
import styled from "styled-components";
import {
  Header,
  PageNumber,
  MainTitle,
  Description,
} from "@/styles/ResultPageStyles";

interface ResultHeaderProps {
  pageNumber: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  color?: string;
}

const StyledPageNumber = styled(PageNumber)<{ color?: string }>`
  color: ${(props) => props.color || "inherit"};
`;

const StyledMainTitle = styled(MainTitle)<{ color?: string }>`
  color: ${(props) => props.color || "inherit"};
  font-size: 24px;
`;

const ResultHeader: React.FC<ResultHeaderProps> = ({
  pageNumber,
  title,
  description,
  color,
}) => {
  return (
    <Header>
      <StyledPageNumber color={color}>{pageNumber}</StyledPageNumber>
      <StyledMainTitle color={color}>{title}</StyledMainTitle>
      {description && <Description color={color}>{description}</Description>}
    </Header>
  );
};

export default ResultHeader;
