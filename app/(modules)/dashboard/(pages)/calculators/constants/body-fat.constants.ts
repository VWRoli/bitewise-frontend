import { EGender } from '@/app/(modules)/dashboard/(pages)/calculators/enums';
import { IBodyFatValues } from '@/app/(modules)/dashboard/(pages)/calculators/interfaces';

export const BODY_FAT_CALCULATOR_INPUTS = [
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
  {
    label: 'neck',
    adornment: 'cm',
  },
  {
    label: 'waist',
    adornment: 'cm',
  },
];

export const DEFAULT_VALUES: IBodyFatValues = {
  gender: EGender.MALE,
  age: 25,
  weight: 70,
  height: 178,
  neck: 50,
  waist: 96,
  hip: 92,
};
