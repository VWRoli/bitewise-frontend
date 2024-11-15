'use client';
import { ICalorieResults } from '@/app/(modules)/dashboard/(pages)/calculators/interfaces';
import React, { useState } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import LossResults from '@/app/(modules)/dashboard/(pages)/calculators/components/CalorieCalculator/LossResults';
import GainResults from '@/app/(modules)/dashboard/(pages)/calculators/components/CalorieCalculator/GainResults';
import { Button } from '@mui/material';

export interface ICalorieResultsProps {
  results: ICalorieResults | null;
}
const CalorieResults = (props: ICalorieResultsProps) => {
  const [isGain, setIsGain] = useState(false);

  return (
    <TableContainer component={Paper} className="max-w-[90%] mx-auto">
      <Button
        variant="text"
        fullWidth
        onClick={() => setIsGain((prev) => !prev)}
      >
        Show {isGain ? 'Loss' : 'Gain'}
      </Button>

      {isGain ? (
        <GainResults results={props.results} />
      ) : (
        <LossResults results={props.results} />
      )}
    </TableContainer>
  );
};

export default CalorieResults;
