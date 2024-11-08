'use client';
import { Button, Slide, Typography } from '@mui/material';
import React, { useState } from 'react';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import BmiForm from '@/app/(modules)/dashboard/(pages)/calculators/components/BmiCalculator/BmiForm';
import {
  IBmiResults,
  IBmiValues,
} from '@/app/(modules)/dashboard/(pages)/calculators/interfaces';
import BmiResults from '@/app/(modules)/dashboard/(pages)/calculators/components/BmiCalculator/BmiResults';
import { DEFAULT_BMI_VALUES } from '@/app/(modules)/dashboard/(pages)/calculators/constants';
import {
  bmiCategoryCalculator,
  calculateBMI,
} from '@/app/(modules)/dashboard/(pages)/calculators/helpers';

const BmiCalculator = () => {
  const [values, setValues] = useState<IBmiValues>(DEFAULT_BMI_VALUES);
  const [results, setResults] = useState<IBmiResults | null>(null);

  const handleCalculate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const bmi = calculateBMI(values.weight, values.height);
    const bmiCategory = bmiCategoryCalculator(bmi);

    setResults({
      bmi,
      bmiCategory: bmiCategory,
    });
  };

  const reset = () => {
    setResults(null);
    setValues(DEFAULT_BMI_VALUES);
  };

  return (
    <div className="shadow-md bg-white rounded-xl w-full xl:w-fit max-w-80 relative">
      <div className="px-4">
        <div className="bg-primary-gradient rounded-lg shadow-table-header -mt-6 flex justify-between items-center px-4 py-6">
          <Typography variant="h6" className="text-base text-white">
            BMI calculator (Metric units)
          </Typography>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="h-4"></div>
        <BmiForm
          handleCalculate={handleCalculate}
          values={values}
          setValues={setValues}
        />
        <Slide
          direction="up"
          in={results ? true : false}
          mountOnEnter
          unmountOnExit
        >
          <div className="bg-white rounded-xl absolute bottom-0 left-0 h-[96%] w-full z-10 flex flex-col justify-center items-center gap-8">
            <BmiResults results={results} />
            <Button
              variant="outlined"
              startIcon={<ReplayOutlinedIcon />}
              onClick={reset}
            >
              Calculate again
            </Button>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default BmiCalculator;
