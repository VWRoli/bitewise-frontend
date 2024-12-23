'use client';

import {
  BMI_CALCULATOR_INPUTS,
  DEFAULT_BMI_VALUES,
} from '@/app/(modules)/[lang]/dashboard/(modules)/calculators/constants';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/components/ui/form';

import CalculatorFooter from '@/app/(modules)/[lang]/dashboard/(modules)/calculators/components/CalculatorFooter';
import GenderField from '@/app/(modules)/[lang]/dashboard/(modules)/calculators/components/GenderField';
import { IBmiValues } from '@/app/(modules)/[lang]/dashboard/(modules)/calculators/interfaces';
import { Input } from '@/app/components/ui/input';
import { bmiSchema } from '@/app/(modules)/[lang]/dashboard/(modules)/calculators/validations';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface IProps {
  handleCalculate: (values: IBmiValues) => void;
}
const BmiForm = ({ handleCalculate }: IProps) => {
  const form = useForm<z.infer<typeof bmiSchema>>({
    resolver: zodResolver(bmiSchema),
    defaultValues: DEFAULT_BMI_VALUES,
  });

  function onSubmit(values: z.infer<typeof bmiSchema>) {
    handleCalculate(values);
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-2 px-4 pb-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <GenderField form={form} />

        {BMI_CALCULATOR_INPUTS.map((input) => (
          <FormField
            key={input.label}
            control={form.control}
            name={input.label as keyof IBmiValues}
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

        <CalculatorFooter onClear={() => form.reset()} />
      </form>
    </Form>
  );
};

export default BmiForm;
