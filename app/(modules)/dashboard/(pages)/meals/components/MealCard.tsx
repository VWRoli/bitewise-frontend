import React from 'react';
import { Card, CardContent, Grid2, Typography } from '@mui/material';
import { IMeal } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';

interface IProps {
  meal: IMeal;
}
const MealCard: React.FC<IProps> = ({ meal }) => {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {meal.name}
        </Typography>
        {meal.mealIngredients.map((mealIngredient) => (
          <article key={mealIngredient.id}>
            <Typography variant="body2" color="textSecondary">
              {mealIngredient.ingredientName} - {mealIngredient.quantity} *{' '}
              {mealIngredient.unit}
            </Typography>
            <Grid2 container spacing={2}>
              <Grid2>
                <Typography variant="body2" color="textSecondary">
                  Calories: {mealIngredient.calories} kcal
                </Typography>
              </Grid2>
              <Grid2>
                <Typography variant="body2" color="textSecondary">
                  Protein: {mealIngredient.protein}g
                </Typography>
              </Grid2>
              <Grid2>
                <Typography variant="body2" color="textSecondary">
                  Total Fat: {mealIngredient.totalFat}g
                </Typography>
              </Grid2>
              <Grid2>
                <Typography variant="body2" color="textSecondary">
                  Saturated Fat: {mealIngredient.saturatedFat}g
                </Typography>
              </Grid2>
              <Grid2>
                <Typography variant="body2" color="textSecondary">
                  Total Carbohydrates: {mealIngredient.totalCarbohydrates}g
                </Typography>
              </Grid2>
              <Grid2>
                <Typography variant="body2" color="textSecondary">
                  Sugar: {mealIngredient.sugar}g
                </Typography>
              </Grid2>
              <Grid2>
                <Typography variant="body2" color="textSecondary">
                  Dietary Fiber: {mealIngredient.dietaryFiber}g
                </Typography>
              </Grid2>
              <Grid2>
                <Typography variant="body2" color="textSecondary">
                  Unit: {mealIngredient.unit}
                </Typography>
              </Grid2>
            </Grid2>
          </article>
        ))}
      </CardContent>
    </Card>
  );
};

export default MealCard;
