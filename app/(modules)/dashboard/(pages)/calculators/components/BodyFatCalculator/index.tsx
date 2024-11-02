'use client';

import BodyFatForm from '@/app/(modules)/dashboard/(pages)/calculators/components/BodyFatCalculator/BodyFatForm';
import BodyFatResults from '@/app/(modules)/dashboard/(pages)/calculators/components/BodyFatCalculator/BodyFatResults';
import { DEFAULT_VALUES } from '@/app/(modules)/dashboard/(pages)/calculators/constants';
import {
  calculateBodyFatMass,
  calculateBodyFatPercentage,
  calculateBodyFatWithBMI,
  calculateLeanBodyMass,
  categorizeBodyFat,
} from '@/app/(modules)/dashboard/(pages)/calculators/helpers';
import {
  IBodyFatResults,
  IBodyFatValues,
} from '@/app/(modules)/dashboard/(pages)/calculators/interfaces';
import { Button, Slide, Typography } from '@mui/material';
import React, { useState } from 'react';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';

const BodyFatCalculator = () => {
  const [values, setValues] = useState<IBodyFatValues>(DEFAULT_VALUES);
  const [results, setResults] = useState<IBodyFatResults | null>(null);

  const handleCalculate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = calculateBodyFatPercentage(values);
    const bmiBodyFatResult = calculateBodyFatWithBMI(values);
    const bodyFatCategory = categorizeBodyFat(values.gender, result);
    const bodyFatMass = calculateBodyFatMass(values.weight, result);
    const leanBodyMass = calculateLeanBodyMass(values.weight, result);

    setResults({
      bodyFatPercentage: result,
      bodyFatCategory,
      bodyFatMass,
      leanBodyMass,
      bmiBodyFatResult,
    });
  };

  const reset = () => {
    setResults(null);
    setValues(DEFAULT_VALUES);
  };

  return (
    <div className="shadow-md bg-white rounded-xl w-fit relative overflow-hidden">
      <div className="px-4">
        <div className="bg-primary-gradient rounded-lg shadow-table-header -mt-6 flex justify-between items-center px-4 py-6">
          <Typography variant="h6" className="text-base text-white">
            Body Fat calculator (Metric units)
          </Typography>
        </div>
      </div>
      <div className="h-4"></div>
      <BodyFatForm
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
        <div className="bg-white rounded-xl absolute bottom-0 left-0 h-[88%] w-full z-10 flex flex-col justify-center items-center gap-8">
          <BodyFatResults results={results} />
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
  );
};

export default BodyFatCalculator;
