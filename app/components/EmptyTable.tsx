import { TableCell, TableRow } from '@/components/ui/table';
import React, { PropsWithChildren } from 'react';

const EmptyTable = ({ children }: PropsWithChildren) => {
  return (
    <TableRow>
      <TableCell colSpan={8}>
        <h6 className="text-xl font-bold text-center text-dark">{children}</h6>
      </TableCell>
    </TableRow>
  );
};

export default EmptyTable;
