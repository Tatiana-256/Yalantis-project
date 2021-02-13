import React from "react";
import { FormikErrors } from "formik/dist/types";

import { Input } from "../../../components/CommonInput/CommonInput";
import { ICountries } from "../../../store/redux/slices/filterSlice";

interface IProps {
  country: ICountries;
  originsFilter: string[];
  index: number;
  groupName: string;
  width?: number;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<FormikErrors<any>> | Promise<void>;
}

export const CountryCheck: React.FC<IProps> = ({
  country,
  index,
  originsFilter,
  setFieldValue,
  groupName,
  width,
}) => {
  return (
    <label>
      <div>{country.displayName}</div>
      <Input
        width={width}
        type="checkbox"
        name="groups"
        value={country.value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const value = event.target.checked ? event.target.value : "";
          return setFieldValue(`${groupName}.${index}`, value);
        }}
        checked={originsFilter.includes(country.value)}
      />
    </label>
  );
};
