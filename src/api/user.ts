import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL = process.env.API_BASE_URL;

export async function getUserData(userId: string) {
  try {
    const response = await fetch(`${API_BASE_URL}` + `/user/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }

    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
}

export async function postUserProfile(req: NextRequest) {
  try {
    const userData = await req.json();
    console.log("API_BASE_URL:", API_BASE_URL);
    console.log("Request Body:", userData);
    console.log("Posting to:", `${API_BASE_URL}/user/profile`);

    const response = await fetch(`${API_BASE_URL}/user/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("External API Error:", errorText);
      throw new Error("Failed to post user profile");
    }

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error posting user profile:", error);
    return NextResponse.json(
      { error: "Failed to post user profile" },
      { status: 500 }
    );
  }
}
