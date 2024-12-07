import { Table, TableBody } from '@/app/components/ui/table';

import CalorieTableRow from '@/app/(modules)/dashboard/(modules)/calculators/components/CalorieCalculator/CalorieTableRow';
import { ICalorieResultsProps } from '@/app/(modules)/dashboard/(modules)/calculators/components/CalorieCalculator/CalorieResults';

const GainResults = (props: ICalorieResultsProps) => {
  const { weightGain, mildWeightGain, extremeWeightGain } = props.results || {};
  return (
    <Table>
      <TableBody>
        <CalorieTableRow
          label="Mild weight gain"
          subLabel="0.25 kg/week"
          value={mildWeightGain}
          percentage={110}
        />
        <CalorieTableRow
          label="Weight gain"
          subLabel="0.5 kg/week"
          value={weightGain}
          percentage={121}
        />
        <CalorieTableRow
          label="Fast Weight gain"
          subLabel="1 kg/week"
          value={extremeWeightGain}
          percentage={141}
        />
      </TableBody>
    </Table>
  );
};

export default GainResults;
