import { fetchMealPlans } from '@/app/(modules)/dashboard/(pages)/meal-plans/actions';
import AddMealPlanDialog from '@/app/(modules)/dashboard/(pages)/meal-plans/components/AddMealPlanDialog';
import MealPlanTableHead from '@/app/(modules)/dashboard/(pages)/meal-plans/components/Table/MealPlanTableHead';
import MealPlanTableRow from '@/app/(modules)/dashboard/(pages)/meal-plans/components/Table/MealPlanTableRow';
import { fetchMeals } from '@/app/(modules)/dashboard/(pages)/meals/actions';
import { fetchMe } from '@/app/(modules)/dashboard/(pages)/user/actions';
import { PAGE_SIZE } from '@/app/(modules)/dashboard/constants';
import { IPageProps } from '@/app/(modules)/dashboard/interfaces';
import EmptyTable from '@/app/common/components/EmptyTable';
import CustomError from '@/app/common/components/Error';
import { Pagination } from '@/app/common/components/Pagination';
import TableFrame from '@/app/common/components/Table/TableFrame';
import { IError } from '@/app/common/interfaces/error.interface';
import { TableBody } from '@mui/material';
import React from 'react';

const MealPlansTable = async (props: IPageProps) => {
  const pageNumber = Number(props?.searchParams?.page || 1);

  const params = {
    limit: PAGE_SIZE,
    offset: (pageNumber - 1) * PAGE_SIZE,
  };

  const [mealPlansResult, mealsResult] = await Promise.all([
    fetchMealPlans(params),
    fetchMeals({}),
  ]);

  const total = mealPlansResult.data?.count || 0;

  const metadata = {
    hasNextPage: params.offset + PAGE_SIZE < total,
    totalPages: Math.ceil(total / PAGE_SIZE),
  };

  if (mealPlansResult.error) {
    return (
      <div className="p-2 md:p-4 xl:p-8 mt-8">
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
        tableHead={<MealPlanTableHead />}
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
