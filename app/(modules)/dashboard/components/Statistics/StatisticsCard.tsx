import { Card, Divider, Paper, Typography } from '@mui/material';
import React from 'react';

interface IProps {
  title: string;
  icon: React.ReactNode;
  value: number;
  iconBgColor: string;
}
const StatisticsCard = ({ title, value, icon, iconBgColor }: IProps) => {
  return (
    <div className="shadow-statistics-card bg-white rounded-xl w-full">
      <article className="pt-2 px-4">
        <div
          className={`shadow-md w-16 h-16 rounded-xl flex items-center justify-center -mt-6 ${iconBgColor}`}
        >
          {icon}
        </div>
        <div className="text-dark text-right">
          <Typography variant="body2" className="font-light">
            {title}
          </Typography>
          <Typography variant="h5" className="font-bold">
            {value}
          </Typography>
        </div>
      </article>
      <Divider />
      <article className="font-light text-dark p-3">
        <span className="text-green-500 font-bold">+55%</span> from last month
      </article>
    </div>
  );
};

export default StatisticsCard;
