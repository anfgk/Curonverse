import { NextRequest, NextResponse } from "next/server";
import { API_BASE_URL } from "@/constants/api";

export async function getUserData(userId: string) {
  try {
    const response = await fetch(`${API_BASE_URL}`+`/user/${userId}`, {
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
  }
  catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
}

export async function postUserPorfile(req: NextRequest) {
    try {
        const userData = await req.json();
        console.log("Received user data:", userData);

        const response = await fetch(`${API_BASE_URL}/user/profile`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error("Failed to post user profile");
        }

        const result = await response.json();
        return NextResponse.json(result);
    } catch (error) {
        console.error("Error posting user profile:", error);
        return NextResponse.json({ error: "Failed to post user profile" }, { status: 500 });
    }
}