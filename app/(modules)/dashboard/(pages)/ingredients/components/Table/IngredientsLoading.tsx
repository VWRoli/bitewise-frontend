import { TableCell, TableBody, TableRow } from '@/app/components/ui/table';
import { Skeleton } from '@/app/components/ui/skeleton';
import IngredientsLoadingCell from '@/app/(modules)/dashboard/(pages)/ingredients/components/Table/IngredientsLoadingCell';
import IngredientTableHead from '@/app/(modules)/dashboard/(pages)/ingredients/components/Table/IngredientTableHead';
import TableFrame from '@/app/components/Table/TableFrame';
import { INGREDTENTS_PAGE_SIZE } from '@/app/(modules)/dashboard/(pages)/ingredients/constants';

const IngredientsLoading = () => {
  const rows = Array.from({ length: INGREDTENTS_PAGE_SIZE });

  return (
    <TableFrame
      title="Ingredients"
      tableHead={<IngredientTableHead />}
      addModal={<div className="h-9" />}
    >
      <TableBody>
        {rows.map((_, index) => (
          <TableRow
            key={index}
            className="block border-b text-left last:border-b-0 lg:table-row lg:border-none"
          >
            <TableCell className="block border border-green-500 px-4 py-2 text-dark lg:table-cell lg:py-4 lg:text-right">
              <Skeleton className="h-6 w-4/5" />
            </TableCell>
            <IngredientsLoadingCell />
            <IngredientsLoadingCell />
            <IngredientsLoadingCell />
            <IngredientsLoadingCell />
            <IngredientsLoadingCell />

            <TableCell className="block border border-green-500 px-4 py-2 text-dark lg:table-cell lg:py-4 lg:text-right">
              <div className="flex lg:justify-end">
                <Skeleton className="h-6 w-10" />
              </div>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableFrame>
  );
};

export default IngredientsLoading;
