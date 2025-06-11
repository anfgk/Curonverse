export interface UserProfile {
  name: string;
  gender: string;
  date: string;
}

// ProfileService 클래스 정의
class ProfileService {
  // 사용자 프로필 정보를 저장하기 위한 키 값
  private storageKey = "userProfile";

  // 사용자 프로필 정보를 세션 스토리지에 저장하는 메서드
  saveProfile(profile: UserProfile): void {
    // 클라이언트 환경에서만 세션 스토리지에 저장
    if (typeof window !== "undefined") {
      // 세션 스토리지에 프로필 정보 저장
      sessionStorage.setItem(this.storageKey, JSON.stringify(profile));
    }
  }

  // 세션 스토리지에서 사용자 프로필 정보를 가져오는 메서드
  getProfile(): UserProfile | null {
    // 클라이언트 환경에서만 세션 스토리지에서 프로필 정보 가져오기
    if (typeof window === "undefined") return null;

    // 세션 스토리지에서 프로필 정보 가져오기
    const savedProfile = sessionStorage.getItem(this.storageKey);
    // 프로필 정보가 없으면 null 반환
    if (!savedProfile) return null;
    // 프로필 정보를 JSON 형식으로 파싱하여 반환
    return JSON.parse(savedProfile) as UserProfile;
  }
}

// ProfileService 인스턴스 생성 및 내보내기
export const profileService = new ProfileService();
