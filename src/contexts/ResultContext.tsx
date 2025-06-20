import { createContext, useContext } from "react";
import { TestResult } from "@/data/types";

interface ResultContextProps {
  testResult: TestResult;
  userName: string;
  scrollToSection: (section: number) => void;
};

export const ResultContext = createContext<ResultContextProps | null>(null);

export const useResultContext = () => {
  const context = useContext(ResultContext);
  if (!context) throw new Error("ResultContext not found");
  return context;
};