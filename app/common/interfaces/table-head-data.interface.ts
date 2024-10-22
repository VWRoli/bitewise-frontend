import { TableCellProps } from '@mui/material';

export interface ITableHeadData {
  id: string;
  label: string;
  align: TableCellProps['align'];
}
