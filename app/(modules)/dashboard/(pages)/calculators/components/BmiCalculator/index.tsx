'use client';

import React, { useState } from 'react';
import BmiForm from '@/app/(modules)/dashboard/(pages)/calculators/components/BmiCalculator/BmiForm';
import {
  IBmiResults,
  IBmiValues,
} from '@/app/(modules)/dashboard/(pages)/calculators/interfaces';
import BmiResults from '@/app/(modules)/dashboard/(pages)/calculators/components/BmiCalculator/BmiResults';
import {
  bmiCategoryCalculator,
  calculateBMI,
} from '@/app/(modules)/dashboard/(pages)/calculators/helpers';
import ResultsWrapper from '@/app/(modules)/dashboard/(pages)/calculators/components/ResultsWrapper';

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
    <div className="shadow-md bg-white rounded-xl w-full xl:w-fit max-w-80 relative">
      <div className="px-4">
        <div className="bg-primary-gradient rounded-lg shadow-table-header -mt-6 flex justify-between items-center px-4 py-6">
          <h6 className="text-base text-white font-medium">
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
