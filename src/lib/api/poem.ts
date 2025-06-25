import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = process.env.API_BASE_URL;
export async function getPoem(req: NextRequest) {
  try {
    console.log("API_BASE_URL:", API_BASE_URL);
    console.log("Fetching poem from:", `${API_BASE_URL}/poem/list`);
    const url = `${API_BASE_URL}/poem/list`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error("External API Error:", errorText);
      throw new Error("Failed to fetch poem");
    }
    const result = await response.json();
    console.log("Received poem:", result);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching poem:", error);
    return NextResponse.json(
      { error: "Failed to fetch poem" },
      { status: 500 }
    );
  }
}