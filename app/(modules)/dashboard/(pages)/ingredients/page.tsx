import { fetchIngredients } from '@/app/(modules)/dashboard/(pages)/ingredients/actions';
import AddIngredientDialog from '@/app/(modules)/dashboard/(pages)/ingredients/components/AddIngredientDialog';
import IngredientTableHead from '@/app/(modules)/dashboard/(pages)/ingredients/components/Table/IngredientTableHead';
import IngredientTableRow from '@/app/(modules)/dashboard/(pages)/ingredients/components/Table/IngredientTableRow';
import CustomError from '@/app/common/components/Error';
import TableFrame from '@/app/common/components/Table/TableFrame';
import { IError } from '@/app/common/interfaces/error.interface';
import { TableBody, TableCell, TableRow, Typography } from '@mui/material';

export default async function Page() {
  const result = await fetchIngredients();

  if (result.error) {
    return (
      <div className="p-2 md:p-4 xl:p-8 mt-8">
        <section className="flex flex-col gap-4">
          <CustomError result={result as IError} />;
        </section>
      </div>
    );
  }

  const ingredients = result.data;

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
              <TableRow>
                <TableCell colSpan={8}>
                  <Typography variant="h6" align="center">
                    No ingredients available
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </TableFrame>
      </section>
    </div>
  );
}
