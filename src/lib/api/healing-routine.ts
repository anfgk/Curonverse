import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = process.env.API_BASE_URL;
export async function getHealingroutine(req: NextRequest) {
  try {
    console.log("API_BASE_URL:", API_BASE_URL);
    console.log("Fetching healing routine from:", `${API_BASE_URL}/healing-routine`);
    const url = `${API_BASE_URL}/healing-routine?${req.nextUrl.searchParams.toString()}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error("External API Error:", errorText);
      throw new Error("Failed to fetch healing routine");
    }
    const result = await response.json();
    console.log("Received healing routine:", result);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching healing routine:", error);
    return NextResponse.json(
      { error: "Failed to fetch healing routine" },
      { status: 500 }
    );
  }
}