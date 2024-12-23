import AddMealDialog from '@/app/(modules)/[lang]/dashboard/(modules)/meals/components/AddMealDialog';
import { IIngredient } from '@/app/(modules)/[lang]/dashboard/(modules)/ingredients/interfaces';
import { IMeal } from '@/app/(modules)/[lang]/dashboard/(modules)/meals/interfaces';

interface IProps {
  ingredients: IIngredient[];
  meal: IMeal;
}
const EditMealDialog = ({ meal, ingredients }: IProps) => {
  return <AddMealDialog mealEditValues={meal} ingredients={ingredients} />;
};

export default EditMealDialog;
