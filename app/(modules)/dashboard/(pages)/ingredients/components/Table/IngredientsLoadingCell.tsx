import { Skeleton, TableCell } from '@mui/material';
import React from 'react';

const IngredientsLoadingCell = () => {
  return (
    <TableCell className="lg:table-cell block text-dark lg:py-4 py-2 px-4 lg:text-right">
      <div className="flex lg:justify-end">
        <Skeleton variant="text" width="60%" />
      </div>
    </TableCell>
  );
};

export default IngredientsLoadingCell;
