import { IconButton, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteDialog from '@/app/common/components/DeleteDialog';
import { IMealPlan } from '@/app/(modules)/dashboard/(pages)/meal-plans/interfaces';
import { handleDeleteMealPlan } from '@/app/(modules)/dashboard/(pages)/meal-plans/actions';
import EditMealPlanDialog from '@/app/(modules)/dashboard/(pages)/meal-plans/components/EditMealPlanDialog';
import { useMealPlansContext } from '@/app/(modules)/dashboard/(pages)/meal-plans/context';

interface IProps {
  mealPlan: IMealPlan;
}
const MealPlanActions = ({ mealPlan }: IProps) => {
  const { dispatch } = useMealPlansContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
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
    handleDeleteMealPlan(dispatch, mealPlan.id);
    handleClose();
  };

  const handleEdit = () => {
    setIsEditOpen(true);
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
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDeleteDialog}>Delete</MenuItem>
      </Menu>
      <DeleteDialog
        open={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleOnDelete}
        title="Delete Meal Plan"
        subtitle={`Are you sure you want to delete ${mealPlan.name} meal plan?`}
      />
      <EditMealPlanDialog
        isOpen={isEditOpen}
        setIsOpen={setIsEditOpen}
        mealPlan={mealPlan}
      />
    </>
  );
};

export default MealPlanActions;
