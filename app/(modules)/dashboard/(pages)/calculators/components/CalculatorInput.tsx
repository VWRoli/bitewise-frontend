import { FormControl, InputAdornment, TextField } from '@mui/material';
import React from 'react';

interface IProps {
  label: string;
  adornment: string;
  value: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const CalculatorInput = ({ label, adornment, value, handleChange }: IProps) => {
  return (
    <FormControl variant="outlined">
      <TextField
        label={label.charAt(0).toUpperCase() + label.slice(1)}
        id={label}
        value={value}
        onChange={handleChange}
        type="number"
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="start">{adornment}</InputAdornment>
            ),
          },
        }}
      />
    </FormControl>
  );
};

export default CalculatorInput;
