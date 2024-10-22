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
  return (
    <TableRow key={row.id}>
      <MealTableCell
        mealIngredients={row.mealIngredients}
        column="ingredientName"
        className="font-bold lg:!text-left"
      />

      <MealTableCell
        mealIngredients={row.mealIngredients}
        column="calories"
        unit="kcal"
      />
      <MealTableCell
        mealIngredients={row.mealIngredients}
        column="protein"
        unit="g"
      />
      <MealTableCell
        mealIngredients={row.mealIngredients}
        column="totalFat"
        subColumn="saturatedFat"
        unit="g"
      />
      <MealTableCell
        mealIngredients={row.mealIngredients}
        column="totalCarbohydrates"
        subColumn="sugar"
        unit="g"
      />
      <MealTableCell
        mealIngredients={row.mealIngredients}
        column="dietaryFiber"
        unit="g"
      />

      <TableCell className="lg:table-cell block lg:text-right">
        {row.mealIngredients.map((mealIngredient) => (
          <div key={mealIngredient.id} className="lg:flex justify-end block">
            <Unit unit={mealIngredient.unit} />
          </div>
        ))}
      </TableCell>
      <TableCell></TableCell>
    </TableRow>
  );
};

export default MealTableRow;
