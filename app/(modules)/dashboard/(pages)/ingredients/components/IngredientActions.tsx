'use client';

import { IIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';
import DeleteDialog from '@/app/components/DeleteDialog';
import { deleteIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/actions';
import { toaster } from '@/app/components/CustomToast';
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/app/components/ui/menubar';
import { EllipsisVertical } from 'lucide-react';
import EditIngredientDialog from '@/app/(modules)/dashboard/(pages)/ingredients/components/EditIngredientDialog';

interface IProps {
  ingredient: IIngredient;
}
const IngredientActions = ({ ingredient }: IProps) => {
  const handleOnDelete = async () => {
    const res = await deleteIngredient(ingredient.id);

    if (Object.keys(res).length === 0) {
      toaster.success({ text: 'Ingredient deleted successfully.' });
    } else {
      toaster.error({
        text: res.error || 'Unknown error',
      });
    }
  };

  return (
    <Menubar className="w-fit border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="hover:cursor-pointer">
          <EllipsisVertical />
        </MenubarTrigger>
        <MenubarContent>
          <EditIngredientDialog ingredient={ingredient} />
          <MenubarSeparator />
          <DeleteDialog
            onConfirm={handleOnDelete}
            title="Delete Ingredient"
            subtitle={`Are you sure you want to delete ${ingredient.name}?`}
          />
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default IngredientActions;
