import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/components/ui/form';
import { Input } from '@/app/components/ui/input';
import { HTMLInputTypeAttribute } from 'react';
import { UseFormReturn } from 'react-hook-form';

interface IProps {
  form: UseFormReturn<any, any, undefined>;
  label: string;
  name: string;
  type: HTMLInputTypeAttribute;
}

const InputField = ({ form, label, name, type }: IProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel asChild>
            <p className="first-letter:uppercase">{label}</p>
          </FormLabel>
          <FormControl>
            <Input type={type} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputField;
