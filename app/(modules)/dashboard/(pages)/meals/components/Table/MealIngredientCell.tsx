import { calculateMealIngredientValue } from '@/app/(modules)/dashboard/(pages)/meals/helpers';
import { IMealIngredient } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import React, { useMemo } from 'react';

interface IProps {
  mealIngredient: IMealIngredient;
  column: string;
  subColumn?: string;
  unit?: string;
}
const MealIngredientCell = ({
  mealIngredient,
  column,
  subColumn,
  unit,
}: IProps) => {
  const calculatedMainValue = useMemo(
    () => calculateMealIngredientValue(mealIngredient, column),
    [mealIngredient, column],
  );
  const calculatedSubValue = useMemo(
    () => calculateMealIngredientValue(mealIngredient, subColumn),
    [mealIngredient, subColumn],
  );

  const renderColumnContent = () => {
    if (column === 'ingredientName') return mealIngredient.ingredientName;
    if (column === 'quantity') return mealIngredient.quantity;

    return (
      <>
        {calculatedMainValue}
        {subColumn && !isNaN(calculatedSubValue) && (
          <span>({calculatedSubValue})</span>
        )}
        {unit && <span>{unit}</span>}
      </>
    );
  };

  return <div className="pb-1 px-2 flex-1">{renderColumnContent()}</div>;
};

export default MealIngredientCell;
