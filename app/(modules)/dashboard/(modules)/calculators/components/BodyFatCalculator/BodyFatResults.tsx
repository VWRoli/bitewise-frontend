import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table';

import BodyFatTooltipTable from '@/app/(modules)/dashboard/(modules)/calculators/components/BodyFatCalculator/BodyFatTooltipTable';
import { Card } from '@/app/components/ui/card';
import { IBodyFatResults } from '@/app/(modules)/dashboard/(modules)/calculators/interfaces';

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
