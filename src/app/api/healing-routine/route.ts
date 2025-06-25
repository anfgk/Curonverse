import { NextRequest } from "next/server";
import { getHealingroutine } from "@/lib/api/healing-routine";

export async function GET(req: NextRequest) {
    return await getHealingroutine(req);
}