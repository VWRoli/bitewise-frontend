import MealsContent from '@/app/(modules)/dashboard/(pages)/meals/components/MealsContent';
import MealsHeader from '@/app/(modules)/dashboard/(pages)/meals/components/MealsHeader';

export default async function Page() {
  return (
    <div className="p-2 md:p-4 xl:p-8 flex flex-col gap-8">
      <MealsHeader />
      <MealsContent />
    </div>
  );
}
