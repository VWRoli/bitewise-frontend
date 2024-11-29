import AddMealPlanDialog from '@/app/(modules)/dashboard/(pages)/meal-plans/components/AddMealPlanDialog';
import { IMealPlan } from '@/app/(modules)/dashboard/(pages)/meal-plans/interfaces';
import { IMeal } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';

interface IProps {
  allMeals: IMeal[];
  mealPlan: IMealPlan;
}

const EditMealPlanDialog = ({ allMeals, mealPlan }: IProps) => {
  return (
    <AddMealPlanDialog allMeals={allMeals} mealPlanEditValues={mealPlan} />
  );
};

export default EditMealPlanDialog;
