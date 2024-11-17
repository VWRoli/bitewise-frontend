import { IError } from '@/app/common/interfaces/error.interface';
import { Typography } from '@mui/material';
import React from 'react';

interface IProps {
  result: IError;
}
const CustomError = ({ result }: IProps) => {
  return (
    <Typography variant="h6" align="center" color="error">
      {(result.error as any).message}
    </Typography>
  );
};

export default CustomError;
