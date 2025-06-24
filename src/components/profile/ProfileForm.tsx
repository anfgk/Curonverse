import Title from "@/components/Title";
import ProfileInput from "@/components/ProfileInput";
import SubText from "@/components/SubText";
import styled from "styled-components";
import ProfileAgreement from "./ProfileAgreement";
import ButtonWrapper from "@/components/buttons/ButtonWrapper";
import NextButton from "@/components/buttons/NextButton";
import BeforeButton from "@/components/buttons/BeforeButton";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  jsustify-content: space-between;
  height: 100vh;
  position: relative;
`;

export default function ProfileForm({
  name,
  gender,
  birthDate,
  focusedField,
  isFormValid,
  handleChange,
  handleFocus,
  handleBlur,
  handleBeforeClick,
  handleNextClick,
}: any) {
  return (
    <FormContainer>
      <SubText text="프로필 설정" variant="subtitle" />
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
        value={birthDate}
        type="date"
        onChange={handleChange("date")}
        onFocus={handleFocus("date")}
        onBlur={handleBlur}
        placeholder="생년월일을 입력해주세요."
        helpText="생년월일은 정확한 감정 진단을 위해 사용돼요."
        isFocused={focusedField === "date"}
        anyFieldFocused={focusedField !== null}
      />
      <ProfileAgreement />
      <ButtonWrapper>
        <BeforeButton onClick={handleBeforeClick} />
        <NextButton
          onClick={handleNextClick}
          disabled={!isFormValid}
          variant="profile"
        />
      </ButtonWrapper>
    </FormContainer>
  );
}
