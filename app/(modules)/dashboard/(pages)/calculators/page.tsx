import BodyFatCalculator from '@/app/(modules)/dashboard/(pages)/calculators/components/BodyFatCalculator';

export default function Page() {
  return (
    <div className="p-2 md:p-4 xl:p-8 mt-8 flex flex-col xl:flex-row">
      <BodyFatCalculator />
    </div>
  );
}
