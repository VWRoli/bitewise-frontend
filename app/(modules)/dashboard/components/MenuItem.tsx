'use client';

import {
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/app/components/ui/sidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/app/lib';
import { IMenuItem } from '@/app/(modules)/dashboard/interfaces';

interface IProps {
  route: string;
  item: IMenuItem;
}
const MenuItem = ({ item, route }: IProps) => {
  const pathname = usePathname();

  const isActive = route === pathname;

  return (
    <SidebarMenuItem key={item.label}>
      <SidebarMenuButton
        asChild
        className={cn(
          'transition-all duration-150 hover:bg-primary-gradient hover:text-white',
          {
            'bg-primary-gradient text-white': isActive,
          },
        )}
      >
        <Link href={route}>
          <item.icon />
          <span className="first-letter:uppercase">{item.label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export default MenuItem;
