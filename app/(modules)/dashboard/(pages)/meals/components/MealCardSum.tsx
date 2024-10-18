import React, { useMemo } from 'react';
import { Typography, Box, Grid2 } from '@mui/material';
import {
  calculateNutrientTotals,
  getNutrientLabels,
} from '@/app/(modules)/dashboard/(pages)/meals/helpers';
import { IMeal } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';

interface IProps {
  meal: IMeal;
}

const MealCardSum: React.FC<IProps> = ({ meal }) => {
  const { mealIngredients } = meal;

  const nutrientTotals = useMemo(
    () => calculateNutrientTotals(mealIngredients),
    [mealIngredients],
  );

  const nutrientLabels = getNutrientLabels(nutrientTotals);

  return (
    <Box
      sx={{
        backgroundColor: '#f0f4f8',
        padding: 2,
        borderRadius: 2,
        mt: 4,
        boxShadow: 1,
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        Nutrient Summary
      </Typography>
      <Grid2 container spacing={2}>
        {nutrientLabels.map((nutrient, index) => (
          <Grid2 key={index}>
            <Typography variant="body2" color="textPrimary">
              {nutrient.label}: <strong>{nutrient.value}</strong>{' '}
              {nutrient.unit}
            </Typography>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default MealCardSum;
