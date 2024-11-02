'use client';
import CalculatorInput from '@/app/(modules)/dashboard/(pages)/calculators/components/CalculatorInput';
import {
  BODY_FAT_CALCULATOR_INPUTS,
  DEFAULT_VALUES,
} from '@/app/(modules)/dashboard/(pages)/calculators/constants';
import { EGender } from '@/app/(modules)/dashboard/(pages)/calculators/enums';
import { calculateBodyFatPercentage } from '@/app/(modules)/dashboard/(pages)/calculators/helpers';
import { IBodyFatValues } from '@/app/(modules)/dashboard/(pages)/calculators/interfaces';
import { LoadingButton } from '@mui/lab';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

const BodyFatCalculator = () => {
  const [values, setValues] = useState<IBodyFatValues>(DEFAULT_VALUES);

  const handleCalculate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = calculateBodyFatPercentage(values);
    console.log('result', result);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      gender: (event.target as HTMLInputElement).value as EGender,
    }));
  };

  const handleClear = () => {
    setValues({
      gender: EGender.MALE,
      age: 0,
      weight: 0,
      height: 0,
      neck: 0,
      waist: 0,
      hip: 0,
    });
  };
  return (
    <div className="shadow-md bg-white rounded-xl w-fit">
      <div className="px-4">
        <div className="bg-primary-gradient rounded-lg shadow-table-header -mt-6 flex justify-between items-center px-4 py-6">
          <Typography variant="h6" className="text-base text-white">
            Body Fat calculator (Metric units)
          </Typography>
        </div>
      </div>
      <div className="h-4"></div>
      <form
        className="flex flex-col gap-2 px-4 pb-4"
        onSubmit={handleCalculate}
      >
        <FormControl>
          <FormLabel id="body-fat-calculator-gender">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="body-fat-calculator-gender"
            defaultValue={EGender.MALE}
            name="radio-buttons-group"
            row
            onChange={handleRadioChange}
          >
            <FormControlLabel
              value={EGender.FEMALE}
              control={<Radio />}
              label="Female"
              checked={values.gender === EGender.FEMALE}
            />
            <FormControlLabel
              value={EGender.MALE}
              control={<Radio />}
              label="Male"
              checked={values.gender === EGender.MALE}
            />
          </RadioGroup>
        </FormControl>
        {BODY_FAT_CALCULATOR_INPUTS.map((input) => (
          <CalculatorInput
            key={input.label}
            {...input}
            value={values[input.label]}
            handleChange={(e) =>
              setValues((prev) => ({
                ...prev,
                [input.label]: +e.target.value,
              }))
            }
          />
        ))}
        {values.gender === 'female' && (
          <CalculatorInput
            label="Hip"
            adornment="cm"
            value={values.hip}
            handleChange={(e) =>
              setValues((prev) => ({
                ...prev,
                hip: +e.target.value,
              }))
            }
          />
        )}
        <LoadingButton variant="contained" color="primary" type="submit">
          Calculate
        </LoadingButton>
        <Button variant="text" color="primary" onClick={handleClear}>
          Clear
        </Button>
      </form>
    </div>
  );
};

export default BodyFatCalculator;
