export interface UserProfile {
  name: string;
  gender: string;
  date: string;
}

class ProfileService {
  private storageKey = "userProfile";

  saveProfile(profile: UserProfile): void {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(this.storageKey, JSON.stringify(profile));
    }
  }

  getProfile(): UserProfile | null {
    if (typeof window === "undefined") return null;

    const savedProfile = sessionStorage.getItem(this.storageKey);
    if (!savedProfile) return null;
    return JSON.parse(savedProfile) as UserProfile;
  }
}

export const profileService = new ProfileService();
