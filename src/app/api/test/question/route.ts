import { NextRequest } from "next/server";
import { getTestQuestions } from "@/lib/api/test";

export async function GET(req: NextRequest) {
    return await getTestQuestions(req);
  }