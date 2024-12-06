import { cn } from '@/app/lib';
import { TableCell } from '@/app/components/ui/table';

interface IProps {
  className?: string;
  rowName: string;
  rowValue: string | React.ReactNode;
}
const IngredientTableCell = ({ className, rowValue, rowName }: IProps) => {
  return (
    <TableCell
      className={cn(
        'block px-4 py-2 text-dark lg:table-cell lg:text-right',
        className,
      )}
    >
      <span className="font-semibold text-gray-700 lg:hidden">{rowName}: </span>
      {rowValue}
    </TableCell>
  );
};

export default IngredientTableCell;
