import styled from "styled-components";

const Card = styled.div`
  background: #3ec1cf;
  border-radius: 16px;
  padding: 32px 16px;
  margin-bottom: 20px;
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
`;

const Desc = styled.div`
  font-size: 16px;
  font-weight: normal;
  margin-top: 12px;
`;

export default function RoutineCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <Card>
      {title}
      <Desc>{desc}</Desc>
    </Card>
  );
}
