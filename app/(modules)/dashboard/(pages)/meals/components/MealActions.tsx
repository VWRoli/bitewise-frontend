import { IconButton, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IMeal } from '@/app/(modules)/dashboard/(pages)/meals/interfaces';
import DeleteDialog from '@/app/common/components/DeleteDialog';
import { useMealsContext } from '@/app/(modules)/dashboard/(pages)/meals/context';
import { handleDeleteMeal } from '@/app/(modules)/dashboard/(pages)/meals/actions';
import EditMealDialog from '@/app/(modules)/dashboard/(pages)/meals/components/EditMealDialog';

interface IProps {
  meal: IMeal;
}
const MealActions = ({ meal }: IProps) => {
  console.log('meal', meal);
  const { dispatch } = useMealsContext();
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
    handleDeleteMeal(dispatch, meal.id);
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
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDeleteDialog}>Delete</MenuItem>
      </Menu>
      <DeleteDialog
        open={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleOnDelete}
        title="Delete Meal"
        subtitle={`Are you sure you want to delete ${meal.name}?`}
      />
      <EditMealDialog
        isOpen={isEditOpen}
        setIsOpen={setIsEditOpen}
        meal={meal}
      />
    </>
  );
};

export default MealActions;
