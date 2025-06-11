import React from "react";
import styled from "styled-components";

const Information = styled.div`
  font-size: 12px;
  color: #b0b0b0;
  margin: 12px 20px 0;
`;

const PrivacyInfo: React.FC = () => {
  return (
    <Information>
      개인정보 수집 및 이용 동의 개인정보 수집 및 이용동의 목적: 쿠론버스 웹앱
      진단 서비스 이용 및 데이터 수집을 통한 서비스 지속적인 개선 개인정보 수집
      항목: 이름/ 생년월일 동의를 거부할 경우 진단 서비스의 이용이 어렵습니다.
    </Information>
  );
};

export default PrivacyInfo;
