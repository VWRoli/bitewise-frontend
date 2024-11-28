import { TableBody, TableCell, TableRow } from '@/app/components/ui/table';
import { Skeleton } from '@/app/components/ui/skeleton';
import MealsLoadingCell from '@/app/(modules)/dashboard/(pages)/meals/components/Table/MealsLoadingCell';
import TableFrame from '@/app/components/Table/TableFrame';
import MealTableHead from '@/app/(modules)/dashboard/(pages)/meals/components/Table/MealTableHead';
import { PAGE_SIZE } from '@/app/(modules)/dashboard/constants';

const MealsLoading = () => {
  const rows = Array.from({ length: PAGE_SIZE });

  return (
    <TableFrame
      title="Meals"
      tableHead={<MealTableHead />}
      addModal={<div className="h-9" />}
    >
      <TableBody>
        {rows.map((_, index) => (
          <TableRow
            key={index}
            className="border-b last:border-b-0 lg:table-row block lg:border-none text-left"
          >
            <TableCell className="lg:table-cell block text-dark lg:py-4 py-2 px-4 lg:text-right">
              <Skeleton className="w-[80%] h-6" />
              <Skeleton className="w-[80%] h-6" />
              <Skeleton className="w-[80%] h-6" />
            </TableCell>
            <MealsLoadingCell />
            <MealsLoadingCell />
            <MealsLoadingCell />
            <MealsLoadingCell />
            <MealsLoadingCell />

            <TableCell className="lg:table-cell block text-dark lg:py-4 py-2 px-4 lg:text-right">
              <div className="flex lg:justify-end">
                <Skeleton className="w-10 h-6" />
                <Skeleton className="w-10 h-6" />
              </div>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableFrame>
  );
};

export default MealsLoading;
