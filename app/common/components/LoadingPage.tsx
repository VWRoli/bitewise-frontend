import { CircularProgress } from '@mui/material';
import React from 'react';

const LoadingPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-hidden">
      <CircularProgress size={40} />
    </div>
  );
};

export default LoadingPage;
