import { IPageProps } from '@/app/(modules)/dashboard/interfaces';
import MealPlansLoading from '@/app/(modules)/dashboard/(modules)/meal-plans/components/Table/MealPlansLoading';
import MealPlansTable from '@/app/(modules)/dashboard/(modules)/meal-plans/components/Table/MealPlansTable';
import { Suspense } from 'react';

export default function Page(props: IPageProps) {
  const pageKey = JSON.stringify(props.searchParams);

  return (
    <div className="flex flex-col gap-8 p-2 md:p-4 xl:p-8">
      <section className="flex flex-col gap-4">
        <Suspense key={pageKey} fallback={<MealPlansLoading />}>
          <MealPlansTable {...props} />
        </Suspense>
      </section>
    </div>
  );
}
