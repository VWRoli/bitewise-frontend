import { IMealPlan } from '@/app/(modules)/dashboard/(pages)/meal-plans/interfaces';
import MealCardSum from '@/app/(modules)/dashboard/(pages)/meals/components/MealCardSum';
import { Typography } from '@mui/material';
import React from 'react';

interface IProps {
  mealPlan: IMealPlan;
}
const MealPlanCard = ({ mealPlan }: IProps) => {
  return (
    <div>
      {mealPlan.meals.map((meal) => (
        <div key={meal.id}>
          <p>{meal.name}</p>
          {meal.mealIngredients.map((mealIngredient) => (
            <article key={mealIngredient.id}>
              <Typography variant="body2" color="textSecondary">
                {mealIngredient.ingredientName} - {mealIngredient.quantity} *{' '}
                {mealIngredient.unit}
              </Typography>
            </article>
          ))}
          <MealCardSum meal={meal} />
        </div>
      ))}
    </div>
  );
};

export default MealPlanCard;
