import {
  calculateNutrientTotals,
  getNutrientLabels,
} from '@/app/(modules)/dashboard/(pages)/meals/helpers';
import { IMeal } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import { Grid2, Typography } from '@mui/material';
import React, { useMemo } from 'react';

interface IProps {
  meal: IMeal;
}
const MealCardSum = ({ meal }: IProps) => {
  const { mealIngredients } = meal;

  const nutrientTotals = useMemo(
    () => calculateNutrientTotals(mealIngredients),
    [mealIngredients],
  );

  const nutrientLabels = getNutrientLabels(nutrientTotals);

  return (
    <div className="bg-slate-100 p-2 mt-4">
      <Grid2 container spacing={2}>
        {nutrientLabels.map((nutrient, index) => (
          <Grid2 key={index}>
            <Typography variant="body2" color="textSecondary">
              {nutrient.label}: {nutrient.value} {nutrient.unit}
            </Typography>
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default MealCardSum;
