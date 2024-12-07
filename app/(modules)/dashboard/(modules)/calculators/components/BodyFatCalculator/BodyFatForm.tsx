'use client';

import {
  BODY_FAT_CALCULATOR_INPUTS,
  DEFAULT_BODY_FAT_VALUES,
} from '@/app/(modules)/dashboard/(modules)/calculators/constants';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/components/ui/form';

import CalculatorFooter from '@/app/(modules)/dashboard/(modules)/calculators/components/CalculatorFooter';
import { EGender } from '@/app/(modules)/dashboard/(modules)/calculators/enums';
import GenderField from '@/app/(modules)/dashboard/(modules)/calculators/components/GenderField';
import { IBodyFatValues } from '@/app/(modules)/dashboard/(modules)/calculators/interfaces';
import { Input } from '@/app/components/ui/input';
import { bodyFatSchema } from '@/app/(modules)/dashboard/(modules)/calculators/validations';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface IProps {
  handleCalculate: (values: IBodyFatValues) => void;
}
const BodyFatForm = ({ handleCalculate }: IProps) => {
  const form = useForm<z.infer<typeof bodyFatSchema>>({
    resolver: zodResolver(bodyFatSchema),
    defaultValues: DEFAULT_BODY_FAT_VALUES,
  });

  const gender = form.watch('gender');

  function onSubmit(values: z.infer<typeof bodyFatSchema>) {
    handleCalculate(values);
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-2 px-4 pb-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <GenderField form={form} />

        {BODY_FAT_CALCULATOR_INPUTS.map((input) => (
          <FormField
            key={input.label}
            control={form.control}
            name={input.label as keyof IBodyFatValues}
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
        {gender === EGender.FEMALE && (
          <FormField
            control={form.control}
            name="hip"
            render={({ field }) => (
              <FormItem>
                <FormLabel asChild>
                  <p className="first-letter:uppercase">Hip</p>
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <CalculatorFooter onClear={() => form.reset()} />
      </form>
    </Form>
  );
};

export default BodyFatForm;
