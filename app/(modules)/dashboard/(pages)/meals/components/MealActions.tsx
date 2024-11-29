'use client';

import { IMeal } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import DeleteDialog from '@/app/components/DeleteDialog';
import EditMealDialog from '@/app/(modules)/dashboard/(pages)/meals/components/EditMealDialog';
import { deleteMeal } from '@/app/(modules)/dashboard/(pages)/meals/actions';
import { IIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/app/components/ui/menubar';
import { EllipsisVertical } from 'lucide-react';

interface IProps {
  meal: IMeal;
  ingredients: IIngredient[];
}
const MealActions = ({ meal, ingredients }: IProps) => {
  const handleOnDelete = async () => {
    await deleteMeal(meal.id);
  };

  return (
    <Menubar className="w-fit border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="hover:cursor-pointer">
          <EllipsisVertical />
        </MenubarTrigger>
        <MenubarContent>
          <EditMealDialog meal={meal} ingredients={ingredients} />
          <MenubarSeparator />
          <DeleteDialog
            onConfirm={handleOnDelete}
            title="Delete Meal"
            subtitle={`Are you sure you want to delete ${meal.name}?`}
          />
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default MealActions;
