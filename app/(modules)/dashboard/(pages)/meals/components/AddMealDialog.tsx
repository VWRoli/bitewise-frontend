'use client';

import React, { useEffect, useState } from 'react';
import {
  ICreateMeal,
  IMeal,
} from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import MealIngredient from '@/app/(modules)/dashboard/(pages)/meals/components/MealIngredient';
import { DEFAULT_MEAL } from '@/app/(modules)/dashboard/(pages)/meals/constants';
import { IIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';
import {
  createMeal,
  updateMeal,
} from '@/app/(modules)/dashboard/(pages)/meals/actions';
import { useUserContext } from '@/app/(modules)/dashboard/(pages)/user/context';
import { convertToOptions, createOrUpdateToasts } from '@/app/utils/helpers';
import { EActionType } from '@/app/utils/enums';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/app/components/ui/dialog';
import { Button } from '@/app/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/components/ui/form';
import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  TMealSchema,
  mealSchema,
} from '@/app/(modules)/dashboard/(pages)/meals/validations';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Combobox } from '@/app/components/Combobox';
import { Delete } from 'lucide-react';
import LoadingButton from '@/app/components/buttons/LoadingButton';

interface IProps {
  ingredients: IIngredient[];
  mealEditValues?: IMeal | null;
}

const AddMealDialog = (props: IProps) => {
  const { mealEditValues, ingredients } = props;
  const [isOpen, setIsOpen] = useState(false);

  const initialFormData = mealEditValues || DEFAULT_MEAL;

  const form = useForm<TMealSchema>({
    resolver: zodResolver(mealSchema),
    defaultValues: initialFormData,
  });

  const { user } = useUserContext();

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'mealIngredients',
  }); //

  const options = convertToOptions(ingredients);
  const addIngredient = () => {
    append({ ingredientId: 0, quantity: 0 });
  };

  useEffect(() => {
    console.log(form.formState.errors);
  }, [form.formState.errors]);

  const onSubmit = async (values: TMealSchema) => {
    let result;
    console.log('am i called?');
    if (form.formState.errors) {
      console.log('Form Validation Errors:', form.formState.errors);
    }

    console.log('values', values);
    if (mealEditValues) {
      result = await updateMeal(values as ICreateMeal, mealEditValues.id);
    } else {
      result = await createMeal({
        ...values,
        userId: user?.id,
      });
    }

    createOrUpdateToasts(
      mealEditValues ? EActionType.UPDATE : EActionType.CREATE,
      result,
    );

    if (!result.error) {
      form.reset();
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {mealEditValues ? (
        <DialogTrigger onClick={() => setIsOpen(true)}>Edit</DialogTrigger>
      ) : (
        <DialogTrigger asChild>
          <Button variant="outline" onClick={() => setIsOpen(true)}>
            Add
          </Button>
        </DialogTrigger>
      )}

      <DialogContent>
        <Form {...form}>
          <form
            className="flex flex-col gap-2 px-4 pb-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <DialogHeader>
              <DialogTitle>{mealEditValues ? 'Edit' : 'Add'} Meal</DialogTitle>
              <DialogDescription />
            </DialogHeader>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {fields.map((ingredient) => (
              <div className="flex gap-4 items-center" key={ingredient.id}>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="meal">Meal</Label>
                  <Combobox options={options} placeholder="Select meal..." />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input id="quantity" placeholder="Quantity" type="number" />
                </div>

                <Button
                  aria-label="remove-ingredient"
                  variant="destructive"
                  onClick={() => remove()}
                >
                  <Delete />
                </Button>
              </div>
            ))}
            <Button onClick={addIngredient} variant="default">
              Add Ingredient
            </Button>
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </Button>
              </DialogClose>

              <LoadingButton
                loading={form.formState.isSubmitting}
                type="submit"
                variant="default"
              >
                {mealEditValues ? 'Edit' : 'Add'}
              </LoadingButton>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddMealDialog;
