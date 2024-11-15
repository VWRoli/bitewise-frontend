'use client';

import { IconButton, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/interfaces';
import DeleteDialog from '@/app/common/components/DeleteDialog';
import EditIngredientDialog from '@/app/(modules)/dashboard/(pages)/ingredients/components/EditIngredientDialog';
import { deleteIngredient } from '@/app/(modules)/dashboard/(pages)/ingredients/actions';

interface IProps {
  ingredient: IIngredient;
}
const IngredientActions = ({ ingredient }: IProps) => {
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
    handleClose();
    deleteIngredient(ingredient.id);
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
        aria-labelledby="ingredient-actions-menu"
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
        title="Delete Ingredient"
        subtitle={`Are you sure you want to delete ${ingredient.name}?`}
      />
      <EditIngredientDialog
        isOpen={isEditOpen}
        setIsOpen={setIsEditOpen}
        ingredient={ingredient}
      />
    </>
  );
};

export default IngredientActions;
