import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
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
        {meal.mealIngredients.map((mealIngredient, i) => (
          <Typography key={i} variant="body2" color="textSecondary">
            {mealIngredient.ingredientName} - {mealIngredient.quantity}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default MealCard;
