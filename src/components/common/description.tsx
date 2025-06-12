"use client";

import styled from "styled-components";

const DesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  padding-top: 12px;
  margin-left: 20px;
  font-weight: bold;
  gap: 4px;
`;

interface DescriptionProps {
  firsttext: string;
  secondtext: string;
}

const Description = ({ firsttext, secondtext }: DescriptionProps) => (
  <DesWrapper>
    <div>{firsttext}</div>
    <div>{secondtext}</div>
  </DesWrapper>
);

export default Description;
