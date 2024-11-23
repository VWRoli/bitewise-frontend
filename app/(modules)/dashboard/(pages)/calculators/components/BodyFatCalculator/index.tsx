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
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { ListRestart } from 'lucide-react';

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
          <div
            className={`transition-all duration-500 ease-in-out ${
              results ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            <div className="bg-white rounded-xl absolute bottom-0 left-0 h-[97%] w-full z-10 flex flex-col justify-center items-center gap-8">
              <BodyFatResults results={results} />
              <Button variant="outline" onClick={reset}>
                <ListRestart /> Calculate again
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BodyFatCalculator;
