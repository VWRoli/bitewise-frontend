import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

interface IProps {
  title: string;
  icon: React.ReactNode;
  value: number;
}
const StatisticsCard = ({ title, value, icon }: IProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between font-medium">
          {title} {icon}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="font-bold text-2xl">{value}</h3>
      </CardContent>
    </Card>
  );
};

export default StatisticsCard;
