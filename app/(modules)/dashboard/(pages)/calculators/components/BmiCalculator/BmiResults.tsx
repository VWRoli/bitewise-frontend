import { IBmiResults } from '@/app/(modules)/dashboard/(pages)/calculators/interfaces';
import BmiTooltipTable from '@/app/(modules)/dashboard/(pages)/calculators/components/BmiCalculator/BmiTooltipTable';
import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableHeader,
} from '@/components/ui/table';

interface IProps {
  results: IBmiResults | null;
}
const BmiResults = (props: IProps) => {
  const { bmi, bmiCategory } = props.results || {};

  return (
    <Card className="max-w-[90%] mx-auto rounded-none">
      <Table>
        <TableHeader className="bg-dark text-light font-bold">
          <TableRow>
            <TableHead className="text-light font-bold">Metric</TableHead>
            <TableHead className="text-light font-bold">Value</TableHead>
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
