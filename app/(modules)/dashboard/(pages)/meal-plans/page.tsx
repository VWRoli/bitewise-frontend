import MealPlansContent from '@/app/(modules)/dashboard/(pages)/meal-plans/components/MealPlansContent';

export default async function Page() {
  return (
    <div className="p-2 md:p-4 xl:p-8 flex flex-col gap-8">
      <MealPlansContent />
    </div>
  );
}
