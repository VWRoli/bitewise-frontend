'use client';

import { ICalorieResults } from '@/app/(modules)/dashboard/(pages)/calculators/interfaces';
import React, { useState } from 'react';
import LossResults from '@/app/(modules)/dashboard/(pages)/calculators/components/CalorieCalculator/LossResults';
import GainResults from '@/app/(modules)/dashboard/(pages)/calculators/components/CalorieCalculator/GainResults';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';

export interface ICalorieResultsProps {
  results: ICalorieResults | null;
}
const CalorieResults = (props: ICalorieResultsProps) => {
  const [isGain, setIsGain] = useState(false);

  return (
    <>
      <Button variant="outline" onClick={() => setIsGain((prev) => !prev)}>
        Show {isGain ? 'Loss' : 'Gain'}
      </Button>
      <Card className="mx-auto max-w-[90%] rounded-none">
        {isGain ? (
          <GainResults results={props.results} />
        ) : (
          <LossResults results={props.results} />
        )}
      </Card>
    </>
  );
};

export default CalorieResults;
