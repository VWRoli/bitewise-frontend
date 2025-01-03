import { IPageProps, IQueryParams } from '@/app/utils/interfaces';

import AddIngredientDialog from '@/app/(modules)/[lang]/dashboard/(modules)/ingredients/components/AddIngredientDialog';
import CustomError from '@/app/components/Error';
import { EOrderDirection } from '@/app/utils/enums';
import EmptyTable from '@/app/components/EmptyTable';
import { IError } from '@/app/utils/interfaces/error.interface';
import { INGREDTENTS_PAGE_SIZE } from '@/app/(modules)/[lang]/dashboard/(modules)/ingredients/constants';
import IngredientTableHead from '@/app/(modules)/[lang]/dashboard/(modules)/ingredients/components/Table/IngredientTableHead';
import IngredientTableRow from '@/app/(modules)/[lang]/dashboard/(modules)/ingredients/components/Table/IngredientTableRow';
import { Pagination } from '@/app/components/Pagination';
import { TableBody } from '@/app/components/ui/table';
import TableFrame from '@/app/components/Table/TableFrame';
import { fetchIngredients } from '@/app/(modules)/[lang]/dashboard/(modules)/ingredients/actions';

const IngredientsTable = async (props: IPageProps) => {
  const pageNumber = Number(props?.searchParams?.page || 1);

  const params: IQueryParams = {
    limit: INGREDTENTS_PAGE_SIZE,
    offset: (pageNumber - 1) * INGREDTENTS_PAGE_SIZE,
    orderBy: props?.searchParams?.orderBy as string | undefined,
    orderDirection: props?.searchParams?.orderDirection as
      | EOrderDirection
      | undefined,
  };

  const result = await fetchIngredients(params);

  const total = result.data?.count || 0;

  const metadata = {
    hasNextPage: (params.offset as number) + INGREDTENTS_PAGE_SIZE < total,
    totalPages: Math.ceil(total / INGREDTENTS_PAGE_SIZE),
  };

  if (result.error) {
    return (
      <div className="mt-8 p-2 md:p-4 xl:p-8">
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
        tableHead={<IngredientTableHead {...props.searchParams} />}
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
