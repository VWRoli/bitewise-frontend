import { MEAL_PLAN_TABLE_HEAD_DATA } from '@/app/(modules)/dashboard/(pages)/meal-plans/constants';
import { TableCell, TableHead as MuiTableHead, TableRow } from '@mui/material';
import React from 'react';

const MealPlanTableHead = () => {
  const cellClasses = 'text-custom text-xs';

  return (
    <MuiTableHead className="uppercase hidden lg:table-header-group">
      <TableRow>
        {MEAL_PLAN_TABLE_HEAD_DATA.map((headCell) => (
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

export default MealPlanTableHead;
