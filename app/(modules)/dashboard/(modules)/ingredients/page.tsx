import { IPageProps } from '@/app/(modules)/dashboard/interfaces';
import IngredientsLoading from '@/app/(modules)/dashboard/(modules)/ingredients/components/Table/IngredientsLoading';
import IngredientsTable from '@/app/(modules)/dashboard/(modules)/ingredients/components/Table/IngredientsTable';
import { Suspense } from 'react';

export default function Page(props: IPageProps) {
  const pageKey = JSON.stringify(props.searchParams);

  return (
    <div className="mt-8 p-2 md:p-4 xl:p-8">
      <section className="flex flex-col gap-4">
        <Suspense key={pageKey} fallback={<IngredientsLoading />}>
          <IngredientsTable {...props} />
        </Suspense>
      </section>
    </div>
  );
}
