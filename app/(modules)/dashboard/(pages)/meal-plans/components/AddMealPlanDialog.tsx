'use client';

import React, { useState } from 'react';
import {
  ICreateMealPlan,
  IMealPlan,
} from '@/app/(modules)/dashboard/(pages)/meal-plans/interfaces';
import { convertToOptions, createOrUpdateToasts } from '@/app/utils/helpers';
import { IOption } from '@/app/utils/interfaces';
import { IMeal } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import { useUserContext } from '@/app/(modules)/dashboard/(pages)/user/context';
import {
  createMealPlan,
  updateMealPlan,
} from '@/app/(modules)/dashboard/(pages)/meal-plans/actions';
import { EActionType } from '@/app/utils/enums';
import { Label } from '@/app/components/ui/label';
import { Combobox } from '@/app/components/Combobox';
import { Input } from '@/app/components/ui/input';
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
import { Form } from '@/app/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  TMealPlanSchema,
  mealPlanSchema,
} from '@/app/(modules)/dashboard/(pages)/meal-plans/validations';
import LoadingButton from '@/app/components/buttons/LoadingButton';

interface IProps {
  allMeals: IMeal[];
  mealPlanEditValues?: IMealPlan | null;
}
const AddMealPlanDialog = ({ mealPlanEditValues, allMeals }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const initialMeals = mealPlanEditValues?.meals.map((el) => el.id) || [];
  const [meals, setMeals] = useState<number[]>(initialMeals);

  const form = useForm<TMealPlanSchema>({
    resolver: zodResolver(mealPlanSchema),
    defaultValues: {},
  });

  const options: IOption[] = convertToOptions(allMeals);

  const mealsWithDuplicates = meals.map((mealId) =>
    options.find((option) => option.value === mealId),
  );
  // const selectedMeals = mealsWithDuplicates.filter(
  //   (meal) => meal !== undefined,
  // ) as (typeof options)[0][];

  const { user } = useUserContext();

  const onSubmit = async () => {
    const data: ICreateMealPlan = {
      name: '',
      mealIds: meals,
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

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name" type="text" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="meals">Meals</Label>
              <Combobox options={options} placeholder="Select meals..." />
            </div>

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
                {mealPlanEditValues ? 'Edit' : 'Add'}
              </LoadingButton>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddMealPlanDialog;
