import { fetchMealPlans } from '@/app/(modules)/dashboard/(pages)/meal-plans/actions';
import AddMealPlanDialog from '@/app/(modules)/dashboard/(pages)/meal-plans/components/AddMealPlanDialog';
import MealPlanTableHead from '@/app/(modules)/dashboard/(pages)/meal-plans/components/Table/MealPlanTableHead';
import MealPlanTableRow from '@/app/(modules)/dashboard/(pages)/meal-plans/components/Table/MealPlanTableRow';
import { fetchMeals } from '@/app/(modules)/dashboard/(pages)/meals/actions';
import { PAGE_SIZE } from '@/app/(modules)/dashboard/constants';
import { IPageProps } from '@/app/(modules)/dashboard/interfaces';
import EmptyTable from '@/app/components/EmptyTable';
import CustomError from '@/app/components/Error';
import { Pagination } from '@/app/components/Pagination';
import TableFrame from '@/app/components/Table/TableFrame';
import { TableBody } from '@/app/components/ui/table';
import { EOrderDirection } from '@/app/utils/enums';
import { IQueryParams } from '@/app/utils/interfaces';
import { IError } from '@/app/utils/interfaces/error.interface';

const MealPlansTable = async (props: IPageProps) => {
  const pageNumber = Number(props?.searchParams?.page || 1);

  const params: IQueryParams = {
    limit: PAGE_SIZE,
    offset: (pageNumber - 1) * PAGE_SIZE,
    orderBy: props?.searchParams?.orderBy as string | undefined,
    orderDirection: props?.searchParams?.orderDirection as
      | EOrderDirection
      | undefined,
  };

  const [mealPlansResult, mealsResult] = await Promise.all([
    fetchMealPlans(params),
    fetchMeals({}),
  ]);

  const total = mealPlansResult.data?.count || 0;

  const metadata = {
    hasNextPage: (params.offset as number) + PAGE_SIZE < total,
    totalPages: Math.ceil(total / PAGE_SIZE),
  };

  if (mealPlansResult.error) {
    return (
      <div className="mt-8 p-2 md:p-4 xl:p-8">
        <section className="flex flex-col gap-4">
          <CustomError result={mealPlansResult as IError} />
        </section>
      </div>
    );
  }

  const mealsPlans = mealPlansResult.data?.data || [];

  return (
    <>
      <TableFrame
        title={`Meal Plans (${mealPlansResult.data?.count})`}
        tableHead={<MealPlanTableHead {...props.searchParams} />}
        addModal={<AddMealPlanDialog allMeals={mealsResult.data?.data || []} />}
      >
        <TableBody>
          {mealsPlans?.length ? (
            mealsPlans.map((row) => <MealPlanTableRow key={row.id} row={row} />)
          ) : (
            <EmptyTable>No meal plans available</EmptyTable>
          )}
        </TableBody>
      </TableFrame>
      {!!mealsPlans.length && (
        <Pagination {...props.searchParams} {...metadata} />
      )}
    </>
  );
};

export default MealPlansTable;
