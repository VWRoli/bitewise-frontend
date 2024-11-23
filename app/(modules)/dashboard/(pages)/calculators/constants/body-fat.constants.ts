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
    { category: 'Essential Fat', min: 10, max: 13.5 },
    { category: 'Athletes', min: 13.6, max: 20.5 },
    { category: 'Fitness', min: 20.6, max: 24.5 },
    { category: 'Average', min: 24.6, max: 31.5 },
    { category: 'Obese', min: 31.6, max: Infinity },
  ],
  [EGender.MALE]: [
    { category: 'Essential Fat', min: 2, max: 5.5 },
    { category: 'Athletes', min: 5.6, max: 13.5 },
    { category: 'Fitness', min: 13.6, max: 17.5 },
    { category: 'Average', min: 17.6, max: 24.5 },
    { category: 'Obese', min: 24.6, max: Infinity },
  ],
};
