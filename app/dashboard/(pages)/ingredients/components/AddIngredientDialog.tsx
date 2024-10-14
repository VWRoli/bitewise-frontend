import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
} from '@mui/material';
import { ICreateIngredient } from '@/app/dashboard/(pages)/ingredients/interfaces';
import { EUnit } from '@/app/dashboard/(pages)/ingredients/enums';
import { useSession } from 'next-auth/react';

interface AddIngredientDialogProps {
  open: boolean;
  onClose: () => void;
}

const AddIngredientDialog: React.FC<AddIngredientDialogProps> = ({
  open,
  onClose,
}) => {
  const { data: session } = useSession();

  const [ingredient, setIngredient] = useState<ICreateIngredient>({
    name: '',
    protein: 0,
    totalFat: 0,
    saturatedFat: 0,
    totalCarbohydrates: 0,
    sugar: 0,
    dietaryFiber: 0,
    calories: 0,
    unit: EUnit.HUNDRED_GRAMS,
    price: 0,
    userId: +(session?.user?.id || 0) as number,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIngredient({
      ...ingredient,
      [name]: name === 'unit' || name === 'name' ? value : parseFloat(value),
    });
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (parseFloat(e.target.value) === 0) {
      setIngredient({
        ...ingredient,
        [e.target.name]: '',
      });
    }
  };

  const handleSubmit = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Ingredient</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Name"
          name="name"
          fullWidth
          value={ingredient.name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Protein"
          name="protein"
          type="number"
          fullWidth
          value={ingredient.protein}
          onChange={handleChange}
          onFocus={handleFocus}
        />
        <TextField
          margin="dense"
          label="Total Fat"
          name="totalFat"
          type="number"
          fullWidth
          value={ingredient.totalFat}
          onChange={handleChange}
          onFocus={handleFocus}
        />
        <TextField
          margin="dense"
          label="Saturated Fat"
          name="saturatedFat"
          type="number"
          fullWidth
          value={ingredient.saturatedFat}
          onChange={handleChange}
          onFocus={handleFocus}
        />
        <TextField
          margin="dense"
          label="Total Carbohydrates"
          name="totalCarbohydrates"
          type="number"
          fullWidth
          value={ingredient.totalCarbohydrates}
          onChange={handleChange}
          onFocus={handleFocus}
        />
        <TextField
          margin="dense"
          label="Sugar"
          name="sugar"
          type="number"
          fullWidth
          value={ingredient.sugar}
          onChange={handleChange}
          onFocus={handleFocus}
        />
        <TextField
          margin="dense"
          label="Dietary Fiber"
          name="dietaryFiber"
          type="number"
          fullWidth
          value={ingredient.dietaryFiber}
          onChange={handleChange}
          onFocus={handleFocus}
        />
        <TextField
          margin="dense"
          label="Calories"
          name="calories"
          type="number"
          fullWidth
          value={ingredient.calories}
          onChange={handleChange}
          onFocus={handleFocus}
        />
        <TextField
          margin="dense"
          label="Unit"
          name="unit"
          select
          fullWidth
          value={ingredient.unit}
          onChange={handleChange}
        >
          {Object.values(EUnit).map((unit) => (
            <MenuItem key={unit} value={unit}>
              {unit}
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddIngredientDialog;
