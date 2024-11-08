import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const BodyFatTooltipTable = () => {
  return (
    <Tooltip
      title={
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell className="text-light">Description</TableCell>
              <TableCell className="text-light">Women</TableCell>
              <TableCell className="text-light">Men</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className="text-light">Essential fat</TableCell>
              <TableCell className="text-light">10-13%</TableCell>
              <TableCell className="text-light">2-5%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-light">Athletes</TableCell>
              <TableCell className="text-light">14-20%</TableCell>
              <TableCell className="text-light">6-13%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-light">Fitness</TableCell>
              <TableCell className="text-light">21-24%</TableCell>
              <TableCell className="text-light">14-17%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-light">Average</TableCell>
              <TableCell className="text-light">25-31%</TableCell>
              <TableCell className="text-light">18-24%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-light">Obese</TableCell>
              <TableCell className="text-light">32+%</TableCell>
              <TableCell className="text-light">25+%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      }
    >
      <InfoOutlinedIcon fontSize="small" />
    </Tooltip>
  );
};

export default BodyFatTooltipTable;
