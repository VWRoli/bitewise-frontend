import { Breadcrumbs } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { removeDashFromString } from '@/app/(modules)/dashboard/utils';

const CustomBreadCrumbs = () => {
  const fullPathName = usePathname();

  const breadcrumbs = fullPathName.split('/').splice(1);

  return (
    <Breadcrumbs separator="/" aria-label="breadcrumb" className="text-dark">
      {breadcrumbs.map((breadcrumb, index) => (
        <div key={index}>
          {breadcrumb !== 'dashboard' ? (
            <Link href={`/dashboard/${breadcrumb}`}>
              <p className="first-letter:uppercase">
                {removeDashFromString(breadcrumb)}
              </p>
            </Link>
          ) : (
            <Link href="/dashboard">
              <HomeIcon fontSize="inherit" className="text-dark" />
            </Link>
          )}
        </div>
      ))}
      ;
    </Breadcrumbs>
  );
};

export default CustomBreadCrumbs;
