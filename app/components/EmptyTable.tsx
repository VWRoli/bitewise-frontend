import React, { PropsWithChildren } from 'react';

import { TableCell, TableRow } from '@/app/components/ui/table';

const EmptyTable = ({ children }: PropsWithChildren) => {
  return (
    <TableRow>
      <TableCell colSpan={8}>
        <h6 className="text-center text-xl font-bold text-dark">{children}</h6>
      </TableCell>
    </TableRow>
  );
};

export default EmptyTable;
