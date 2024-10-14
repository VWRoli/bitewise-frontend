import React from 'react';
import { Card, CardContent, Divider, Grid2, Typography } from '@mui/material';
import { IIngredient } from '@/app/dashboard/(pages)/ingredients/interfaces';

interface IngredientCardProps {
  ingredient: IIngredient;
}

const IngredientCard: React.FC<IngredientCardProps> = ({ ingredient }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {ingredient.name}
        </Typography>
        <Grid2 container spacing={2}>
          <Grid2>
            <Typography variant="body2" color="textSecondary">
              Calories: {ingredient.calories} kcal
            </Typography>
          </Grid2>
          <Grid2>
            <Typography variant="body2" color="textSecondary">
              Protein: {ingredient.protein}g
            </Typography>
          </Grid2>
          <Grid2>
            <Typography variant="body2" color="textSecondary">
              Total Fat: {ingredient.totalFat}g
            </Typography>
          </Grid2>
          <Grid2>
            <Typography variant="body2" color="textSecondary">
              Saturated Fat: {ingredient.saturatedFat}g
            </Typography>
          </Grid2>
          <Grid2>
            <Typography variant="body2" color="textSecondary">
              Total Carbohydrates: {ingredient.totalCarbohydrates}g
            </Typography>
          </Grid2>
          <Grid2>
            <Typography variant="body2" color="textSecondary">
              Sugar: {ingredient.sugar}g
            </Typography>
          </Grid2>
          <Grid2>
            <Typography variant="body2" color="textSecondary">
              Dietary Fiber: {ingredient.dietaryFiber}g
            </Typography>
          </Grid2>
          <Grid2>
            <Typography variant="body2" color="textSecondary">
              Unit: {ingredient.unit}
            </Typography>
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  );
};

export default IngredientCard;
