import { NextRequest } from "next/server";
import { postTestSubmit } from "@/lib/api/test";

export async function POST(req: NextRequest) {
  return await postTestSubmit(req);
}