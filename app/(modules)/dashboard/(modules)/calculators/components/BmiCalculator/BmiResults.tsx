import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table';

import BmiTooltipTable from '@/app/(modules)/dashboard/(modules)/calculators/components/BmiCalculator/BmiTooltipTable';
import { Card } from '@/app/components/ui/card';
import { IBmiResults } from '@/app/(modules)/dashboard/(modules)/calculators/interfaces';

interface IProps {
  results: IBmiResults | null;
}
const BmiResults = (props: IProps) => {
  const { bmi, bmiCategory } = props.results || {};

  return (
    <Card className="mx-auto max-w-[90%] rounded-none">
      <Table>
        <TableHeader className="bg-dark font-bold text-light">
          <TableRow>
            <TableHead className="font-bold text-light">Metric</TableHead>
            <TableHead className="font-bold text-light">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>BMI</TableCell>
            <TableCell>{bmi}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="flex gap-1">
              BMI category <BmiTooltipTable />
            </TableCell>
            <TableCell>{bmiCategory}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
};

export default BmiResults;
