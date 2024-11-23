import React from 'react';
import { Skeleton, TableBody, TableCell, TableRow } from '@mui/material';
import IngredientsLoadingCell from '@/app/(modules)/dashboard/(pages)/ingredients/components/Table/IngredientsLoadingCell';
import IngredientTableHead from '@/app/(modules)/dashboard/(pages)/ingredients/components/Table/IngredientTableHead';
import TableFrame from '@/app/components/Table/TableFrame';
import { INGREDTENTS_PAGE_SIZE } from '@/app/(modules)/dashboard/(pages)/ingredients/constants';

const IngredientsLoading = () => {
  const rows = Array.from({ length: INGREDTENTS_PAGE_SIZE });

  return (
    <TableFrame
      title="Ingredients"
      tableHead={<IngredientTableHead />}
      addModal={<div className="h-9" />}
    >
      <TableBody>
        {rows.map((_, index) => (
          <TableRow
            key={index}
            className="border-b last:border-b-0 lg:table-row block lg:border-none text-left"
          >
            <TableCell className="lg:table-cell block text-dark lg:py-4 py-2 px-4 lg:text-right">
              <Skeleton variant="text" width="80%" />
            </TableCell>
            <IngredientsLoadingCell />
            <IngredientsLoadingCell />
            <IngredientsLoadingCell />
            <IngredientsLoadingCell />
            <IngredientsLoadingCell />

            <TableCell className="lg:table-cell block text-dark lg:py-4 py-2 px-4 lg:text-right">
              <div className="flex lg:justify-end">
                <Skeleton variant="rectangular" width={40} height={24} />
              </div>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableFrame>
  );
};

export default IngredientsLoading;
