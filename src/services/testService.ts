const API_URL = `/api/test`;

interface AnswerPayload {
  userId: number;
  type: string;
  answers: { questionId: number; score: number }[];
}

export const testService = {
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
