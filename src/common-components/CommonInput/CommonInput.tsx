import React, { ChangeEvent, useMemo } from "react";
import PropTypes from "prop-types";
import { InputStyle } from "./CommonInput-style";

interface IProps {
  type?: string;
  touched?: boolean;
  error?: string;
  name?: string;
  onReset?: () => void;
  value?: string;
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
  onReset,
  onChange,
  placeholder,
  type = "text",
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
      />

      {hasError && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  touched: PropTypes.bool,
  error: PropTypes.string,
  onReset: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  error: "",
  value: "",
  touched: false,
  onReset: () => {},
  onChange: () => {},
  placeholder: "",
  type: "text",
  name: "",
  onBlur: () => {},
};
