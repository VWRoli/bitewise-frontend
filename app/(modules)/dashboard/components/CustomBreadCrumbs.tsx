import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/app/components/ui/breadcrumb';

import { House } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { removeDashFromString } from '@/app/(modules)/dashboard/utils';
import { usePathname } from 'next/navigation';

const CustomBreadCrumbs = () => {
  const fullPathName = usePathname();

  const breadcrumbs = fullPathName.split('/').splice(1);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => {
          const isDashboard = breadcrumb === 'dashboard';
          const isLast = index === breadcrumbs.length - 1;
          const href = `/${breadcrumbs.slice(0, index + 1).join('/')}`;

          return (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {isDashboard ? (
                  <BreadcrumbLink asChild>
                    <Link href={`/dashboard`}>
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
