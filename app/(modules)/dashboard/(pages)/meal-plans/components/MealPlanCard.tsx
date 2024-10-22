import { IMealPlan } from '@/app/(modules)/dashboard/(pages)/meal-plans/interfaces';
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid2,
  Typography,
} from '@mui/material';
import React from 'react';

interface IProps {
  mealPlan: IMealPlan;
}
const MealPlanCard = ({ mealPlan }: IProps) => {
  return (
    <Card sx={{ boxShadow: 3, borderRadius: 3 }}>
      <Box sx={{ padding: 1 }}>
        <Grid2 container spacing={1}>
          {mealPlan.meals.map((meal) => (
            <Grid2 key={meal.id}>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: 'bold', mb: 1 }}
                  >
                    {meal.name}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    sx={{ mb: 1, fontWeight: 'medium' }}
                  >
                    Ingredients:
                  </Typography>

                  {meal.mealIngredients.map((mealIngredient) => (
                    <Box key={mealIngredient.id} sx={{ mb: 1 }}>
                      <Typography variant="body2" color="textSecondary">
                        {mealIngredient.ingredientName} -{' '}
                        {mealIngredient.quantity} {mealIngredient.unit}
                      </Typography>
                    </Box>
                  ))}
                </div>

                <Divider sx={{ my: 2 }} />
              </CardContent>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Card>
  );
};

export default MealPlanCard;
