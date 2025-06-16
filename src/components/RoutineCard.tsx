import styled from "styled-components";

const Card = styled.div<{ bgColor: string }>`
  background: ${(props) => props.bgColor};
  border-radius: 10px;
  padding: 47px 16px;
  margin-bottom: 20px;
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  width: 270px;
  height: 218px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  white-space: pre-line;
  line-height: 1.4;
`;

const Desc = styled.div`
  font-size: 16px;
  font-weight: normal;
  margin-top: 12px;
  white-space: pre-line;
  line-height: 1.4;
`;

export default function RoutineCard({
  title,
  desc,
  bgColor = "#3ec1cf",
}: {
  title: string;
  desc: string;
  bgColor?: string;
}) {
  return (
    <Card bgColor={bgColor}>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
    </Card>
  );
}
