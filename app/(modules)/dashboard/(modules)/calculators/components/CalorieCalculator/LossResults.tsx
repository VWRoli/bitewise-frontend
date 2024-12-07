import { Table, TableBody } from '@/app/components/ui/table';

import CalorieTableRow from '@/app/(modules)/dashboard/(modules)/calculators/components/CalorieCalculator/CalorieTableRow';
import { ICalorieResultsProps } from '@/app/(modules)/dashboard/(modules)/calculators/components/CalorieCalculator/CalorieResults';

const LossResults = (props: ICalorieResultsProps) => {
  const { mildWeightLoss, weightLoss, extremeWeightLoss, maintainWeight } =
    props.results || {};

  return (
    <Table>
      <TableBody>
        <CalorieTableRow
          label="Maintain weight"
          value={maintainWeight}
          percentage={100}
        />
        <CalorieTableRow
          label="Mild weight loss"
          subLabel="0.25 kg/week"
          value={mildWeightLoss}
          percentage={90}
        />
        <CalorieTableRow
          label="Weight loss"
          subLabel="0.5 kg/week"
          value={weightLoss}
          percentage={79}
        />
        <CalorieTableRow
          label="Extreme weight loss"
          subLabel="1 kg/week"
          value={extremeWeightLoss}
          percentage={59}
        />
      </TableBody>
    </Table>
  );
};

export default LossResults;
