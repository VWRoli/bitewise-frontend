'use client';

import React, { useState } from 'react';

import GainResults from '@/app/(modules)/dashboard/(pages)/calculators/components/CalorieCalculator/GainResults';
import LossResults from '@/app/(modules)/dashboard/(pages)/calculators/components/CalorieCalculator/LossResults';
import { ICalorieResults } from '@/app/(modules)/dashboard/(pages)/calculators/interfaces';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';

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
