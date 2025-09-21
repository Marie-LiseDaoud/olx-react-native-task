import React from "react";
import { useField } from "formik";
import Input from "../TextInput";

const FormikField = ({ name, ...props }) => {
  const [field, meta] = useField(name);

  return (
    <Input
      {...props}
      value={field.value}
      onChangeText={field.onChange(name)}
      onBlur={field.onBlur(name)}
      error={meta.touched && meta.error}
    />
  );
};

export default FormikField;
