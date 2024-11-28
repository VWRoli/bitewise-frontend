import { IBodyFatResults } from '@/app/(modules)/dashboard/(pages)/calculators/interfaces';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableHeader,
} from '@/app/components/ui/table';
import { Card } from '@/app/components/ui/card';
import BodyFatTooltipTable from '@/app/(modules)/dashboard/(pages)/calculators/components/BodyFatCalculator/BodyFatTooltipTable';

interface IProps {
  results: IBodyFatResults | null;
}
const BodyFatResults = (props: IProps) => {
  const {
    bodyFatPercentage,
    bodyFatCategory,
    bodyFatMass,
    leanBodyMass,
    bmiBodyFatResult,
  } = props.results || {};

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
            <TableCell>Body Fat Percentage</TableCell>
            <TableCell>{bodyFatPercentage} %</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="flex gap-1">
              Body Fat Category
              <BodyFatTooltipTable />
            </TableCell>
            <TableCell>{bodyFatCategory}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Body Fat Mass</TableCell>
            <TableCell>{bodyFatMass} kg</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Lean Body Mass</TableCell>
            <TableCell>{leanBodyMass} kg</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>BMI Body Fat Result</TableCell>
            <TableCell>{bmiBodyFatResult} %</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
};

export default BodyFatResults;
