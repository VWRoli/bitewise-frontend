import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { Controller, useFormContext, FieldError } from 'react-hook-form';

type CustomTextFieldProps = TextFieldProps & {
  name: string;
  label: string;
  rules?: object;
  defaultValue?: string | number;
  isLoading: boolean;
};

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  name,
  label,
  isLoading,
  rules = {},
  defaultValue = '',
  ...rest
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const fieldError: FieldError | undefined = errors[name] as FieldError;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          margin="dense"
          fullWidth
          error={!!fieldError}
          helperText={fieldError ? fieldError.message : ''}
          disabled={isLoading}
          {...rest}
        />
      )}
    />
  );
};

export default CustomTextField;
