import { IMeal } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import { TableCell, TableRow } from '@mui/material';
import React from 'react';
import { IMealPlan } from '@/app/(modules)/dashboard/(pages)/meal-plans/interfaces';
import MealPlanTableCell from '@/app/(modules)/dashboard/(pages)/meal-plans/components/Table/MealPlanTableCell';
import MealPlanActions from '@/app/(modules)/dashboard/(pages)/meal-plans/components/MealPlanAction';

interface IProps {
  row: IMealPlan;
}

const MealPlanTableRow = ({ row }: IProps) => {
  const { meals } = row;
  return (
    <TableRow key={row.id}>
      <TableCell className="lg:table-cell flex items-center gap-2 text-dark lg:py-4 py-2 px-2 mx-2">
        <div className="flex flex-col gap-2">
          {meals.map((meal: IMeal, index) => (
            <div key={index} className="px-1 lg:px-2">
              {meal.name}
            </div>
          ))}
          <div className="h-7"></div>
        </div>
      </TableCell>
      <MealPlanTableCell meals={meals} column="calories" unit="kcal" />
      <MealPlanTableCell meals={meals} column="protein" unit="g" />
      <MealPlanTableCell
        meals={meals}
        column="totalFat"
        subColumn="saturatedFat"
        unit="g"
      />
      <MealPlanTableCell
        meals={meals}
        column="totalCarbohydrates"
        subColumn="sugar"
        unit="g"
      />
      <MealPlanTableCell meals={meals} column="dietaryFiber" unit="g" />

      <TableCell className="lg:table-cell flex items-center gap-2 text-dark lg:py-4 py-2 px-2 mx-2 lg:text-right">
        <MealPlanActions mealPlan={row} />
      </TableCell>
    </TableRow>
  );
};

export default MealPlanTableRow;
