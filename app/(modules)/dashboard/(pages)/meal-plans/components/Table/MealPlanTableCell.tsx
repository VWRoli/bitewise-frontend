import {
  calculateMealValue,
  flatMealIngredients,
} from '@/app/(modules)/dashboard/(pages)/meal-plans/helpers';
import { calculateColumnSum } from '@/app/(modules)/dashboard/(pages)/meals/helpers';
import { IMeal } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import { TableCell } from '@mui/material';
import React, { useMemo } from 'react';

interface IProps {
  meals: IMeal[];
  column: string;
  subColumn?: string;
  unit?: string;
}
const MealPlanTableCell = ({ meals, column, unit, subColumn }: IProps) => {
  const mealValues = useMemo(() => {
    return meals.map((meal) => {
      const value = calculateMealValue(meal, column, subColumn);
      return value.toFixed(1);
    });
  }, [meals, column, subColumn]);

  const flatIngredients = flatMealIngredients(meals);

  const mainValue = useMemo(
    () => calculateColumnSum(flatIngredients, column),
    [flatIngredients, column],
  );

  return (
    <TableCell className="lg:table-cell flex items-center gap-2 text-dark lg:py-4 py-2 px-2 mx-2 lg:text-right">
      <div className="flex flex-col gap-2">
        {mealValues.map((value, index) => (
          <div key={index} className="px-1 lg:px-2">
            {value} {unit && <span>{unit}</span>}
          </div>
        ))}
        <div className="bg-custom-gray text-dark font-bold shadow-sm px-1 lg:px-2 py-1 rounded-lg">
          {mainValue} {unit && <span>{unit}</span>}
        </div>
      </div>
    </TableCell>
  );
};

export default MealPlanTableCell;
