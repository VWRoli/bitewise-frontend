'use client';

import DatePicker from '@/app/components/form/DatePicker';
import { TProfileInfoSchema } from '@/app/(modules)/dashboard/(modules)/profile/validations/profile-information.validation';
import Typography from '@/app/components/Typography';
import { UseFormReturn } from 'react-hook-form';
import { format } from 'date-fns';

interface IProps {
  label: string;
  info?: Date;
  isEditable?: boolean;
  form: UseFormReturn<TProfileInfoSchema, any, undefined>;
}
const DateInfoBox = ({ label, info, isEditable, form }: IProps) => {
  return (
    <article>
      <Typography variant="p">{label}</Typography>
      {isEditable ? (
        <div className="max-w-[200px]">
          <DatePicker form={form} name="dateOfBirth" />
        </div>
      ) : (
        <Typography variant="large">
          {format(info as Date, 'PPP') || '-'}
        </Typography>
      )}
    </article>
  );
};

export default DateInfoBox;
