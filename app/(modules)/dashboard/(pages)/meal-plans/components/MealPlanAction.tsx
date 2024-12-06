'use client';

import { EllipsisVertical } from 'lucide-react';

import { deleteMealPlan } from '@/app/(modules)/dashboard/(pages)/meal-plans/actions';
import EditMealPlanDialog from '@/app/(modules)/dashboard/(pages)/meal-plans/components/EditMealPlanDialog';
import { IMealPlan } from '@/app/(modules)/dashboard/(pages)/meal-plans/interfaces';
import { IMeal } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import DeleteDialog from '@/app/components/DeleteDialog';
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/app/components/ui/menubar';

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
