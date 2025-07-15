const API_URL = "/api/poem";
import { ApiResponse, Poem } from "@/data/types";

export const poemService = {
  async getPoem(): Promise<ApiResponse<Poem[]>> {
    try {
      console.log("Fetching poem from:", API_URL);
      const response = await fetch(API_URL, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("External API Error:", errorText);
        throw new Error("Failed to fetch poem");
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching poem:", error);
      throw error;
    }
  },
};