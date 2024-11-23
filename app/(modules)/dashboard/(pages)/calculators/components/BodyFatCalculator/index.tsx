'use client';

import BodyFatForm from '@/app/(modules)/dashboard/(pages)/calculators/components/BodyFatCalculator/BodyFatForm';
import BodyFatResults from '@/app/(modules)/dashboard/(pages)/calculators/components/BodyFatCalculator/BodyFatResults';
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
import React, { useState } from 'react';
import ResultsWrapper from '@/app/(modules)/dashboard/(pages)/calculators/components/ResultsWrapper';

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
    <div className="shadow-md bg-white rounded-xl w-full xl:w-fit max-w-80 relative">
      <div className="px-4">
        <div className="bg-primary-gradient rounded-lg shadow-table-header -mt-6 flex justify-between items-center px-4 py-6">
          <h6 className="text-base text-white font-medium">
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
