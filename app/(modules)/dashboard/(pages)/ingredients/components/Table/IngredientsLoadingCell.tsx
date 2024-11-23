import { TableCell } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';

const IngredientsLoadingCell = () => {
  return (
    <TableCell className="lg:table-cell block text-dark lg:py-4 py-2 px-4 lg:text-right">
      <Skeleton className="w-[60%] h-6" />
    </TableCell>
  );
};

export default IngredientsLoadingCell;
