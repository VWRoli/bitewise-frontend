import { TableCell, TableRow } from '@/app/components/ui/table';

interface IProps {
  label: string;
  subLabel?: string;
  value?: number;
  percentage: number;
}

const CalorieTableRow = ({ label, subLabel, value, percentage }: IProps) => {
  return (
    <TableRow>
      <TableCell>
        <div className="flex flex-col">
          <div>{label}</div>
          {subLabel && <small className="opacity-50">{subLabel}</small>}
        </div>
      </TableCell>
      <TableCell className="text-right">
        <div className="flex flex-col">
          <span>
            <b>{value}</b> <small>{percentage}%</small>
          </span>
          <small className="opacity-50">calories/day</small>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default CalorieTableRow;
