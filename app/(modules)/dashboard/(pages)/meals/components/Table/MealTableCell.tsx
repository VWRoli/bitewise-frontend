import React, { useMemo } from 'react';

import MealIngredientCell from '@/app/(modules)/dashboard/(pages)/meals/components/Table/MealIngredientCell';
import { calculateColumnSum } from '@/app/(modules)/dashboard/(pages)/meals/helpers';
import { IMealIngredient } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import { TableCell } from '@/app/components/ui/table';
import { cn } from '@/app/lib';

interface IProps {
  mealIngredients: IMealIngredient[];
  column: string;
  subColumn?: string;
  unit?: string;
  className?: string;
  mealName?: string;
}

const MealTableCell = ({
  mealIngredients,
  column,
  subColumn,
  unit,
  className,
  mealName,
}: IProps) => {
  const mainValue = useMemo(
    () => calculateColumnSum(mealIngredients, column),
    [mealIngredients, column],
  );

  const subValue = useMemo(() => {
    if (!subColumn) return NaN;
    return calculateColumnSum(mealIngredients, subColumn);
  }, [mealIngredients, subColumn]);

  return (
    <TableCell
      className={cn(
        'mx-2 flex items-center gap-2 px-2 py-2 text-dark lg:table-cell lg:py-4 lg:text-right',
        className,
      )}
    >
      {mealIngredients.map((mealIngredient) => (
        <MealIngredientCell
          key={mealIngredient.id}
          mealIngredient={mealIngredient}
          column={column}
          subColumn={subColumn}
          unit={unit}
        />
      ))}
      {mainValue > 0 && column !== 'quantity' ? (
        <div className="rounded-lg bg-dark p-1 font-bold text-light shadow-sm lg:px-2">
          <span>{mainValue}</span>
          {!isNaN(subValue) && <span>({subValue})</span>}{' '}
          {unit && <span>{unit}</span>}
        </div>
      ) : (
        <div className="flex-1"></div>
      )}
      {column === 'quantity' && <div className="h-7"></div>}
      {mealName && (
        <div className="flex-1 rounded-lg bg-dark p-1 font-bold text-light shadow-sm lg:px-2">
          {mealName}
        </div>
      )}
    </TableCell>
  );
};

export default MealTableCell;
