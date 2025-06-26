const API_URL = "/api/healing-routine";
import { ApiResponse, HealingRoutine, HealingRoutineParams } from "@/data/types";

export const healingRoutineService = {
  async getHealingRoutine(params?: HealingRoutineParams): Promise<ApiResponse<HealingRoutine>> {
    const queryParams = new URLSearchParams();

    if (params?.mbtiId != null) {
      queryParams.append("mbtiId", params.mbtiId.toString());
    } else {
      throw new Error("mbtiId is required and must be a number.");
    }

    if (params?.rhythmId != null) {
      queryParams.append("rhythmId", params.rhythmId.toString());
    } else {
      throw new Error("rhythmId is required and must be a number.");
    }

    const response = await fetch(`${API_URL}?${queryParams}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("External API Error:", errorText);
      throw new Error("Failed to fetch healing routine");
    }

    return await response.json();
  },
};
