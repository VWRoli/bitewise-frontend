import {
  calculateMealValue,
  flatMealIngredients,
} from '@/app/(modules)/dashboard/(pages)/meal-plans/helpers';
import { calculateColumnSum } from '@/app/(modules)/dashboard/(pages)/meals/helpers';
import { IMeal } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import { TableCell } from '@/components/ui/table';
import React, { useMemo } from 'react';

interface IProps {
  meals: IMeal[];
  column: string;
  subColumn?: string;
  unit?: string;
}
const MealPlanTableCell = ({ meals, column, unit, subColumn }: IProps) => {
  const mealValues = useMemo(() => {
    return meals.map((meal) => calculateMealValue(meal, column, subColumn));
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
            {value[0]} {value[1] > 0 && <span>({value[1]})</span>}
            {unit && <span>{unit}</span>}
          </div>
        ))}
        <div className="bg-dark text-light font-bold shadow-sm px-1 lg:px-2 py-1 rounded-lg">
          {mainValue} {unit && <span>{unit}</span>}
        </div>
      </div>
    </TableCell>
  );
};

export default MealPlanTableCell;
