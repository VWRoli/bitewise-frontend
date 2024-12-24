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
import { camelCaseText } from '@/app/(modules)/[lang]/dashboard/utils';
import { useDictionary } from '@/app/providers/dictionary-provider';

const CustomBreadCrumbs = () => {
  const fullPathName = usePathname();
  const params = useParams();
  const { dashboard } = useDictionary();

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

          const breadcrumbText = camelCaseText(breadcrumb);

          const breadcrumbLocaleText =
            dashboard.sidebar[breadcrumbText as keyof typeof dashboard.sidebar];

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
                    {breadcrumbLocaleText}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={href} className="first-letter:uppercase">
                      {breadcrumbLocaleText}
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
