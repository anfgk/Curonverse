import { useState } from "react";
import { useRouter } from "next/navigation";
import { profileService } from "@/services/profileService";

export function useProfileForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birthDateTime, setDate] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const isFormValid = email !== "" && name !== "" && gender !== "" && birthDateTime !== "";

  const handleChange = (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (field === "email") setEmail(value);
      else if (field === "name") setName(value);
      else if (field === "gender") setGender(value);
      else if (field === "date") setDate(value);
    };

  const handleFocus = (field: string) => () => setFocusedField(field);
  const handleBlur = () => setFocusedField(null);

  const handleNextClick = async () => {
    if (!isFormValid) return;
    try {
      const profile = { email, name, gender, birthDateTime };
      console.log("Submitting profile:", profile);
      const response = await profileService.createUser(profile);
      console.log("Profile saved successfully:", response);
      sessionStorage.setItem("user", JSON.stringify(response));
      router.replace("/step");
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("사용자 정보 저장에 실패했습니다.");
    }
  };

  return {
    email,
    name,
    gender,
    birthDateTime,
    focusedField,
    isFormValid,
    handleChange,
    handleFocus,
    handleBlur,
    handleNextClick,
  };
}
