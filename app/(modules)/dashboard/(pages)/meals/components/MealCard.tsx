import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Grid2,
} from '@mui/material';

import { IMeal } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import MealCardSum from '@/app/(modules)/dashboard/(pages)/meals/components/MealCardSum';

interface IProps {
  meal: IMeal;
}

const MealCard: React.FC<IProps> = ({ meal }) => {
  return (
    <Card sx={{ maxWidth: 400, m: 'auto', boxShadow: 3, borderRadius: 3 }}>
      <CardContent sx={{ padding: 3 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: 'bold' }}
        >
          {meal.name}
        </Typography>

        <Divider sx={{ my: 2 }} />

        {meal.mealIngredients.map((mealIngredient) => (
          <Box key={mealIngredient.id} mb={2}>
            <Typography
              variant="body1"
              color="textPrimary"
              sx={{ fontWeight: 'medium' }}
            >
              {mealIngredient.ingredientName} - {mealIngredient.quantity} *{' '}
              {mealIngredient.unit}
            </Typography>
            <Grid2 container spacing={1} mt={1}>
              <Grid2>
                <Typography variant="body2" color="textSecondary">
                  Calories: <strong>{mealIngredient.calories}</strong> kcal
                </Typography>
              </Grid2>
              <Grid2>
                <Typography variant="body2" color="textSecondary">
                  Protein: <strong>{mealIngredient.protein}</strong> g
                </Typography>
              </Grid2>
              <Grid2>
                <Typography variant="body2" color="textSecondary">
                  Total Fat: <strong>{mealIngredient.totalFat}</strong> g
                </Typography>
              </Grid2>
              <Grid2>
                <Typography variant="body2" color="textSecondary">
                  Saturated Fat: <strong>{mealIngredient.saturatedFat}</strong>{' '}
                  g
                </Typography>
              </Grid2>
              <Grid2>
                <Typography variant="body2" color="textSecondary">
                  Carbohydrates:{' '}
                  <strong>{mealIngredient.totalCarbohydrates}</strong> g
                </Typography>
              </Grid2>
              <Grid2>
                <Typography variant="body2" color="textSecondary">
                  Sugar: <strong>{mealIngredient.sugar}</strong> g
                </Typography>
              </Grid2>
              <Grid2>
                <Typography variant="body2" color="textSecondary">
                  Fiber: <strong>{mealIngredient.dietaryFiber}</strong> g
                </Typography>
              </Grid2>
              <Grid2>
                <Typography variant="body2" color="textSecondary">
                  Unit: <strong>{mealIngredient.unit}</strong>
                </Typography>
              </Grid2>
            </Grid2>
          </Box>
        ))}

        <MealCardSum meal={meal} />
      </CardContent>
    </Card>
  );
};

export default MealCard;
