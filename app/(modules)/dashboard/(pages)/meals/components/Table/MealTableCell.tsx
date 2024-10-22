import { calculateColumnSum } from '@/app/(modules)/dashboard/(pages)/meals/helpers';
import { IMealIngredient } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import { Divider, TableCell } from '@mui/material';
import React, { useMemo } from 'react';

interface IProps {
  mealIngredients: IMealIngredient[];
  column: string;
  subColumn?: string;
  unit?: string;
  className?: string;
}

const MealTableCell = ({
  mealIngredients,
  column,
  subColumn,
  unit,
  className,
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
      className={`lg:table-cell block text-dark lg:py-4 py-2 px-4 lg:text-right ${
        className || ''
      }`}
    >
      {mealIngredients.map((mealIngredient) => (
        <div key={mealIngredient.id} className="pb-1">
          {mealIngredient[column]}{' '}
          {subColumn && <span>({mealIngredient[subColumn]})</span>}{' '}
          {unit && <span>{unit}</span>}
        </div>
      ))}
      {mainValue > 0 && (
        <>
          <div className="bg-[#f0f4f8] shadow-sm py-1 rounded-lg">
            <span>{mainValue}</span>
            {!isNaN(subValue) && <span>({subValue})</span>}{' '}
            {unit && <span>{unit}</span>}
          </div>
        </>
      )}
    </TableCell>
  );
};

export default MealTableCell;
