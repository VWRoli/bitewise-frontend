import React from 'react';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

interface IProps {
  label: string;
  id: string;
  icon: React.ReactNode;
  type: 'text' | 'password' | 'email';
}

const CustomFormControl = ({ label, id, icon, type = 'text' }: IProps) => {
  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        id={id}
        type={type}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="check" edge="end">
              {icon}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
    </FormControl>
  );
};

export default CustomFormControl;
