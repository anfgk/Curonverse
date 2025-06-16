import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const userData = await req.json();
    console.log("Received user data:", userData);

    // 임시로 사용자 ID 생성 (실제로는 DB에서 생성)
    const userId = Math.floor(Math.random() * 1000000);

    // 응답 데이터 생성
    const response = {
      data: {
        id: userId,
        ...userData,
      },
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error processing user data:", error);
    return NextResponse.json(
      { error: "Failed to process user data" },
      { status: 500 }
    );
  }
}
