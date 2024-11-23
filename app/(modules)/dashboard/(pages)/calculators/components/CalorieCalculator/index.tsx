'use client';

import React, { useEffect, useState } from 'react';
import {
  ICalorieResults,
  ICalorieValues,
} from '@/app/(modules)/dashboard/(pages)/calculators/interfaces';
import CalorieForm from '@/app/(modules)/dashboard/(pages)/calculators/components/CalorieCalculator/CalorieForm';
import CalorieResults from '@/app/(modules)/dashboard/(pages)/calculators/components/CalorieCalculator/CalorieResults';
import { calculateWeightChangeCalories } from '@/app/(modules)/dashboard/(pages)/calculators/helpers/calorie.helpers';
import ResultsWrapper from '@/app/(modules)/dashboard/(pages)/calculators/components/ResultsWrapper';

const CalorieCalculator = () => {
  const [results, setResults] = useState<ICalorieResults | null>(null);

  const handleCalculate = (values: ICalorieValues) => {
    const result = calculateWeightChangeCalories(values);

    setResults({ ...result });
  };

  useEffect(() => {
    console.log(results);
  }, [results]);

  const reset = () => setResults(null);

  return (
    <div className="shadow-md bg-white rounded-xl w-full xl:w-fit max-w-80 relative">
      <div className="px-4">
        <div className="bg-primary-gradient rounded-lg shadow-table-header -mt-6 flex justify-between items-center px-4 py-6">
          <h6 className="text-base text-white font-medium">
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
