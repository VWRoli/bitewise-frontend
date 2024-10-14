import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

type CustomTextFieldProps = TextFieldProps & {
  name: string;
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  isLoading: boolean;
};

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  name,
  label,
  value,
  onChange,
  onFocus,
  isLoading,
  ...rest
}) => {
  return (
    <TextField
      margin="dense"
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      disabled={isLoading}
      fullWidth
      {...rest}
    />
  );
};

export default CustomTextField;
