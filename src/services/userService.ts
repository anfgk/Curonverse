const API_URL = "/api/user";

interface UserProfile {
  name: string;
  gender: string;
  birthDate: string;
}

export const userService = {
  async getProfile(): Promise<UserProfile | null> {
    try {
      if (typeof window !== "undefined") {
        const userData = sessionStorage.getItem("user");
        if (userData) {
          return JSON.parse(userData);
        }
      }
      return null;
    } catch (error) {
      console.error("Error getting profile:", error);
      return null;
    }
  },

  async createUser(profile: UserProfile) {
    try {
      console.log("Posting profile to:", API_URL);
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profile),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("External API Error:", errorText);
        throw new Error("Failed to post user profile");
      }

      const data = await response.json();
      if (typeof window !== "undefined") {
        sessionStorage.setItem("user", JSON.stringify(data));
      }
      return data;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  },
};
