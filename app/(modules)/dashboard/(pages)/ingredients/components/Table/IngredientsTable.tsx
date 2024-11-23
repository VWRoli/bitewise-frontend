import { fetchIngredients } from '@/app/(modules)/dashboard/(pages)/ingredients/actions';
import AddIngredientDialog from '@/app/(modules)/dashboard/(pages)/ingredients/components/AddIngredientDialog';
import IngredientTableHead from '@/app/(modules)/dashboard/(pages)/ingredients/components/Table/IngredientTableHead';
import IngredientTableRow from '@/app/(modules)/dashboard/(pages)/ingredients/components/Table/IngredientTableRow';
import { INGREDTENTS_PAGE_SIZE } from '@/app/(modules)/dashboard/(pages)/ingredients/constants';
import { IPageProps } from '@/app/(modules)/dashboard/interfaces';
import EmptyTable from '@/app/components/EmptyTable';
import CustomError from '@/app/components/Error';
import { Pagination } from '@/app/components/Pagination';
import TableFrame from '@/app/components/Table/TableFrame';
import { IError } from '@/utils/interfaces/error.interface';
import { TableBody } from '@/components/ui/table';
import React from 'react';

const IngredientsTable = async (props: IPageProps) => {
  const pageNumber = Number(props?.searchParams?.page || 1);

  const params = {
    limit: INGREDTENTS_PAGE_SIZE,
    offset: (pageNumber - 1) * INGREDTENTS_PAGE_SIZE,
  };

  const result = await fetchIngredients(params);

  const total = result.data?.count || 0;

  const metadata = {
    hasNextPage: params.offset + INGREDTENTS_PAGE_SIZE < total,
    totalPages: Math.ceil(total / INGREDTENTS_PAGE_SIZE),
  };

  if (result.error) {
    return (
      <div className="p-2 md:p-4 xl:p-8 mt-8">
        <section className="flex flex-col gap-4">
          <CustomError result={result as IError} />
        </section>
      </div>
    );
  }

  const ingredients = result.data?.data || [];

  return (
    <>
      <TableFrame
        title={`Ingredients (${result.data?.count})`}
        tableHead={<IngredientTableHead />}
        addModal={<AddIngredientDialog />}
      >
        <TableBody>
          {ingredients?.length ? (
            ingredients.map((row) => (
              <IngredientTableRow key={row.id} row={row} />
            ))
          ) : (
            <EmptyTable>No ingredients available</EmptyTable>
          )}
        </TableBody>
      </TableFrame>
      {!!ingredients.length && (
        <Pagination {...props.searchParams} {...metadata} />
      )}
    </>
  );
};

export default IngredientsTable;
