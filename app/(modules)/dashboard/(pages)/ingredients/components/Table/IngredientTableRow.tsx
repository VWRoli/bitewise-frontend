import { IIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';
import { TableRow } from '@mui/material';
import React from 'react';
import Unit from '@/app/(modules)/dashboard/components/Unit';
import IngredientActions from '@/app/(modules)/dashboard/(pages)/ingredients/components/IngredientActions';
import IngredientTableCell from '@/app/(modules)/dashboard/(pages)/ingredients/components/Table/IngredientTableCell';
import { fetchMe } from '@/app/(modules)/dashboard/(pages)/user/actions';

interface IProps {
  row: IIngredient;
}

const IngredientTableRow = async ({ row }: IProps) => {
  const user = await fetchMe();

  return (
    <TableRow
      key={row.id}
      className="border-b last:border-b-0 lg:table-row block lg:border-none text-left"
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
          <div className="lg:flex justify-end block">
            <Unit unit={row.unit} />
          </div>
        }
      />

      <IngredientTableCell
        rowName="Actions"
        className="text-right"
        rowValue={
          <IngredientActions
            ingredient={row}
            userId={user.data?.id as number}
          />
        }
      />
    </TableRow>
  );
};

export default IngredientTableRow;
