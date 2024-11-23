import { getPagesToShow } from '@/utils/helpers';
import { cn } from '@/lib';
import { Button, ButtonGroup } from '@mui/material';
import Link from 'next/link';
import React from 'react';

interface IProps {
  page?: string;
  totalPages: number;
  hasNextPage: boolean;
}

export const Pagination = async (props: IProps) => {
  const { page = 1, totalPages, hasNextPage } = props;

  const currentPage = Math.min(Math.max(Number(page), 1), totalPages);

  const pages = getPagesToShow(currentPage, totalPages);

  return (
    <div className="flex items-center justify-center space-x-6 text-black">
      <Link
        className={cn(currentPage === 1 && 'pointer-events-none')}
        href={`?page=${currentPage - 1}`}
      >
        <Button variant="contained" disabled={currentPage === 1}>
          Previous
        </Button>
      </Link>

      <nav
        aria-label="Pagination"
        className="relative z-0 inline-flex -space-x-px rounded-md"
      >
        <ButtonGroup>
          {pages.map((page) => (
            <Link
              key={page}
              className={cn(page === currentPage && 'pointer-events-none')}
              href={`?page=${page}`}
            >
              <Button variant={page === currentPage ? 'contained' : 'outlined'}>
                {page}
              </Button>
            </Link>
          ))}
        </ButtonGroup>
      </nav>

      <Link
        href={`?page=${currentPage + 1}`}
        className={cn(!hasNextPage && 'pointer-events-none')}
      >
        <Button variant="contained" disabled={!hasNextPage}>
          Next
        </Button>
      </Link>
    </div>
  );
};
