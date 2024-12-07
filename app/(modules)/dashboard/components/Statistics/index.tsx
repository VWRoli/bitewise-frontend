import {
  CookingPot,
  HandPlatter,
  NotebookPen,
  ShoppingBasket,
} from 'lucide-react';

import StatisticsCard from '@/app/(modules)/dashboard/components/Statistics/StatisticsCard';
import { fetchIngredients } from '@/app/(modules)/dashboard/(modules)/ingredients/actions';
import { fetchMealPlans } from '@/app/(modules)/dashboard/(modules)/meal-plans/actions';
import { fetchMeals } from '@/app/(modules)/dashboard/(modules)/meals/actions';

const Statistics = async () => {
  const [ingredientsResult, mealsResult, mealPlansResult] = await Promise.all([
    fetchIngredients({}),
    fetchMeals({}),
    fetchMealPlans({}),
  ]);

  const ingredients = ingredientsResult.data;
  const meals = mealsResult.data;
  const mealPlans = mealPlansResult.data;

  return (
    <section className="flex flex-col gap-8 lg:flex-row">
      <StatisticsCard
        title="Total Ingredients"
        value={ingredients?.data.length || 0}
        icon={<ShoppingBasket />}
      />
      <StatisticsCard
        title="Total Meals"
        value={meals?.data.length || 0}
        icon={<HandPlatter />}
      />
      <StatisticsCard
        title="Total Meal Plans"
        value={mealPlans?.data.length || 0}
        icon={<NotebookPen />}
      />
      <StatisticsCard title="Total Recipes" value={100} icon={<CookingPot />} />
    </section>
  );
};

export default Statistics;
