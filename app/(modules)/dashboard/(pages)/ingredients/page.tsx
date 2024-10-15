import IngredientContent from '@/app/(modules)/dashboard/(pages)/ingredients/components/IngredientContent';
import IngredientHeader from '@/app/(modules)/dashboard/(pages)/ingredients/components/IngredientHeader';

export default function Page() {
  return (
    <div className="p-2 md:p-4 xl:p-8 flex flex-col gap-8">
      <IngredientHeader />
      <IngredientContent />
    </div>
  );
}
