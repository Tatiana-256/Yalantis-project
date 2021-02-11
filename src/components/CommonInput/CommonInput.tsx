import React, { ChangeEvent, useMemo } from "react";
import { InputStyle } from "./CommonInputStyle";

interface IProps {
  type?: string;
  touched?: boolean;
  error?: string;
  name?: string;
  onReset?: () => void;
  value?: string | number;
  checked?: boolean;
  onChange?: {
    (e: ChangeEvent<any>): void;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    <T_1 = string | ChangeEvent<any>>(field: T_1): T_1 extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void;
  };
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
}) => {
  const hasError = useMemo(() => error && touched, [error, touched]);

  return (
    <div>
      <InputStyle
        name={name}
        error={Boolean(error)}
        usedInput={Boolean(value)}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        checked={checked}
      />

      {hasError && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};
