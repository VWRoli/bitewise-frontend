'use client';
import { Button, Slide, Typography } from '@mui/material';
import React, { useState } from 'react';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import { DEFAULT_CALORIE_VALUES } from '@/app/(modules)/dashboard/(pages)/calculators/constants';
import {
  ICalorieResults,
  ICalorieValues,
} from '@/app/(modules)/dashboard/(pages)/calculators/interfaces';
import CalorieForm from '@/app/(modules)/dashboard/(pages)/calculators/components/CalorieCalculator/CalorieForm';
import CalorieResults from '@/app/(modules)/dashboard/(pages)/calculators/components/CalorieCalculator/CalorieResults';
import { calculateWeightChangeCalories } from '@/app/(modules)/dashboard/(pages)/calculators/helpers/calorie.helpers';

const CalorieCalculator = () => {
  const [values, setValues] = useState<ICalorieValues>(DEFAULT_CALORIE_VALUES);
  const [results, setResults] = useState<ICalorieResults | null>(null);

  const handleCalculate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = calculateWeightChangeCalories(values);

    setResults({ ...result });
  };

  const reset = () => {
    setResults(null);
    setValues(DEFAULT_CALORIE_VALUES);
  };

  return (
    <div className="shadow-md bg-white rounded-xl w-full xl:w-fit max-w-80 relative">
      <div className="px-4">
        <div className="bg-primary-gradient rounded-lg shadow-table-header -mt-6 flex justify-between items-center px-4 py-6">
          <Typography variant="h6" className="text-base text-white">
            Calorie calculator (Metric units)
          </Typography>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="h-4"></div>
        <CalorieForm
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
            <CalorieResults results={results} />
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

export default CalorieCalculator;
