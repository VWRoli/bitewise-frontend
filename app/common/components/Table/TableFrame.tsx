import { Button, Table, Typography } from '@mui/material';
import React, { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  tableHead: JSX.Element;
}
const TableFrame = ({ setIsOpen, title, children, tableHead }: IProps) => {
  return (
    <div className="shadow-md bg-white rounded-xl">
      <div className="px-4">
        <div className="bg-primary-gradient rounded-lg shadow-table-header -mt-6 flex justify-between items-center px-4 py-6">
          <Typography variant="h6" className="text-base text-white">
            {title}
          </Typography>
          <div className="text-white">
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => setIsOpen(true)}
            >
              Add
            </Button>
          </div>
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
