import { INGREDIENT_TABLE_HEAD_DATA } from '@/app/(modules)/dashboard/(pages)/ingredients/constants';
import { TableHeader, TableHead, TableRow } from '@/components/ui/table';

const IngredientTableHead = () => {
  return (
    <TableHeader className="uppercase hidden lg:table-header-group">
      <TableRow>
        {INGREDIENT_TABLE_HEAD_DATA.map((headCell) => (
          <TableHead key={headCell.id} align={headCell.align}>
            {headCell.label}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
};

export default IngredientTableHead;
