import { Skeleton, TableCell } from '@mui/material';
import React from 'react';

const MealsLoadingCell = () => {
  return (
    <TableCell className="lg:table-cell block text-dark lg:py-4 py-2 px-4 lg:text-right">
      <div className="flex flex-col lg:items-end">
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="60%" />
      </div>
    </TableCell>
  );
};

export default MealsLoadingCell;
