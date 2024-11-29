'use client';
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
import {
  MENU_ITEMS,
  SUB_MENU_ITEMS,
} from '@/app/(modules)/dashboard/constants';
import Link from 'next/link';
import UserProfile from '@/app/(modules)/dashboard/components/UserProfile';
import MenuItem from '@/app/(modules)/dashboard/components/MenuItem';

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="flex flex-col justify-between h-full">
        <SidebarGroup className="pt-[72px]">
          <UserProfile />
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="px-4 flex flex-col gap-1">
              {MENU_ITEMS.map((item) => {
                const route = `/dashboard${item.route}`;

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
                const route = `/dashboard${item.route}`;

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
