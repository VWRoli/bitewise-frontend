import { Skeleton } from '@/components/ui/skeleton';
import { TableCell } from '@/components/ui/table';

const MealsLoadingCell = () => {
  return (
    <TableCell className="lg:table-cell block text-dark lg:py-4 py-2 px-4 lg:text-right">
      <div className="flex flex-col lg:items-end gap-1">
        <Skeleton className="w-[60%] h-4" />
        <Skeleton className="w-[60%] h-4" />
        <Skeleton className="w-[60%] h-4" />
      </div>
    </TableCell>
  );
};

export default MealsLoadingCell;
