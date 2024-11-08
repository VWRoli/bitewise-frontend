import { ICalorieResults } from '@/app/(modules)/dashboard/(pages)/calculators/interfaces';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface IProps {
  results: ICalorieResults | null;
}
const CalorieResults = (props: IProps) => {
  const {
    mildWeightLoss,
    weightLoss,
    extremeWeightLoss,
    mildWeightGain,
    weightGain,
    extremeWeightGain,
    maintainWeight,
  } = props.results || {};

  return (
    <TableContainer component={Paper} className="max-w-[90%] mx-auto">
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Maintain weight</TableCell>
            <TableCell className="text-right">
              <div className="flex flex-col">
                <span>
                  <b>{maintainWeight}</b> <small>100%</small>
                </span>
                <small className="opacity-50">calories/day</small>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="flex-flex-col">
                <div>Mild weight loss </div>
                <small className="opacity-50">0.25 kg/week</small>
              </div>
            </TableCell>
            <TableCell className="text-right">
              <div className="flex flex-col">
                <span>
                  <b>{mildWeightLoss}</b> <small>90%</small>
                </span>
                <small className="opacity-50">calories/day</small>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="flex-flex-col">
                <div>Weight loss </div>
                <small className="opacity-50">0.5 kg/week</small>
              </div>
            </TableCell>
            <TableCell className="text-right">
              <div className="flex flex-col">
                <span>
                  <b>{weightLoss}</b> <small>79%</small>
                </span>
                <small className="opacity-50">calories/day</small>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="flex flex-col">
                <div>Extreme weight loss </div>
                <small className="opacity-50">1 kg/week</small>
              </div>
            </TableCell>
            <TableCell className="text-right">
              <div className="flex flex-col">
                <span>
                  <b>{extremeWeightLoss}</b> <small>59%</small>
                </span>
                <small className="opacity-50">calories/day</small>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CalorieResults;
