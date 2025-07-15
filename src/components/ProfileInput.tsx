import React from "react";
import styled from "styled-components";
import Input from "@/components/Input";
import Info from "@/components/Info";

const InputWrapper = styled.div.withConfig({
  shouldForwardProp: (prop: string | number) => prop !== "isFocused" && prop !== "anyFieldFocused",
})<{
  $isFocused: boolean;
  $anyFieldFocused: boolean;
}>`
  position: relative;
  z-index: ${(props) => (props.$isFocused ? 2 : 1)};
  transition: opacity 0.3s ease;
  opacity: ${(props) => {
    if (!props.$anyFieldFocused) return 1;
    return props.$isFocused ? 1 : 0.5;
  }};
`;

const HelpText = styled.div`
  font-size: 12px;
  color: #b0b0b0;
  margin-top: 12px;
  margin-left: 20px;
`;

interface ProfileInputProps {
  label: string;
  value: string;
  type?: string;
  placeholder?: string;
  helpText?: string;
  isFocused: boolean;
  anyFieldFocused: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
}

const ProfileInput: React.FC<ProfileInputProps> = ({
  label,
  value,
  type = "text",
  placeholder,
  helpText,
  isFocused,
  anyFieldFocused,
  onChange,
  onFocus,
  onBlur,
}) => {
  return (
    <InputWrapper $isFocused={isFocused} $anyFieldFocused={anyFieldFocused}>
      <Info mainText={label} />
      <Input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {helpText && <HelpText>{helpText}</HelpText>}
    </InputWrapper>
  );
};

export default ProfileInput;
