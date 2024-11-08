export function calculateBMI(weight: number, height: number): number {
  height = height / 100;
  const result = weight / (height * height);
  return Math.round(result * 10) / 10;
}

export function bmiCategoryCalculator(bmi: number): string {
  let category: string;
  if (bmi < 16) {
    category = 'Severe Thinness';
  } else if (bmi >= 16 && bmi < 17) {
    category = 'Moderate Thinness';
  } else if (bmi >= 17 && bmi < 18.5) {
    category = 'Mild Thinness';
  } else if (bmi >= 18.5 && bmi < 25) {
    category = 'Normal';
  } else if (bmi >= 25 && bmi < 30) {
    category = 'Overweight';
  } else if (bmi >= 30 && bmi < 35) {
    category = 'Obese Class I';
  } else if (bmi >= 35 && bmi < 40) {
    category = 'Obese Class II';
  } else {
    category = 'Obese Class III';
  }

  return category;
}
