import { TableCell, TableHead as MuiTableHead, TableRow } from '@mui/material';
import React from 'react';

const TableHead = () => {
  const cellClasses = 'text-custom text-xs';
  return (
    <MuiTableHead className="uppercase hidden lg:table-header-group">
      <TableRow>
        <TableCell className={cellClasses}>Name</TableCell>
        <TableCell className={cellClasses} align="right">
          Calories
        </TableCell>
        <TableCell className={cellClasses} align="right">
          Protein
        </TableCell>
        <TableCell className={cellClasses} align="right">
          Fat&nbsp;(Saturated)
        </TableCell>
        <TableCell className={cellClasses} align="right">
          Carbs (Sugar)
        </TableCell>
        <TableCell className={cellClasses} align="right">
          Fiber
        </TableCell>
        <TableCell className={cellClasses} align="right">
          Unit
        </TableCell>
        <TableCell className={cellClasses} align="right"></TableCell>
      </TableRow>
    </MuiTableHead>
  );
};

export default TableHead;