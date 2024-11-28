import { fetchIngredients } from '@/app/(modules)/dashboard/(pages)/ingredients/actions';
import { fetchMeals } from '@/app/(modules)/dashboard/(pages)/meals/actions';
import AddMealDialog from '@/app/(modules)/dashboard/(pages)/meals/components/AddMealDialog';
import MealTableHead from '@/app/(modules)/dashboard/(pages)/meals/components/Table/MealTableHead';
import MealTableRow from '@/app/(modules)/dashboard/(pages)/meals/components/Table/MealTableRow';
import { PAGE_SIZE } from '@/app/(modules)/dashboard/constants';
import { IPageProps } from '@/app/(modules)/dashboard/interfaces';
import EmptyTable from '@/app/components/EmptyTable';
import CustomError from '@/app/components/Error';
import { Pagination } from '@/app/components/Pagination';
import TableFrame from '@/app/components/Table/TableFrame';
import { IError } from '@/app/utils/interfaces/error.interface';
import { TableBody } from '@/app/components/ui/table';
import React from 'react';

const MealsTable = async (props: IPageProps) => {
  const pageNumber = Number(props?.searchParams?.page || 1);

  const params = {
    limit: PAGE_SIZE,
    offset: (pageNumber - 1) * PAGE_SIZE,
  };

  const [mealsResult, ingredientsResult] = await Promise.all([
    fetchMeals(params),
    fetchIngredients({}),
  ]);

  const total = mealsResult.data?.count || 0;

  const metadata = {
    hasNextPage: params.offset + PAGE_SIZE < total,
    totalPages: Math.ceil(total / PAGE_SIZE),
  };

  if (mealsResult.error) {
    return (
      <div className="p-2 md:p-4 xl:p-8 mt-8">
        <section className="flex flex-col gap-4">
          <CustomError result={mealsResult as IError} />
        </section>
      </div>
    );
  }

  const meals = mealsResult.data?.data || [];

  return (
    <>
      <TableFrame
        title={`Meals (${mealsResult.data?.count})`}
        tableHead={<MealTableHead />}
        addModal={
          <AddMealDialog ingredients={ingredientsResult.data?.data || []} />
        }
      >
        <TableBody>
          {meals?.length ? (
            meals.map((row) => <MealTableRow key={row.id} row={row} />)
          ) : (
            <EmptyTable>No meals available</EmptyTable>
          )}
        </TableBody>
      </TableFrame>
      {!!meals.length && <Pagination {...props.searchParams} {...metadata} />}
    </>
  );
};

export default MealsTable;
