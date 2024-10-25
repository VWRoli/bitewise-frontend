import MealIngredientCell from '@/app/(modules)/dashboard/(pages)/meals/components/Table/MealIngredientCell';
import { calculateColumnSum } from '@/app/(modules)/dashboard/(pages)/meals/helpers';
import { IMealIngredient } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import { TableCell } from '@mui/material';
import React, { useMemo } from 'react';

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
      className={`lg:table-cell flex items-center gap-2 text-dark lg:py-4 py-2 px-2 mx-2 lg:text-right ${
        className || ''
      }`}
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
        <div className="bg-custom-gray text-dark font-bold shadow-sm px-1 lg:px-2 py-1 rounded-lg">
          <span>{mainValue}</span>
          {!isNaN(subValue) && <span>({subValue})</span>}{' '}
          {unit && <span>{unit}</span>}
        </div>
      ) : (
        <div className="flex-1"></div>
      )}
      {column === 'quantity' && <div className="h-7"></div>}
      {mealName && (
        <div className="flex-1 bg-custom-gray text-dark font-bold shadow-sm px-1 lg:px-2 py-1 rounded-lg">
          {mealName}
        </div>
      )}
    </TableCell>
  );
};

export default MealTableCell;
