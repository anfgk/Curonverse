interface UserProfile {
  name: string;
  gender: string;
  birthDate: string;
  id?: string;
}

export const userService = {
  getProfile(): UserProfile | null {
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("user");
      if (userData) {
        return JSON.parse(userData);
      }
    }
    return null;
  },

  createUser(profile: UserProfile) {
    if (typeof window !== "undefined") {
      // id를 현재 시간으로 생성
      const user = { ...profile, id: Date.now().toString() };
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("userId", user.id);
      return user;
    }
    return null;
  },
};
