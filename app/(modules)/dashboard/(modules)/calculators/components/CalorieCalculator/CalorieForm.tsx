'use client';

import {
  CALORIE_CALCULATOR_INPUTS,
  DEFAULT_CALORIE_VALUES,
} from '@/app/(modules)/dashboard/(modules)/calculators/constants';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';

import CalculatorFooter from '@/app/(modules)/dashboard/(modules)/calculators/components/CalculatorFooter';
import { EActivityLevel } from '@/app/(modules)/dashboard/(modules)/calculators/enums';
import GenderField from '@/app/(modules)/dashboard/(modules)/calculators/components/GenderField';
import { ICalorieValues } from '@/app/(modules)/dashboard/(modules)/calculators/interfaces';
import { Input } from '@/app/components/ui/input';
import { calorieSchema } from '@/app/(modules)/dashboard/(modules)/calculators/validations';
import { makeStringReadable } from '@/app/utils/helpers';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface IProps {
  handleCalculate: (values: ICalorieValues) => void;
}
const CalorieForm = ({ handleCalculate }: IProps) => {
  const form = useForm<z.infer<typeof calorieSchema>>({
    resolver: zodResolver(calorieSchema),
    defaultValues: DEFAULT_CALORIE_VALUES,
  });

  function onSubmit(values: z.infer<typeof calorieSchema>) {
    handleCalculate(values);
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-2 px-4 pb-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <GenderField form={form} />
        {CALORIE_CALCULATOR_INPUTS.map((input) => (
          <FormField
            key={input.label}
            control={form.control}
            name={input.label as keyof ICalorieValues}
            render={({ field }) => (
              <FormItem>
                <FormLabel asChild>
                  <p className="first-letter:uppercase">{input.label}</p>
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(event) => field.onChange(+event.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <FormField
          control={form.control}
          name="activityLevel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Activity</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select activity level" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.values(EActivityLevel).map((level) => (
                    <SelectItem key={level} value={level}>
                      {makeStringReadable(level)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <CalculatorFooter onClear={() => form.reset()} />
      </form>
    </Form>
  );
};

export default CalorieForm;
