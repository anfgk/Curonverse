import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = process.env.API_BASE_URL;
export async function postTestSubmit(req: NextRequest) {
  try {
    const { userId, type, answers } = await req.json();
    console.log("API_BASE_URL:", API_BASE_URL);
    console.log("Request Body:", { userId, type, answers });
    console.log("Posting to:", `${API_BASE_URL}/test/submit`);

    const response = await fetch(`${API_BASE_URL}/test/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, type, answers }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("External API Error:", errorText);
      throw new Error("Failed to post test submit");
    }

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error posting test submit:", error);
    return NextResponse.json(
      { error: "Failed to post test submit" },
      { status: 500 }
    );
  }
}
