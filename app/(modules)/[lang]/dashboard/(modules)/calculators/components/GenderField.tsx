import { FieldValues, Path, UseFormReturn } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/app/components/ui/radio-group';

import { EGender } from '@/app/(modules)/[lang]/dashboard/(modules)/calculators/enums';

interface IProps<T extends FieldValues> {
  form: UseFormReturn<T>;
}

const GenderField = <T extends { gender: EGender }>({ form }: IProps<T>) => {
  return (
    <FormField
      control={form.control}
      name={'gender' as Path<T>}
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
