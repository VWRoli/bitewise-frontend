import { Button, Typography } from '@mui/material';
import React, { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren {
  title: string;
  setIsOpen: (value: boolean) => void;
}
const DashboardFrame = ({ title, setIsOpen, children }: IProps) => {
  return (
    <div className="p-2 md:p-4 xl:p-8 flex flex-col gap-8">
      <section className="flex justify-between">
        <Typography variant="h4">{title}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsOpen(true)}
        >
          Add New
        </Button>
      </section>
      {children}
    </div>
  );
};

export default DashboardFrame;
