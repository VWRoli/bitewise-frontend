import { IMeal } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import Unit from '@/app/(modules)/dashboard/components/Unit';
import MealActions from '@/app/(modules)/dashboard/(pages)/meals/components/MealActions';
import MealTableCell from '@/app/(modules)/dashboard/(pages)/meals/components/Table/MealTableCell';

interface IProps {
  row: IMeal;
}

const MealTableRow = ({ row }: IProps) => {
  const { mealIngredients } = row;

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
      <TableCell className="lg:table-cell flex gap-2 items-center lg:text-right">
        {mealIngredients.map((mealIngredient) => (
          <div
            key={mealIngredient.id}
            className="lg:flex flex-1 lg:justify-end block"
          >
            <Unit unit={mealIngredient.unit} />
          </div>
        ))}
        <div className="h-7"></div>
      </TableCell>

      <TableCell className="lg:table-cell block text-right">
        <MealActions meal={row} />
      </TableCell>
    </TableRow>
  );
};

export default MealTableRow;
