const API_URL = `${process.env.NEXT_PUBLIC_SITE_URL}/api/user`;

export const profileService = {
  async createUser(profile: { email: string; name: string; gender: string; birthDateTime: string }) {
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
    return await response.json();
  },
};
