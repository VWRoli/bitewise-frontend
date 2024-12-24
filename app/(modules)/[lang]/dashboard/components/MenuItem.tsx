'use client';

import {
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/app/components/ui/sidebar';

import { IMenuItem } from '@/app/(modules)/[lang]/dashboard/interfaces';
import Link from 'next/link';
import { cn } from '@/app/lib';
import { useDictionary } from '@/app/providers/dictionary-provider';
import { usePathname } from 'next/navigation';

interface IProps {
  route: string;
  item: IMenuItem;
}
const MenuItem = ({ item, route }: IProps) => {
  const pathname = usePathname();
  const { dashboard } = useDictionary();

  const isActive = route === pathname;

  const labelText =
    dashboard.sidebar[item.label as keyof typeof dashboard.sidebar];

  return (
    <SidebarMenuItem key={item.label}>
      <SidebarMenuButton
        asChild
        className={cn(
          'transition-all duration-150 hover:bg-primary-gradient hover:text-white',
          isActive && 'bg-primary-gradient text-white',
        )}
      >
        <Link href={route}>
          <item.icon />
          <span className="first-letter:uppercase">{labelText}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export default MenuItem;
