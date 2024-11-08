import BmiCalculator from '@/app/(modules)/dashboard/(pages)/calculators/components/BmiCalculator';
import BodyFatCalculator from '@/app/(modules)/dashboard/(pages)/calculators/components/BodyFatCalculator';

export default function Page() {
  return (
    <div className="p-2 md:p-4 xl:p-8 mt-8 flex flex-col md:flex-row gap-12 items-center md:items-start">
      <BodyFatCalculator />
      <BmiCalculator />
    </div>
  );
}
