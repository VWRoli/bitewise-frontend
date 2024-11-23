'use client';

import React, { useState } from 'react';
import {
  ICreateIngredient,
  IIngredient,
} from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';
import { EUnit } from '@/app/(modules)/dashboard/(pages)/ingredients/enums';
import {
  ADD_INGRENDIENT_FIELDS,
  DEFAULT_INGREDIENT_VALUES,
} from '@/app/(modules)/dashboard/(pages)/ingredients/constants';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  createIngredient,
  updateIngredient,
} from '@/app/(modules)/dashboard/(pages)/ingredients/actions';
import { useUserContext } from '@/app/(modules)/dashboard/(pages)/user/context';
import { createOrUpdateToasts } from '@/utils/helpers';
import { EActionType } from '@/utils/enums';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ingredientSchema } from '@/app/(modules)/dashboard/(pages)/ingredients/validations';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface IProps {
  ingredientEditValues?: IIngredient | null;
}

const AddIngredientDialog: React.FC<IProps> = ({ ingredientEditValues }) => {
  const [isOpen, setIsOpen] = useState(false);
  const form = useForm<z.infer<typeof ingredientSchema>>({
    resolver: zodResolver(ingredientSchema),
    defaultValues: ingredientEditValues
      ? ingredientEditValues
      : DEFAULT_INGREDIENT_VALUES,
  });

  const { user } = useUserContext();

  async function onSubmit(values: z.infer<typeof ingredientSchema>) {
    let result;

    if (ingredientEditValues) {
      result = await updateIngredient(
        values as ICreateIngredient,
        ingredientEditValues.id,
      );
    } else {
      result = await createIngredient({
        ...values,
        price: 0, //TODO: implement later on
        userId: user?.id,
      } as ICreateIngredient);
    }

    createOrUpdateToasts(
      ingredientEditValues ? EActionType.UPDATE : EActionType.CREATE,
      result,
    );

    if (!result.error) {
      form.reset();
      setIsOpen(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {ingredientEditValues ? (
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
                {ingredientEditValues ? 'Edit' : 'Add'} Ingredient
              </DialogTitle>
            </DialogHeader>
            {ADD_INGRENDIENT_FIELDS.map((input) => (
              <FormField
                key={input.label}
                control={form.control}
                name={input.label as keyof z.infer<typeof ingredientSchema>}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel asChild>
                      <p className="first-letter:uppercase">{input.label}</p>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type={input.type}
                        {...field}
                        onChange={(event) =>
                          field.onChange(
                            input.type === 'number'
                              ? +event.target.value
                              : event.target.value,
                          )
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <FormField
              control={form.control}
              name="unit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Unit</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={String(field.value)}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select unit" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.values(EUnit).map((unit) => (
                        <SelectItem key={unit} value={unit}>
                          {unit}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                {ingredientEditValues ? 'Edit' : 'Add'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddIngredientDialog;
