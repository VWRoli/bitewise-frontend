'use client';
import StatisticsCard from '@/app/(modules)/dashboard/components/Statistics/StatisticsCard';
import React from 'react';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import AvTimerOutlinedIcon from '@mui/icons-material/AvTimerOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Statistics = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-8">
      {/* <StatisticsCard
        title="Ingredients"
        value={ingredientsState.ingredients.length}
        iconBgColor="bg-dark-gradient"
        icon={<FastfoodOutlinedIcon className="text-white" />}
      /> */}
      {/* <StatisticsCard
        title="Meals"
        value={mealsState.meals.length}
        iconBgColor="bg-primary-gradient"
        icon={<RestaurantOutlinedIcon className="text-white" />}
      /> */}
      <StatisticsCard
        title="Calories Today"
        value={100}
        iconBgColor="bg-green-gradient"
        icon={<AvTimerOutlinedIcon className="text-white" />}
      />
      <StatisticsCard
        title="Spent Today"
        value={100}
        iconBgColor="bg-pink-gradient"
        icon={<MonetizationOnOutlinedIcon className="text-white" />}
      />
    </section>
  );
};

export default Statistics;
