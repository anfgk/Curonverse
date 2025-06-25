import { NextRequest } from "next/server";
import { getPoem } from "@/lib/api/poem";

export async function GET(req: NextRequest) {
    return await getPoem(req);
}