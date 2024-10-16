'use client';
import IngredientCard from '@/app/(modules)/dashboard/(pages)/ingredients/components/IngredientCard';
import IngredientsLoading from '@/app/(modules)/dashboard/(pages)/ingredients/components/IngredientsLoading';
import { useIngredientsContext } from '@/app/(modules)/dashboard/(pages)/ingredients/context';
import { Typography } from '@mui/material';
import React from 'react';

const IngredientsContent = () => {
  const { state } = useIngredientsContext();

  if (state.isLoading) {
    return <IngredientsLoading />;
  }
  return (
    <section className="flex flex-col gap-4">
      {state.ingredients.length === 0 && !state.isLoading && (
        <Typography variant="h6">No ingredients</Typography>
      )}
      {state.ingredients.map((ingredient) => (
        <IngredientCard key={ingredient.id} ingredient={ingredient} />
      ))}
    </section>
  );
};

export default IngredientsContent;
