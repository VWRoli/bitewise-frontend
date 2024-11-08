import BmiCalculator from '@/app/(modules)/dashboard/(pages)/calculators/components/BmiCalculator';
import BodyFatCalculator from '@/app/(modules)/dashboard/(pages)/calculators/components/BodyFatCalculator';
import CalorieCalculator from '@/app/(modules)/dashboard/(pages)/calculators/components/CalorieCalculator';

export default function Page() {
  return (
    <div className="p-2 md:p-4 xl:p-8 mt-8 flex flex-col md:flex-row gap-12 items-center md:items-start">
      <BodyFatCalculator />
      <BmiCalculator />
      <CalorieCalculator />
    </div>
  );
}
