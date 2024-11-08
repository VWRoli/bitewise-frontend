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

export const DEFAULT_BODY_FAT_VALUES: IBodyFatValues = {
  gender: EGender.MALE,
  age: 25,
  weight: 70,
  height: 178,
  neck: 50,
  waist: 96,
  hip: 92,
};

export const BODY_FAT_CATEGORIES = {
  [EGender.FEMALE]: [
    { category: 'Essential Fat', min: 10, max: 13 },
    { category: 'Athletes', min: 14, max: 20 },
    { category: 'Fitness', min: 21, max: 24 },
    { category: 'Average', min: 25, max: 31 },
    { category: 'Obese', min: 32, max: Infinity },
  ],
  [EGender.MALE]: [
    { category: 'Essential Fat', min: 2, max: 5 },
    { category: 'Athletes', min: 6, max: 13 },
    { category: 'Fitness', min: 14, max: 17 },
    { category: 'Average', min: 18, max: 24 },
    { category: 'Obese', min: 25, max: Infinity },
  ],
};
