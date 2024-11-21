'use client';

import {
  MENU_ITEMS,
  SUB_MENU_ITEMS,
} from '@/app/(modules)/dashboard/constants';
import { cn } from '@/app/common/lib/tw-merge';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface IProps {
  onClose: () => void;
}
const MenuList = ({ onClose }: IProps) => {
  const pathname = usePathname();

  return (
    <div className="h-full flex flex-col">
      <List className="flex flex-col justify-between h-full">
        <div className="px-4 flex flex-col gap-1">
          {MENU_ITEMS.map((item) => {
            const route = `/dashboard${item.route}`;

            return (
              <ListItem key={item.label} disablePadding>
                <Link href={route} className="w-full" onClick={onClose}>
                  <ListItemButton
                    className={cn(
                      'rounded-lg hover:bg-gray-700',
                      pathname === route && 'bg-menu-item-active',
                    )}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      className="first-letter:uppercase"
                    ></ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>
            );
          })}
        </div>

        <div>
          {SUB_MENU_ITEMS.map((item) => (
            <ListItem key={item.label} disablePadding>
              <Link
                href={`/dashboard${item.route}`}
                className="w-full"
                onClick={onClose}
              >
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    className="first-letter:uppercase"
                  ></ListItemText>
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </div>
      </List>
    </div>
  );
};

export default MenuList;
