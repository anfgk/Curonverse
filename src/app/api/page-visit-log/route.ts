import { NextRequest } from "next/server";
import { postPageVisitLog } from "@/lib/api/page-visit-log";

export async function POST(req: NextRequest) {
    return await postPageVisitLog(req);
}