import { IMealPlan } from '@/app/(modules)/dashboard/(pages)/meal-plans/interfaces';
import React from 'react';

interface IProps {
  mealPlan: IMealPlan;
}
const MealPlanCard = ({ mealPlan }: IProps) => {
  return <div>MealPlanCard</div>;
};

export default MealPlanCard;
