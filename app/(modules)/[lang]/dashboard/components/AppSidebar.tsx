'use client';

import {
  MENU_ITEMS,
  SUB_MENU_ITEMS,
} from '@/app/(modules)/[lang]/dashboard/constants';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/app/components/ui/sidebar';

import Link from 'next/link';
import MenuItem from '@/app/(modules)/[lang]/dashboard/components/MenuItem';
import UserProfile from '@/app/(modules)/[lang]/dashboard/components/UserProfile';
import { useParams } from 'next/navigation';

export function AppSidebar() {
  const params = useParams();

  return (
    <Sidebar>
      <SidebarContent className="flex h-full flex-col justify-between">
        <SidebarGroup className="pt-[72px]">
          <UserProfile />
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-1 px-4">
              {MENU_ITEMS.map((item) => {
                const route = `/${params.lang}/dashboard${item.route}`;

                return <MenuItem key={item.label} item={item} route={route} />;
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Other</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {SUB_MENU_ITEMS.map((item) => {
                const route = `/${params.lang}/dashboard${item.route}`;

                return (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild>
                      <Link href={route}>
                        <item.icon />
                        <span className="first-letter:uppercase">
                          {item.label}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
