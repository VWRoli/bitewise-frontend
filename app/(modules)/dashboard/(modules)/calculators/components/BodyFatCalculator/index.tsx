'use client';

import {
  IBodyFatResults,
  IBodyFatValues,
} from '@/app/(modules)/dashboard/(modules)/calculators/interfaces';
import React, { useState } from 'react';
import {
  calculateBodyFatMass,
  calculateBodyFatPercentage,
  calculateBodyFatWithBMI,
  calculateLeanBodyMass,
  categorizeBodyFat,
} from '@/app/(modules)/dashboard/(modules)/calculators/helpers';

import BodyFatForm from '@/app/(modules)/dashboard/(modules)/calculators/components/BodyFatCalculator/BodyFatForm';
import BodyFatResults from '@/app/(modules)/dashboard/(modules)/calculators/components/BodyFatCalculator/BodyFatResults';
import ResultsWrapper from '@/app/(modules)/dashboard/(modules)/calculators/components/ResultsWrapper';

const BodyFatCalculator = () => {
  const [results, setResults] = useState<IBodyFatResults | null>(null);

  const handleCalculate = (values: IBodyFatValues) => {
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

  const reset = () => setResults(null);

  return (
    <div className="relative w-full max-w-80 rounded-xl bg-white shadow-md xl:w-fit">
      <div className="px-4">
        <div className="-mt-6 flex items-center justify-between rounded-lg bg-primary-gradient px-4 py-6 shadow-table-header">
          <h6 className="text-base font-medium text-white">
            Body Fat calculator (Metric units)
          </h6>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="h-4"></div>
        <BodyFatForm handleCalculate={handleCalculate} />
        {results && (
          <ResultsWrapper reset={reset} transition={!!results}>
            <BodyFatResults results={results} />
          </ResultsWrapper>
        )}
      </div>
    </div>
  );
};

export default BodyFatCalculator;
