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
      // 백엔드 API 호출 대신 클라이언트 사이드에서 처리
      const mockUserId = Math.floor(Math.random() * 1000000) + 1;
      const userData = {
        id: mockUserId,
        ...profile,
        createdAt: new Date().toISOString()
      };

      if (typeof window !== "undefined") {
        sessionStorage.setItem("user", JSON.stringify(userData));
        sessionStorage.setItem("userId", userData.id.toString());
      }

      console.log("User created successfully:", userData);
      return { data: userData };
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  },
};
