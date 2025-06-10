"use client";

import React from "react";
import Text from "@/components/Text";
import styled from "styled-components";
import { redirect } from "next/navigation";

const Container = styled.div`
  display: flex;
  height: 100%;
`;

export default function Home() {
  redirect("/start");
}
