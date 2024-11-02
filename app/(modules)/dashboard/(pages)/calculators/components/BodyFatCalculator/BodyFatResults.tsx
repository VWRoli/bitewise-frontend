import { IBodyFatResults } from '@/app/(modules)/dashboard/(pages)/calculators/interfaces';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface IProps {
  results: IBodyFatResults | null;
}
const BodyFatResults = (props: IProps) => {
  const {
    bodyFatPercentage,
    bodyFatCategory,
    bodyFatMass,
    leanBodyMass,
    bmiBodyFatResult,
  } = props.results || {};

  return (
    <TableContainer component={Paper} className="max-w-[80%] mx-auto">
      <Table>
        <TableHead className="bg-dark text-light font-bold">
          <TableRow>
            <TableCell className="text-light font-bold">Metric</TableCell>
            <TableCell className="text-light font-bold">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Body Fat Percentage</TableCell>
            <TableCell>{bodyFatPercentage} %</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Body Fat Category</TableCell>
            <TableCell>{bodyFatCategory}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Body Fat Mass</TableCell>
            <TableCell>{bodyFatMass} kg</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Lean Body Mass</TableCell>
            <TableCell>{leanBodyMass} kg</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>BMI Body Fat Result</TableCell>
            <TableCell>{bmiBodyFatResult} %</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BodyFatResults;
