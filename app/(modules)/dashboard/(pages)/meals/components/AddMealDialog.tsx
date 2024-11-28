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
import { createOrUpdateToasts } from '@/app/utils/helpers';
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
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { mealSchema } from '@/app/(modules)/dashboard/(pages)/meals/validations';
import { Input } from '@/app/components/ui/input';

interface IProps {
  ingredients: IIngredient[];
  mealEditValues?: IMeal | null;
}

const AddMealDialog = (props: IProps) => {
  const { mealEditValues, ingredients } = props;
  const [isOpen, setIsOpen] = useState(false);

  const initialFormData = mealEditValues || DEFAULT_MEAL;

  const form = useForm<z.infer<typeof mealSchema>>({
    resolver: zodResolver(mealSchema),
    defaultValues: initialFormData,
  });

  const { user } = useUserContext();

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'mealIngredients',
  });

  const addIngredient = () => {
    append({ ingredientId: 0, quantity: 0 });
  };

  useEffect(() => {
    console.log(fields);
  }, [fields]);

  const onSubmit = async (values: z.infer<typeof mealSchema>) => {
    let result;

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
    <>
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
                <DialogTitle>
                  {mealEditValues ? 'Edit' : 'Add'} Meal
                </DialogTitle>
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
              {fields.map((ingredient, index) => (
                <MealIngredient
                  key={ingredient.id}
                  index={index}
                  ingredient={ingredient}
                  allIngredients={ingredients}
                  removeIngredient={() => remove(index)}
                />
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

                <Button type="submit" variant="default">
                  {mealEditValues ? 'Edit' : 'Add'}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddMealDialog;
