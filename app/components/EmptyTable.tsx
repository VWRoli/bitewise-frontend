import { TableCell, TableRow, Typography } from '@mui/material';
import React, { PropsWithChildren } from 'react';

const EmptyTable = ({ children }: PropsWithChildren) => {
  return (
    <TableRow>
      <TableCell colSpan={8}>
        <Typography variant="h6" align="center">
          {children}
        </Typography>
      </TableCell>
    </TableRow>
  );
};

export default EmptyTable;
