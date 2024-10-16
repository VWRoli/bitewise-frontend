import IngredientsContent from '@/app/(modules)/dashboard/(pages)/ingredients/components/IngredientsContent';
import IngredientsHeader from '@/app/(modules)/dashboard/(pages)/ingredients/components/IngredientsHeader';

export default function Page() {
  return (
    <div className="p-2 md:p-4 xl:p-8 flex flex-col gap-8">
      <IngredientsHeader />
      <IngredientsContent />
    </div>
  );
}
