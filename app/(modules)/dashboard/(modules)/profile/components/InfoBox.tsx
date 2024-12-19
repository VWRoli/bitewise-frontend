'use client';

import DatePicker from '@/app/components/form/DatePicker';
import InputField from '@/app/components/form/InputField';
import { TProfileInfoSchema } from '@/app/(modules)/dashboard/(modules)/profile/validations/profile-information.validation';
import Typography from '@/app/components/Typography';
import { UseFormReturn } from 'react-hook-form';

interface IProps {
  label: string;
  info?: string;
  isEditable?: boolean;
  name: string;
  form: UseFormReturn<TProfileInfoSchema, any, undefined>;
  isDate?: boolean;
}
const InfoBox = ({ label, info, isEditable, form, name, isDate }: IProps) => {
  return (
    <article>
      <Typography variant="p">{label}</Typography>
      {isEditable ? (
        <div className="max-w-[200px]">
          {isDate ? (
            <DatePicker form={form} name={name as keyof TProfileInfoSchema} />
          ) : (
            <InputField
              form={form}
              name={name as keyof TProfileInfoSchema}
              type={'text'}
            />
          )}
        </div>
      ) : (
        <Typography variant="large">{info || '-'}</Typography>
      )}
    </article>
  );
};

export default InfoBox;
