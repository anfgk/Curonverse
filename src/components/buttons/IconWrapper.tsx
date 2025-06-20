"use client";
import React from "react";
import { IconWrapper as Wrapper } from "./styles";

const IconWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default IconWrapper;