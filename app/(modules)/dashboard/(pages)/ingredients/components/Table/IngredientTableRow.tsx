import IngredientActions from '@/app/(modules)/dashboard/(pages)/ingredients/components/IngredientActions';
import IngredientTableCell from '@/app/(modules)/dashboard/(pages)/ingredients/components/Table/IngredientTableCell';
import { IIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';
import Unit from '@/app/(modules)/dashboard/components/Unit';
import { TableRow } from '@/app/components/ui/table';

interface IProps {
  row: IIngredient;
}

const IngredientTableRow = async ({ row }: IProps) => {
  return (
    <TableRow
      key={row.id}
      className="block border-b text-left last:border-b-0 lg:table-row lg:border-none"
    >
      <IngredientTableCell
        rowName="Name"
        className="lg:text-left lg:font-semibold"
        rowValue={row.name}
      />
      <IngredientTableCell
        rowName="Calories"
        rowValue={`${row.calories} kcal`}
      />

      <IngredientTableCell rowName="Protein" rowValue={`${row.protein} g`} />

      <IngredientTableCell
        rowName="Fat"
        rowValue={`${row.totalFat} (${row.saturatedFat}) g`}
      />

      <IngredientTableCell
        rowName="Carbs"
        rowValue={`${row.totalCarbohydrates} (${row.sugar}) g`}
      />

      <IngredientTableCell rowName="Fiber" rowValue={`${row.dietaryFiber} g`} />
      <IngredientTableCell
        rowName="Unit"
        className="flex items-center gap-1"
        rowValue={
          <div className="block justify-end lg:flex">
            <Unit unit={row.unit} />
          </div>
        }
      />
      <IngredientTableCell
        rowName="Actions"
        className="flex justify-end text-right"
        rowValue={<IngredientActions ingredient={row} />}
      />
    </TableRow>
  );
};

export default IngredientTableRow;
