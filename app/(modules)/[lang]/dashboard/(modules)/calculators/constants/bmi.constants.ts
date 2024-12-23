import { EGender } from '@/app/(modules)/[lang]/dashboard/(modules)/calculators/enums';
import { IBmiValues } from '@/app/(modules)/[lang]/dashboard/(modules)/calculators/interfaces';

export const BMI_CALCULATOR_INPUTS = [
  {
    label: 'age',
    adornment: '',
  },
  {
    label: 'weight',
    adornment: 'kg',
  },
  {
    label: 'height',
    adornment: 'cm',
  },
];

export const DEFAULT_BMI_VALUES: IBmiValues = {
  gender: EGender.MALE,
  age: 25,
  weight: 65,
  height: 180,
};
