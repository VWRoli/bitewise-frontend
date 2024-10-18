import { IIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';
import { IconButton, TableCell, TableRow } from '@mui/material';
import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Unit from '@/app/(modules)/dashboard/components/Unit';

interface IProps {
  row: IIngredient;
}

const IngredientTableRow = ({ row }: IProps) => {
  return (
    <TableRow
      key={row.id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row" className="text-dark font-semibold">
        {row.name}
      </TableCell>
      <TableCell align="right" className="text-dark">
        {row.calories}&nbsp;kcal
      </TableCell>
      <TableCell align="right" className="text-dark">
        {row.protein}&nbsp;g
      </TableCell>
      <TableCell align="right" className="text-dark">
        {row.totalFat} ({row.saturatedFat})&nbsp;g
      </TableCell>
      <TableCell align="right" className="text-dark">
        {row.totalCarbohydrates} ({row.sugar})&nbsp;g
      </TableCell>
      <TableCell align="right" className="text-dark">
        {row.dietaryFiber}&nbsp;g
      </TableCell>
      <TableCell align="right" className="text-dark">
        <div className="flex justify-end">
          <Unit unit={row.unit} />
        </div>
      </TableCell>
      <TableCell align="right" className="text-dark">
        <IconButton aria-label="actions">
          <MoreVertIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default IngredientTableRow;
