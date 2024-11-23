'use client';

import { IconButton, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteDialog from '@/app/components/DeleteDialog';
import { IMealPlan } from '@/app/(modules)/dashboard/(pages)/meal-plans/interfaces';
import EditMealPlanDialog from '@/app/(modules)/dashboard/(pages)/meal-plans/components/EditMealPlanDialog';
import { deleteMealPlan } from '@/app/(modules)/dashboard/(pages)/meal-plans/actions';
import { IMeal } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';

interface IProps {
  mealPlan: IMealPlan;
  allMeals: IMeal[];
}
const MealPlanActions = ({ mealPlan, allMeals }: IProps) => {
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
    await deleteMealPlan(mealPlan.id);
    handleClose();
  };

  return (
    <>
      <IconButton aria-label="actions" onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        aria-labelledby="meal-plan-actions-menu"
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
        {/*TODO: fix edit <EditMealPlanDialog
          allMeals={allMeals}
          mealPlan={mealPlan}
          onMenuClose={handleClose}
        /> */}
        <MenuItem onClick={handleDeleteDialog}>Delete</MenuItem>
      </Menu>
      <DeleteDialog
        open={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleOnDelete}
        title="Delete Meal Plan"
        subtitle={`Are you sure you want to delete ${mealPlan.name} meal plan?`}
      />
    </>
  );
};

export default MealPlanActions;
