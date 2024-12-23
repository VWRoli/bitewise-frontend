'use client';

import React, { useState } from 'react';

import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import GainResults from '@/app/(modules)/[lang]/dashboard/(modules)/calculators/components/CalorieCalculator/GainResults';
import { ICalorieResults } from '@/app/(modules)/[lang]/dashboard/(modules)/calculators/interfaces';
import LossResults from '@/app/(modules)/[lang]/dashboard/(modules)/calculators/components/CalorieCalculator/LossResults';

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
