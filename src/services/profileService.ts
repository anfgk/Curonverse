const API_URL = "/api/user/profile";

export const profileService = {
  async createUser(profile: { name: string; gender: string; date: string }) {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profile),
    });

    if (!response.ok) throw new Error("Failed to create user");
    return await response.json();
  },
};
