import React, { useMemo } from "react";
import { InputStyle } from "./CommonInputStyle";

interface IProps {
  type?: string;
  touched?: boolean;
  error?: string;
  name?: string;
  onReset?: () => void;
  value?: string | number;
  checked?: boolean;
  width?: number;
  onChange?: any;
  placeholder?: string;
  onBlur?: {
    (e: React.FocusEvent<any>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
}

export const Input: React.FC<IProps> = ({
  onBlur,
  name,
  error,
  value,
  touched,
  onChange,
  placeholder,
  type = "text",
  checked,
  width,
}) => {
  const hasError = useMemo(() => error && touched, [error, touched]);
  const inputValue = Number.isNaN(value) ? "" : value;
  return (
    <>
      <InputStyle
        width={width}
        name={name}
        error={Boolean(error)}
        usedInput={Boolean(value)}
        type={type}
        value={inputValue}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        checked={checked}
      />

      {hasError && <div style={{ color: "red" }}>{error}</div>}
    </>
  );
};
