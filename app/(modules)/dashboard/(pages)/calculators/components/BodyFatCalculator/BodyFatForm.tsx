import CalculatorInput from '@/app/(modules)/dashboard/(pages)/calculators/components/CalculatorInput';
import { BODY_FAT_CALCULATOR_INPUTS } from '@/app/(modules)/dashboard/(pages)/calculators/constants';
import { EGender } from '@/app/(modules)/dashboard/(pages)/calculators/enums';
import { IBodyFatValues } from '@/app/(modules)/dashboard/(pages)/calculators/interfaces';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import React from 'react';

interface IProps {
  handleCalculate: (e: React.FormEvent<HTMLFormElement>) => void;
  values: IBodyFatValues;
  setValues: React.Dispatch<React.SetStateAction<IBodyFatValues>>;
}
const BodyFatForm = ({ handleCalculate, values, setValues }: IProps) => {
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
      <Button variant="contained" color="primary" type="submit">
        Calculate
      </Button>
      <Button variant="text" color="primary" onClick={handleClear}>
        Clear
      </Button>
    </form>
  );
};

export default BodyFatForm;
