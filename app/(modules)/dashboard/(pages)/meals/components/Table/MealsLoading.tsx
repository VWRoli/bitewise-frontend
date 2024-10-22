import React from 'react';
import { Skeleton, TableCell, TableRow } from '@mui/material';
import MealsLoadingCell from '@/app/(modules)/dashboard/(pages)/meals/components/Table/MealsLoadingCell';

const MealsLoading = () => {
  const rows = Array.from({ length: 5 });

  return (
    <>
      {rows.map((_, index) => (
        <TableRow
          key={index}
          className="border-b last:border-b-0 lg:table-row block lg:border-none text-left"
        >
          <TableCell className="lg:table-cell block text-dark lg:py-4 py-2 px-4 lg:text-right">
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" width="80%" />
          </TableCell>
          <MealsLoadingCell />
          <MealsLoadingCell />
          <MealsLoadingCell />
          <MealsLoadingCell />
          <MealsLoadingCell />

          <TableCell className="lg:table-cell block text-dark lg:py-4 py-2 px-4 lg:text-right">
            <div className="flex lg:justify-end">
              <Skeleton variant="rectangular" width={40} height={24} />
              <Skeleton variant="rectangular" width={40} height={24} />
            </div>
          </TableCell>
          <TableCell></TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default MealsLoading;
