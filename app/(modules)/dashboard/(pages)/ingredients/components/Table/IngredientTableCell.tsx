import { cn } from '@/app/lib';
import { TableCell } from '@/app/components/ui/table';
import React from 'react';

interface IProps {
  className?: string;
  rowName: string;
  rowValue: string | React.ReactNode;
}
const IngredientTableCell = ({ className, rowValue, rowName }: IProps) => {
  return (
    <TableCell
      className={cn(
        'lg:table-cell block text-dark px-4 lg:text-right py-2',
        className,
      )}
    >
      <span className="lg:hidden font-semibold text-gray-700">{rowName}: </span>
      {rowValue}
    </TableCell>
  );
};

export default IngredientTableCell;
