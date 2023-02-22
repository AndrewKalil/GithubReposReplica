import { Input } from "@material-tailwind/react";
import React, { ChangeEvent } from "react";

type FormInputProps = {
  label: string;
  type?: string;
  value: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const FormInputComponent = ({
  label,
  type,
  value,
  onChange,
  name,
}: FormInputProps) => {
  return (
    <Input
      onChange={onChange}
      value={value}
      color="blue"
      type={type}
      name={name}
      label={label}
    />
  );
};

export default FormInputComponent;
