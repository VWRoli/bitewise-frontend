'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/app/components/ui/breadcrumb';
import { useParams, usePathname } from 'next/navigation';

import { BREADCRUMBS_STARTING_INDEX } from '@/app/(modules)/[lang]/dashboard/constants';
import { House } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { removeDashFromString } from '@/app/(modules)/[lang]/dashboard/utils';

const CustomBreadCrumbs = () => {
  const fullPathName = usePathname();
  const params = useParams();

  const breadcrumbs = fullPathName
    .split('/')
    .splice(BREADCRUMBS_STARTING_INDEX);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => {
          const isDashboard = breadcrumb === 'dashboard';
          const isLast = index === breadcrumbs.length - 1;
          const href = `/${params.lang}/${breadcrumbs.slice(0, index + 1).join('/')}`;

          return (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {isDashboard ? (
                  <BreadcrumbLink asChild>
                    <Link href={`/${params.lang}/dashboard`}>
                      <House size={16} />
                    </Link>
                  </BreadcrumbLink>
                ) : isLast ? (
                  <BreadcrumbPage className="first-letter:uppercase">
                    {removeDashFromString(breadcrumb)}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={href} className="first-letter:uppercase">
                      {removeDashFromString(breadcrumb)}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CustomBreadCrumbs;
