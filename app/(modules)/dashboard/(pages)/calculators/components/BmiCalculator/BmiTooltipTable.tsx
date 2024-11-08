import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const BmiTooltipTable = () => {
  return (
    <Tooltip
      title={
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell className="text-light">Classification</TableCell>
              <TableCell className="text-light">BMI range - kg/m²</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className="text-light">Severe Thinness</TableCell>
              <TableCell className="text-light">&lt; 16</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-light">Moderate Thinness</TableCell>
              <TableCell className="text-light">16 - 17</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-light">Mild Thinness</TableCell>
              <TableCell className="text-light">17 - 18.5</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-light">Normal</TableCell>
              <TableCell className="text-light">18.5 - 25</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-light">Overweight</TableCell>
              <TableCell className="text-light">25 - 30</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-light">Obese Class I</TableCell>
              <TableCell className="text-light">30 - 35</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-light">Obese Class II</TableCell>
              <TableCell className="text-light">35 - 40</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-light">Obese Class III</TableCell>
              <TableCell className="text-light">&gt; 40</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      }
    >
      <InfoOutlinedIcon fontSize="small" />
    </Tooltip>
  );
};

export default BmiTooltipTable;
