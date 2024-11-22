import MealsLoading from '@/app/(modules)/dashboard/(pages)/meals/components/Table/MealsLoading';
import MealsTable from '@/app/(modules)/dashboard/(pages)/meals/components/Table/MealsTable';
import { IPageProps } from '@/app/(modules)/dashboard/interfaces';
import { Suspense } from 'react';

export default async function Page(props: IPageProps) {
  const pageKey = JSON.stringify(props.searchParams);

  return (
    <div className="p-2 md:p-4 xl:p-8">
      <section className="flex flex-col gap-4">
        <Suspense key={pageKey} fallback={<MealsLoading />}>
          <MealsTable {...props} />
        </Suspense>
      </section>
    </div>
  );
}
