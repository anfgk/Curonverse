import { useState } from "react";
import { useRouter } from "next/navigation";
import { userService } from "@/services/userService";

export function useProfileForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setDate] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const isFormValid =  name !== "" && gender !== "" && birthDate !== "";

  const handleChange = (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (field === "name") setName(value);
      else if (field === "gender") setGender(value);
      else if (field === "date") setDate(value);
    };

  const handleFocus = (field: string) => () => setFocusedField(field);
  const handleBlur = () => setFocusedField(null);

  const handleNextClick = () => {
    if (!isFormValid) return;
    const profile = { name, gender, birthDate };
    const user = userService.createUser(profile);
    if (user) {
      router.replace("/step");
    } else {
      alert("사용자 정보 저장에 실패했습니다.");
    }
  };

  return {
    name,
    gender,
    birthDate,
    focusedField,
    isFormValid,
    handleChange,
    handleFocus,
    handleBlur,
    handleNextClick,
  };
}
