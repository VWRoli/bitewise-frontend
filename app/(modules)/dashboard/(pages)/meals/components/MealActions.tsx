'use client';

import { IconButton, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IMeal } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import DeleteDialog from '@/app/components/DeleteDialog';
import EditMealDialog from '@/app/(modules)/dashboard/(pages)/meals/components/EditMealDialog';
import { deleteMeal } from '@/app/(modules)/dashboard/(pages)/meals/actions';
import { IIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';

interface IProps {
  meal: IMeal;
  ingredients: IIngredient[];
}
const MealActions = ({ meal, ingredients }: IProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDeleteDialog = () => {
    setIsDeleteOpen(true);
    handleClose();
  };

  const handleOnDelete = async () => {
    await deleteMeal(meal.id);
    handleClose();
  };

  return (
    <>
      <IconButton aria-label="actions" onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        aria-labelledby="meal-actions-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <EditMealDialog
          meal={meal}
          ingredients={ingredients}
          onMenuClose={handleClose}
        />
        <MenuItem onClick={handleDeleteDialog}>Delete</MenuItem>
      </Menu>
      <DeleteDialog
        open={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleOnDelete}
        title="Delete Meal"
        subtitle={`Are you sure you want to delete ${meal.name}?`}
      />
    </>
  );
};

export default MealActions;
