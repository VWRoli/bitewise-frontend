'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  createMealPlan,
  updateMealPlan,
} from '@/app/(modules)/dashboard/(pages)/meal-plans/actions';
import {
  ICreateMealPlan,
  IMealPlan,
} from '@/app/(modules)/dashboard/(pages)/meal-plans/interfaces';
import {
  mealPlanSchema,
  TMealPlanSchema,
} from '@/app/(modules)/dashboard/(pages)/meal-plans/validations';
import { IMeal } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import { useUserContext } from '@/app/(modules)/dashboard/(pages)/user/context';
import FormDialogFooter from '@/app/components/dialogs/FormDialogFooter';
import InputField from '@/app/components/form/InputField';
import { InputTags } from '@/app/components/form/InputTags';
import { Button } from '@/app/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/app/components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/components/ui/form';
import { EActionType } from '@/app/utils/enums';
import { createOrUpdateToasts } from '@/app/utils/helpers';
//import { IOption } from '@/app/utils/interfaces';

interface IProps {
  allMeals: IMeal[];
  mealPlanEditValues?: IMealPlan | null;
}
const AddMealPlanDialog = ({ mealPlanEditValues }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const initialMeals = mealPlanEditValues?.meals.map((el) => el.id) || [];

  const form = useForm<TMealPlanSchema>({
    resolver: zodResolver(mealPlanSchema),
    defaultValues: {
      name: '',
      mealIds: initialMeals,
    },
  });

  //const options: IOption[] = convertToOptions(allMeals);

  // const mealsWithDuplicates = meals.map((mealId) =>
  //   options.find((option) => option.value === mealId),
  // );

  // useEffect(() => {
  //   console.log(form.formState.errors);
  // }, [form.formState.errors]);

  // const selectedMeals = mealsWithDuplicates.filter(
  //   (meal) => meal !== undefined,
  // ) as (typeof options)[0][];

  const { user } = useUserContext();

  const onSubmit = async (values: TMealPlanSchema) => {
    const data: ICreateMealPlan = {
      ...values,
      userId: user?.id,
    };

    let result;

    if (mealPlanEditValues) {
      result = await updateMealPlan(data, mealPlanEditValues.id);
    } else {
      result = await createMealPlan(data);
    }

    createOrUpdateToasts(
      mealPlanEditValues ? EActionType.UPDATE : EActionType.CREATE,
      result,
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {mealPlanEditValues ? (
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
                {mealPlanEditValues ? 'Edit' : 'Add'} Meal Plan
              </DialogTitle>
              <DialogDescription />
            </DialogHeader>

            <InputField
              form={form}
              label="Meal plan name"
              name="name"
              type="text"
            />
            <FormField
              control={form.control}
              name="mealIds"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add meal(s)</FormLabel>
                  <FormControl>
                    <InputTags {...field} />
                  </FormControl>
                  <FormDescription>...</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormDialogFooter
              form={form}
              submitLabel={mealPlanEditValues ? 'Edit' : 'Add'}
              onClose={() => setIsOpen(false)}
            />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddMealPlanDialog;
