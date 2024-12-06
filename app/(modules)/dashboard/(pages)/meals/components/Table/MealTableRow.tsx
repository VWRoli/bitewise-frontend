import { fetchIngredients } from '@/app/(modules)/dashboard/(pages)/ingredients/actions';
import MealActions from '@/app/(modules)/dashboard/(pages)/meals/components/MealActions';
import MealTableCell from '@/app/(modules)/dashboard/(pages)/meals/components/Table/MealTableCell';
import { IMeal } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import Unit from '@/app/(modules)/dashboard/components/Unit';
import { TableCell, TableRow } from '@/app/components/ui/table';

interface IProps {
  row: IMeal;
}

const MealTableRow = async ({ row }: IProps) => {
  const { mealIngredients } = row;

  const ingredientsResult = await fetchIngredients({});

  return (
    <TableRow key={row.id}>
      <MealTableCell
        mealIngredients={mealIngredients}
        column="ingredientName"
        className="lg:text-left"
        mealName={row.name}
      />

      <MealTableCell
        mealIngredients={mealIngredients}
        column="calories"
        unit="kcal"
      />
      <MealTableCell
        mealIngredients={mealIngredients}
        column="protein"
        unit="g"
      />
      <MealTableCell
        mealIngredients={mealIngredients}
        column="totalFat"
        subColumn="saturatedFat"
        unit="g"
      />
      <MealTableCell
        mealIngredients={mealIngredients}
        column="totalCarbohydrates"
        subColumn="sugar"
        unit="g"
      />
      <MealTableCell
        mealIngredients={mealIngredients}
        column="dietaryFiber"
        unit="g"
      />
      <MealTableCell mealIngredients={mealIngredients} column="quantity" />
      <TableCell className="flex items-center gap-2 lg:table-cell lg:text-right">
        {mealIngredients.map((mealIngredient) => (
          <div
            key={mealIngredient.id}
            className="block flex-1 lg:flex lg:justify-end"
          >
            <Unit unit={mealIngredient.unit} />
          </div>
        ))}
        <div className="h-7"></div>
      </TableCell>

      <TableCell className="block text-right lg:table-cell">
        <MealActions
          meal={row}
          ingredients={ingredientsResult.data?.data || []}
        />
      </TableCell>
    </TableRow>
  );
};

export default MealTableRow;
