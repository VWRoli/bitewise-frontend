import { TableCell } from '@/app/components/ui/table';
import { Skeleton } from '@/app/components/ui/skeleton';

const IngredientsLoadingCell = () => {
  return (
    <TableCell className="block border border-green-500 px-4 py-2 text-dark lg:table-cell lg:py-4 lg:text-right">
      <Skeleton className="flex h-6 w-[60%] justify-end self-end" />
    </TableCell>
  );
};

export default IngredientsLoadingCell;
