import { fetchIngredients } from '@/app/(modules)/dashboard/(pages)/ingredients/actions';
import AddIngredientDialog from '@/app/(modules)/dashboard/(pages)/ingredients/components/AddIngredientDialog';
import IngredientTableHead from '@/app/(modules)/dashboard/(pages)/ingredients/components/Table/IngredientTableHead';
import IngredientTableRow from '@/app/(modules)/dashboard/(pages)/ingredients/components/Table/IngredientTableRow';
import { PAGE_SIZE } from '@/app/(modules)/dashboard/(pages)/ingredients/constants/variables.constants';
import EmptyTable from '@/app/common/components/EmptyTable';
import CustomError from '@/app/common/components/Error';
import { Pagination } from '@/app/common/components/Pagination';
import TableFrame from '@/app/common/components/Table/TableFrame';
import { IError } from '@/app/common/interfaces/error.interface';
import { TableBody } from '@mui/material';

export type PageProps = {
  params: { [kex: string]: string | string[] | undefined };
  searchParams?: { [kex: string]: string | string[] | undefined };
};

export default async function Page(props: PageProps) {
  const pageNumber = Number(props?.searchParams?.page || 1);

  const params = {
    limit: PAGE_SIZE,
    offset: (pageNumber - 1) * PAGE_SIZE,
  };
  const result = await fetchIngredients(params);

  const total = result.data?.count || 0;

  const metadata = {
    hasNextPage: params.offset + PAGE_SIZE < total,
    totalPages: Math.ceil(total / PAGE_SIZE),
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
    <div className="p-2 md:p-4 xl:p-8 mt-8">
      <section className="flex flex-col gap-4">
        <TableFrame
          title="Ingredients Table"
          tableHead={<IngredientTableHead />}
          addModal={<AddIngredientDialog />}
        >
          <TableBody>
            {ingredients?.length ? (
              ingredients?.map((row) => (
                <IngredientTableRow key={row.id} row={row} />
              ))
            ) : (
              <EmptyTable>No ingredients available</EmptyTable>
            )}
          </TableBody>
        </TableFrame>
        <Pagination {...props.searchParams} {...metadata} />
      </section>
    </div>
  );
}
