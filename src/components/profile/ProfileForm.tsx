import Text from "@/components/SubText";
import Title from "@/components/Title";
import NextButton from "@/components/NextButton";
import ProfileInput from "@/components/ProfileInput";

export default function ProfileForm({
  name,
  gender,
  date,
  focusedField,
  isFormValid,
  handleChange,
  handleFocus,
  handleBlur,
  handleNextClick,
}: any) {
  return (
    <>
      <Text text="프로필 설정" variant="subtitle" />
      <Title
        mainText="탑승권에 기입 될"
        highlightText="프로필 정보를 입력"
        subText="해주세요."
      />

      <ProfileInput
        label="이름"
        value={name}
        onChange={handleChange("name")}
        onFocus={handleFocus("name")}
        onBlur={handleBlur}
        placeholder="이름을 입력해주세요."
        isFocused={focusedField === "name"}
        anyFieldFocused={focusedField !== null}
      />
      <ProfileInput
        label="성별"
        value={gender}
        type="gender"
        onChange={handleChange("gender")}
        onFocus={handleFocus("gender")}
        onBlur={handleBlur}
        isFocused={focusedField === "gender"}
        anyFieldFocused={focusedField !== null}
      />
      <ProfileInput
        label="생년월일"
        value={date}
        type="date"
        onChange={handleChange("date")}
        onFocus={handleFocus("date")}
        onBlur={handleBlur}
        placeholder="생년월일을 입력해주세요."
        helpText="생년월일은 정확한 감정 진단을 위해 사용돼요."
        isFocused={focusedField === "date"}
        anyFieldFocused={focusedField !== null}
      />
      <NextButton onClick={handleNextClick} disabled={!isFormValid} />
    </>
  );
}
