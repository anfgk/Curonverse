import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = process.env.API_BASE_URL;
export async function postPageVisitLog(req: NextRequest) {
  try {
    console.log("API_BASE_URL:", API_BASE_URL);
    console.log("Fetching page visit log from:", `${API_BASE_URL}/page-visit-log`);
    const body = await req.json();
    const url = `${API_BASE_URL}/page-visit-log`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error("External API Error:", errorText);
      throw new Error("Failed to fetch page visit log");
    }
    const result = await response.json();
    console.log("Received page visit log:", result);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching page visit log:", error);
    return NextResponse.json(
      { error: "Failed to fetch page visit log" },
      { status: 500 }
    );
  }
}