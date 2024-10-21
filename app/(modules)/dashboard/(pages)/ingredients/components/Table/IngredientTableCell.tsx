import { TableCell } from '@mui/material';
import React from 'react';

interface IProps {
  className?: string;
  rowName: string;
  rowValue: string | React.ReactNode;
}
const IngredientTableCell = ({ className, rowValue, rowName }: IProps) => {
  return (
    <TableCell
      className={`lg:table-cell block text-dark lg:py-4 py-2 px-4 lg:text-right ${
        className || ''
      }`}
    >
      <span className="lg:hidden font-semibold text-gray-700">{rowName}</span>
      {rowValue}
    </TableCell>
  );
};

export default IngredientTableCell;
