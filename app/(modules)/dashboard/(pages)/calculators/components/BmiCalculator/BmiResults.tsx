import { IBmiResults } from '@/app/(modules)/dashboard/(pages)/calculators/interfaces';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BmiTooltipTable from '@/app/(modules)/dashboard/(pages)/calculators/components/BmiCalculator/BmiTooltipTable';

interface IProps {
  results: IBmiResults | null;
}
const BmiResults = (props: IProps) => {
  const { bmi, bmiCategory } = props.results || {};

  return (
    <TableContainer component={Paper} className="max-w-[90%] mx-auto">
      <Table>
        <TableHead className="bg-dark text-light font-bold">
          <TableRow>
            <TableCell className="text-light font-bold">Metric</TableCell>
            <TableCell className="text-light font-bold">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>BMI</TableCell>
            <TableCell>{bmi}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="flex gap-1">
              BMI category <BmiTooltipTable />
            </TableCell>
            <TableCell>{bmiCategory}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BmiResults;
