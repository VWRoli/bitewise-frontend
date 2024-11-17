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
      size="small"
      className={`lg:table-cell block text-dark px-4 lg:text-right ${
        className || ''
      }`}
    >
      <span className="lg:hidden font-semibold text-gray-700">{rowName}: </span>
      {rowValue}
    </TableCell>
  );
};

export default IngredientTableCell;
