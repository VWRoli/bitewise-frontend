'use client';

import React, { useState } from 'react';

import BmiForm from '@/app/(modules)/dashboard/(pages)/calculators/components/BmiCalculator/BmiForm';
import BmiResults from '@/app/(modules)/dashboard/(pages)/calculators/components/BmiCalculator/BmiResults';
import ResultsWrapper from '@/app/(modules)/dashboard/(pages)/calculators/components/ResultsWrapper';
import {
  bmiCategoryCalculator,
  calculateBMI,
} from '@/app/(modules)/dashboard/(pages)/calculators/helpers';
import {
  IBmiResults,
  IBmiValues,
} from '@/app/(modules)/dashboard/(pages)/calculators/interfaces';

const BmiCalculator = () => {
  const [results, setResults] = useState<IBmiResults | null>(null);

  const handleCalculate = (values: IBmiValues) => {
    const bmi = calculateBMI(values.weight, values.height);
    const bmiCategory = bmiCategoryCalculator(bmi);

    setResults({
      bmi,
      bmiCategory: bmiCategory,
    });
  };

  const reset = () => setResults(null);

  return (
    <div className="relative w-full max-w-80 rounded-xl bg-white shadow-md xl:w-fit">
      <div className="px-4">
        <div className="-mt-6 flex items-center justify-between rounded-lg bg-primary-gradient px-4 py-6 shadow-table-header">
          <h6 className="text-base font-medium text-white">
            BMI calculator (Metric units)
          </h6>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="h-4"></div>
        <BmiForm handleCalculate={handleCalculate} />
        {results && (
          <ResultsWrapper reset={reset} transition={!!results}>
            <BmiResults results={results} />
          </ResultsWrapper>
        )}
      </div>
    </div>
  );
};

export default BmiCalculator;
