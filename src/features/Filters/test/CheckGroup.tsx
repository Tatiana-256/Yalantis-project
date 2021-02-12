import React from "react";
import { Field, ErrorMessage } from "formik";
import { ICountries } from "../../../store/redux/slices/filterSlice";

// import TextError from "./TextError";

function CheckboxGroup(props: { options: ICountries[] }) {
  debugger;
  const { options } = props;
  return (
    <div>
      <Field name="countries">
        {options.map((option: ICountries) => {
          return (
            <React.Fragment key={Math.random().toString()}>
              <input
                type="checkbox"
                id={option.value}
                value={option.value}
                checked={option.isChecked}
              />
            </React.Fragment>
          );
        })}
      </Field>
    </div>
  );
}

export default CheckboxGroup;
