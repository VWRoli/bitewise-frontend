import { MEAL_TABLE_HEAD_DATA } from '@/app/(modules)/dashboard/(pages)/meals/constants';
import { TableCell, TableHead as MuiTableHead, TableRow } from '@mui/material';
import React from 'react';

const MealTableHead = () => {
  const cellClasses = 'text-custom text-xs';
  return (
    <MuiTableHead className="uppercase hidden lg:table-header-group">
      <TableRow>
        {MEAL_TABLE_HEAD_DATA.map((headCell) => (
          <TableCell
            key={headCell.id}
            className={cellClasses}
            align={headCell.align}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </MuiTableHead>
  );
};

export default MealTableHead;
