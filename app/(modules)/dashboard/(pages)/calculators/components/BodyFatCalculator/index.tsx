'use client';

import BodyFatForm from '@/app/(modules)/dashboard/(pages)/calculators/components/BodyFatCalculator/BodyFatForm';
import { DEFAULT_VALUES } from '@/app/(modules)/dashboard/(pages)/calculators/constants';
import {
  calculateBodyFatPercentage,
  calculateBodyFatWithBMI,
  categorizeBodyFat,
} from '@/app/(modules)/dashboard/(pages)/calculators/helpers';
import { IBodyFatValues } from '@/app/(modules)/dashboard/(pages)/calculators/interfaces';
import { Typography } from '@mui/material';
import React, { useState } from 'react';

const BodyFatCalculator = () => {
  const [values, setValues] = useState<IBodyFatValues>(DEFAULT_VALUES);

  const handleCalculate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = calculateBodyFatPercentage(values);
    const bmiResult = calculateBodyFatWithBMI(values);
    const bodyFatCategory = categorizeBodyFat(values.gender, result);
    console.log('result', result, bmiResult, bodyFatCategory);
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
      <BodyFatForm
        handleCalculate={handleCalculate}
        values={values}
        setValues={setValues}
      />
    </div>
  );
};

export default BodyFatCalculator;
