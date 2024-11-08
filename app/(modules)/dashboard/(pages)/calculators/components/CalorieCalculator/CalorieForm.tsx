import CalculatorInput from '@/app/(modules)/dashboard/(pages)/calculators/components/CalculatorInput';
import {
  BMI_CALCULATOR_INPUTS,
  CALORIE_CALCULATOR_INPUTS,
} from '@/app/(modules)/dashboard/(pages)/calculators/constants';
import {
  EActivityLevel,
  EGender,
} from '@/app/(modules)/dashboard/(pages)/calculators/enums';
import { ICalorieValues } from '@/app/(modules)/dashboard/(pages)/calculators/interfaces';
import { makeStringReadable } from '@/app/common/helpers';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React from 'react';

interface IProps {
  handleCalculate: (e: React.FormEvent<HTMLFormElement>) => void;
  values: ICalorieValues;
  setValues: React.Dispatch<React.SetStateAction<ICalorieValues>>;
}
const CalorieForm = ({ handleCalculate, values, setValues }: IProps) => {
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
      activityLevel: EActivityLevel.SEDENTARY,
    });
  };

  const handleActivityChange = (event: SelectChangeEvent<EActivityLevel>) => {
    setValues((prev) => ({
      ...prev,
      activityLevel: event.target.value as EActivityLevel,
    }));
  };

  return (
    <form className="flex flex-col gap-2 px-4 pb-4" onSubmit={handleCalculate}>
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
      {CALORIE_CALCULATOR_INPUTS.map((input) => (
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
      <Select
        labelId="activity-label"
        id="activity"
        value={values.activityLevel}
        label="Activity"
        onChange={handleActivityChange}
      >
        {Object.values(EActivityLevel).map((level) => (
          <MenuItem key={level} value={level}>
            {makeStringReadable(level)}
          </MenuItem>
        ))}
      </Select>

      <Button variant="contained" color="primary" type="submit">
        Calculate
      </Button>
      <Button variant="text" color="primary" onClick={handleClear}>
        Clear
      </Button>
    </form>
  );
};

export default CalorieForm;
