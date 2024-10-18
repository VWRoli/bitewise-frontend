'use client';
import { useUserContext } from '@/app/(modules)/dashboard/(pages)/user/context';
import {
  MENU_ITEMS,
  SUB_MENU_ITEMS,
} from '@/app/(modules)/dashboard/constants';
import { getFirstTwoCharacters } from '@/app/(modules)/dashboard/utils';
import {
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Skeleton,
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
  const { state } = useUserContext();
  const avatarLetters = getFirstTwoCharacters(state.user?.email);

  return (
    <div className="h-full flex flex-col">
      <Toolbar />
      <div className="flex flex-col gap-4 items-center justify-center mb-16">
        {state.isLoading ? (
          <>
            <Skeleton variant="circular" width={64} height={64} />
            <Skeleton variant="text" className="w-[80%]" />
          </>
        ) : (
          <>
            <Avatar className="h-16 w-16 uppercase">{avatarLetters}</Avatar>
            <div>{state?.user?.email}</div>
          </>
        )}
      </div>
      <List className="flex flex-col justify-between h-full">
        <div className="px-4 flex flex-col gap-1">
          {MENU_ITEMS.map((item) => (
            <ListItem key={item.label} disablePadding>
              <Link
                href={`/dashboard${item.route}`}
                className="w-full"
                onClick={onClose}
              >
                <ListItemButton
                  className={`rounded-lg hover:bg-gray-700 ${
                    pathname === `/dashboard${item.route}`
                      ? 'bg-menu-item-active'
                      : ''
                  }`}
                >
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
