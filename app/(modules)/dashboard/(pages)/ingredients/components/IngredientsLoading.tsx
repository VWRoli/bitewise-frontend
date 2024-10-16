import React from 'react';
import { Skeleton } from '@mui/material';

const IngredientsLoading = () => {
  const skeletonItems = Array.from({ length: 5 }).map((_, index) => (
    <Skeleton
      key={index}
      variant="rectangular"
      width="100%"
      height={80}
      className="mb-4"
    />
  ));

  return <>{skeletonItems}</>;
};

export default IngredientsLoading;
