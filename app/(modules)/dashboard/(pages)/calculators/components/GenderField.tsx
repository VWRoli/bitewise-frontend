import { EGender } from '@/app/(modules)/dashboard/(pages)/calculators/enums';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import React from 'react';
import { UseFormReturn } from 'react-hook-form';

interface IProps {
  form: UseFormReturn<
    {
      gender: EGender;
      age: number;
      weight: number;
      height: number;
      neck: number;
      waist: number;
      hip: number;
    },
    any,
    undefined
  >;
}

const GenderField = ({ form }: IProps) => {
  return (
    <FormField
      control={form.control}
      name="gender"
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>Gender</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex space-y-1"
            >
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value={EGender.FEMALE} />
                </FormControl>
                <FormLabel className="font-normal">Female</FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value={EGender.MALE} />
                </FormControl>
                <FormLabel className="font-normal">Male</FormLabel>
              </FormItem>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default GenderField;
