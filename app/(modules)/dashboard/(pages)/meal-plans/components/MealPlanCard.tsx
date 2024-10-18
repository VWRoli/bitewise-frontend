import { IMealPlan } from '@/app/(modules)/dashboard/(pages)/meal-plans/interfaces';
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
          {meal.mealIngredients.map((ingredient) => (
            <div key={ingredient.id}>{ingredient.id}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MealPlanCard;
