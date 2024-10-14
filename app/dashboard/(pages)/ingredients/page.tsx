'use client';
import useAuthRedirect from '@/app/(auth)/hooks/useAuthRedirect';
import LoadingPage from '@/app/common/components/LoadingPage';
import AddIngredientDialog from '@/app/dashboard/(pages)/ingredients/components/AddIngredientDialog';
//import IngredientCard from '@/app/dashboard/(pages)/ingredients/components/IngredientCard';
import { Button, Typography } from '@mui/material';
import { useState } from 'react';

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const status = useAuthRedirect();

  if (status === 'loading') {
    return <LoadingPage />;
  }
  return (
    <div className="p-2 md:p-4 xl:p-8 flex flex-col gap-8">
      <section className="flex justify-between">
        <Typography variant="h4">Ingredients</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsOpen(true)}
        >
          Add New
        </Button>
      </section>
      <section className="flex flex-col gap-2">
        <Typography variant="h6">No ingredients</Typography>
        {/* <IngredientCard ingredient={ingredient} /> */}
      </section>
      <AddIngredientDialog open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
