import AddMealPlanDialog from '@/app/(modules)/[lang]/dashboard/(modules)/meal-plans/components/AddMealPlanDialog';
import { IMeal } from '@/app/(modules)/[lang]/dashboard/(modules)/meals/interfaces';
import { IMealPlan } from '@/app/(modules)/[lang]/dashboard/(modules)/meal-plans/interfaces';

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
