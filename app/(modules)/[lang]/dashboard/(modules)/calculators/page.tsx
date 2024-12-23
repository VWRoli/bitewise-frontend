import BmiCalculator from '@/app/(modules)/[lang]/dashboard/(modules)/calculators/components/BmiCalculator';
import BodyFatCalculator from '@/app/(modules)/[lang]/dashboard/(modules)/calculators/components/BodyFatCalculator';
import CalorieCalculator from '@/app/(modules)/[lang]/dashboard/(modules)/calculators/components/CalorieCalculator';

export default function Page() {
  return (
    <div className="mt-8 flex flex-col items-center gap-12 p-2 md:flex-row md:items-start md:p-4 xl:p-8">
      <BodyFatCalculator />
      <BmiCalculator />
      <CalorieCalculator />
    </div>
  );
}
