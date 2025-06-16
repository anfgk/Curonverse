import { postTestSubmit } from "@/api/test";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  return await postTestSubmit(req);
}