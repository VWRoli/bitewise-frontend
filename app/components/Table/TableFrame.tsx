import React, { PropsWithChildren } from 'react';
import { Table } from '@/components/ui/table';

interface IProps extends PropsWithChildren {
  addModal: React.ReactNode;
  title: string;
  tableHead: React.ReactNode;
}
const TableFrame = async ({ title, children, tableHead, addModal }: IProps) => {
  return (
    <div className="shadow-md bg-white rounded-xl">
      <div className="px-4">
        <div className="bg-primary-gradient rounded-lg shadow-table-header -mt-6 flex justify-between items-center px-4 py-6">
          <h6 className="text-base text-white font-semibold">{title}</h6>
          {addModal}
        </div>
      </div>
      <div className="h-4"></div>
      <Table aria-label={title}>
        {tableHead}
        {children}
      </Table>
    </div>
  );
};

export default TableFrame;
