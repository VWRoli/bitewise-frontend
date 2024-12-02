import React, { PropsWithChildren } from 'react';
import { Table } from '@/app/components/ui/table';

interface IProps extends PropsWithChildren {
  addModal: React.ReactNode;
  title: string;
  tableHead: React.ReactNode;
}
const TableFrame = async ({ title, children, tableHead, addModal }: IProps) => {
  return (
    <div className="rounded-xl bg-white shadow-md">
      <div className="px-4">
        <div className="-mt-6 flex items-center justify-between rounded-lg bg-primary-gradient px-4 py-6 shadow-table-header">
          <h6 className="text-base font-semibold text-white">{title}</h6>
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
