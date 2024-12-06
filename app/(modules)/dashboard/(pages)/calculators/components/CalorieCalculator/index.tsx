'use client';

import React, { useState } from 'react';

import CalorieForm from '@/app/(modules)/dashboard/(pages)/calculators/components/CalorieCalculator/CalorieForm';
import CalorieResults from '@/app/(modules)/dashboard/(pages)/calculators/components/CalorieCalculator/CalorieResults';
import ResultsWrapper from '@/app/(modules)/dashboard/(pages)/calculators/components/ResultsWrapper';
import { calculateWeightChangeCalories } from '@/app/(modules)/dashboard/(pages)/calculators/helpers/calorie.helpers';
import {
  ICalorieResults,
  ICalorieValues,
} from '@/app/(modules)/dashboard/(pages)/calculators/interfaces';

const CalorieCalculator = () => {
  const [results, setResults] = useState<ICalorieResults | null>(null);

  const handleCalculate = (values: ICalorieValues) => {
    const result = calculateWeightChangeCalories(values);

    setResults({ ...result });
  };

  const reset = () => setResults(null);

  return (
    <div className="relative w-full max-w-80 rounded-xl bg-white shadow-md xl:w-fit">
      <div className="px-4">
        <div className="-mt-6 flex items-center justify-between rounded-lg bg-primary-gradient px-4 py-6 shadow-table-header">
          <h6 className="text-base font-medium text-white">
            Calorie calculator (Metric units)
          </h6>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="h-4"></div>
        <CalorieForm handleCalculate={handleCalculate} />
        {results && (
          <ResultsWrapper reset={reset} transition={!!results}>
            <CalorieResults results={results} />
          </ResultsWrapper>
        )}
      </div>
    </div>
  );
};

export default CalorieCalculator;
