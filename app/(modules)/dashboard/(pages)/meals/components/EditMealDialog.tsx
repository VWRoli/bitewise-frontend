import { IIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';
import AddMealDialog from '@/app/(modules)/dashboard/(pages)/meals/components/AddMealDialog';
import { IMeal } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';

interface IProps {
  ingredients: IIngredient[];
  meal: IMeal;
}
const EditMealDialog = ({ meal, ingredients }: IProps) => {
  return <AddMealDialog mealEditValues={meal} ingredients={ingredients} />;
};

export default EditMealDialog;
