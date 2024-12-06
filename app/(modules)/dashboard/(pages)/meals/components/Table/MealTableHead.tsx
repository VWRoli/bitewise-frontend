import { MEAL_TABLE_HEAD_DATA } from '@/app/(modules)/dashboard/(pages)/meals/constants';
import { TableHeader, TableHead, TableRow } from '@/app/components/ui/table';

const MealTableHead = () => {
  return (
    <TableHeader className="hidden uppercase lg:table-header-group">
      <TableRow>
        {MEAL_TABLE_HEAD_DATA.map((headCell) => (
          <TableHead key={headCell.id} align={headCell.align}>
            {headCell.label}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
};

export default MealTableHead;
