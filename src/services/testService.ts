const API_URL = `/api/test`;

interface QuestionParams {
  dimension?: string;
  orderIndex?: number;
}

interface AnswerPayload {
  userId: number;
  type: string;
  answers: { questionId: number; score: number }[];
}

export const testService = {
  async getTestQuestions(param?: QuestionParams) {
    const queryParams = new URLSearchParams();

    if (param && param.dimension) {
      queryParams.append("dimension", param.dimension);
    }
    if (param && param.orderIndex !== undefined) {
      queryParams.append("order_index", param.orderIndex.toString());
    }

    const response = await fetch(
      `${API_URL}/question?${queryParams.toString()}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("External API Error:", errorText);
      throw new Error("Failed to fetch test question");
    }

    return await response.json();
  },

  async submitTest(data: AnswerPayload) {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("External API Error:", errorText);
      throw new Error("Failed to post test sumbit");
    }
    return await response.json();
  },
};
