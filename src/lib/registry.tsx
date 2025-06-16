"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

// StyledComponentsRegistry 컴포넌트 정의
export default function StyledComponentsRegistry({
  children, // 이 컴포넌트 내부에 렌더링될 자식 요소들 (텍스트, JSX 등)
}: {
  children: React.ReactNode; // 이 컴포넌트 내부에 렌더링될 자식 요소들 (텍스트, JSX 등)
}) {
  // ServerStyleSheet 인스턴스를 생성하여 스타일 관리
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  // useServerInsertedHTML 훅을 사용하여 서버 삽입 HTML 처리
  useServerInsertedHTML(() => {
    // 스타일 요소를 가져옴
    const styles = styledComponentsStyleSheet.getStyleElement();
    // 스타일 요소를 가져옴
    styledComponentsStyleSheet.instance.clearTag();
    // 스타일 요소를 반환
    return <>{styles}</>;
  });

  // 클라이언트 환경에서는 자식 요소들을 그대로 렌더링
  if (typeof window !== "undefined") return <>{children}</>;

  // 서버 환경에서는 스타일 관리를 위해 StyleSheetManager 사용
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
