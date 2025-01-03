'use client';

import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/app/components/ui/menubar';

import DeleteDialog from '@/app/components/DeleteDialog';
import EditIngredientDialog from '@/app/(modules)/[lang]/dashboard/(modules)/ingredients/components/EditIngredientDialog';
import { EllipsisVertical } from 'lucide-react';
import { IIngredient } from '@/app/(modules)/[lang]/dashboard/(modules)/ingredients/interfaces';
import { deleteIngredient } from '@/app/(modules)/[lang]/dashboard/(modules)/ingredients/actions';
import { useToast } from '@/app/hooks/use-toast';

interface IProps {
  ingredient: IIngredient;
}
const IngredientActions = ({ ingredient }: IProps) => {
  const { toast } = useToast();
  const handleOnDelete = async () => {
    const res = await deleteIngredient(ingredient.id);

    if (Object.keys(res).length === 0) {
      toast({
        variant: 'success',
        description: 'Ingredient deleted successfully.',
      });
    } else {
      toast({
        variant: 'error',
        description: res.error || 'Unknown error',
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
