import { MEAL_PLAN_TABLE_HEAD_DATA } from '@/app/(modules)/dashboard/(pages)/meal-plans/constants';
import { TableHeader, TableHead, TableRow } from '@/app/components/ui/table';

const MealPlanTableHead = () => {
  return (
    <TableHeader className="hidden uppercase lg:table-header-group">
      <TableRow>
        {MEAL_PLAN_TABLE_HEAD_DATA.map((headCell) => (
          <TableHead key={headCell.id} align={headCell.align}>
            {headCell.label}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
};

export default MealPlanTableHead;
