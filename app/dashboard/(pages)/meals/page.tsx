'use client';

import DashboardFrame from '@/app/common/components/DashboardFrame';
import AddMealDialog from '@/app/dashboard/(pages)/meals/components/AddMealDialog';
import { Typography } from '@mui/material';
import { useState } from 'react';

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DashboardFrame title="Meals" setIsOpen={setIsOpen}>
      <section className="flex flex-col gap-2">
        <Typography variant="h6">No meals</Typography>
      </section>
      <AddMealDialog open={isOpen} onClose={() => setIsOpen(false)} />
    </DashboardFrame>
  );
}
