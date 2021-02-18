import React, { ReactNode } from "react";

import Select from "react-select";

import { useOriginsOptions } from "../../features/AddProduct/ProductValidation";
import Portal from "../Modal/Modal";
import { ModalWrapper } from "../ModalsWrapper/ModalsWrapper";
import { Input } from "../CommonInput/CommonInput";

interface IProps {
  closeFunk?: () => void;
  headline: string;
  children: ReactNode;
  formik: any;
}

export const Form: React.FC<IProps> = ({
  formik,
  closeFunk,
  headline,
  children,
}) => {
  const options = useOriginsOptions();

  return (
    <Portal>
      <ModalWrapper headline={headline} handler={closeFunk}>
        <form onSubmit={formik.handleSubmit}>
          <label>
            {" "}
            <div>1. Product name</div>
            <Input
              name="name"
              onBlur={formik.handleBlur}
              placeholder="Product name"
              error={formik.errors.name}
              value={formik.values.name}
              onChange={formik.handleChange}
              touched={formik.touched.name}
            />
          </label>
          <label>
            <div> 2. Price</div>
            <Input
              type="number"
              name="price"
              onBlur={formik.handleBlur}
              placeholder="Price"
              error={formik.errors.price}
              value={formik.values.price.toString()}
              onChange={formik.handleChange}
              touched={formik.touched.price}
            />
          </label>
          <label>
            <div> 3. Origin</div>
            <Select
              name="role"
              options={options}
              onChange={(option) =>
                formik.setFieldValue("origin", option!.value)
              }
              value={options.find(
                (option) => option.value === formik.values.origin
              )}
            />
          </label>
          {children}
        </form>
      </ModalWrapper>
    </Portal>
  );
};
