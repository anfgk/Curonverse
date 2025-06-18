import { postUserProfile } from "@/lib/api/user";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  return await postUserProfile(req);
}