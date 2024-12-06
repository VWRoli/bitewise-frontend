import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/app/components/ui/card';

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
        <h3 className="text-2xl font-bold">{value}</h3>
      </CardContent>
    </Card>
  );
};

export default StatisticsCard;
