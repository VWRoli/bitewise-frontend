'use client';
import { MENU_ITEMS, SUB_MENU_ITEMS } from '@/app/dashboard/constants';
import { getFirstTwoCharacters } from '@/app/dashboard/utils';
import {
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';

const MenuList = () => {
  return (
    <div className="h-full flex flex-col">
      <Toolbar />
      <div className="flex flex-col gap-4 items-center justify-center mb-16">
        {/* <Avatar className="h-16 w-16 uppercase">{avatarLetters}</Avatar>
        <div>{session?.user?.email}</div> */}
      </div>
      <List className="flex flex-col justify-between h-full">
        <div>
          {MENU_ITEMS.map((item) => (
            <ListItem key={item.label} disablePadding>
              <Link href={`/dashboard${item.route}`} className="w-full">
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

        <div>
          {SUB_MENU_ITEMS.map((item) => (
            <ListItem key={item.label} disablePadding>
              <Link href={`/dashboard${item.route}`} className="w-full">
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
