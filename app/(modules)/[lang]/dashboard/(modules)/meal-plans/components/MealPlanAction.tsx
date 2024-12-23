'use client';

import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/app/components/ui/menubar';

import DeleteDialog from '@/app/components/DeleteDialog';
import EditMealPlanDialog from '@/app/(modules)/[lang]/dashboard/(modules)/meal-plans/components/EditMealPlanDialog';
import { EllipsisVertical } from 'lucide-react';
import { IMeal } from '@/app/(modules)/[lang]/dashboard/(modules)/meals/interfaces';
import { IMealPlan } from '@/app/(modules)/[lang]/dashboard/(modules)/meal-plans/interfaces';
import { deleteMealPlan } from '@/app/(modules)/[lang]/dashboard/(modules)/meal-plans/actions';

interface IProps {
  mealPlan: IMealPlan;
  allMeals: IMeal[];
}
const MealPlanActions = ({ mealPlan, allMeals }: IProps) => {
  const handleOnDelete = async () => {
    await deleteMealPlan(mealPlan.id);
  };

  return (
    <Menubar className="w-fit border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="hover:cursor-pointer">
          <EllipsisVertical />
        </MenubarTrigger>
        <MenubarContent>
          <EditMealPlanDialog allMeals={allMeals} mealPlan={mealPlan} />
          <MenubarSeparator />
          <DeleteDialog
            onConfirm={handleOnDelete}
            title="Delete Meal Plan"
            subtitle={`Are you sure you want to delete ${mealPlan.name} meal plan?`}
          />
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default MealPlanActions;
