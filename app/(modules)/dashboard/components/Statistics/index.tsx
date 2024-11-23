import StatisticsCard from '@/app/(modules)/dashboard/components/Statistics/StatisticsCard';
import {
  ShoppingBasket,
  NotebookPen,
  CookingPot,
  HandPlatter,
} from 'lucide-react';
import { fetchIngredients } from '@/app/(modules)/dashboard/(pages)/ingredients/actions';
import { fetchMeals } from '@/app/(modules)/dashboard/(pages)/meals/actions';
import { fetchMealPlans } from '@/app/(modules)/dashboard/(pages)/meal-plans/actions';

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
    <section className="flex flex-col lg:flex-row gap-8">
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
