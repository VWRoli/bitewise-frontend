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

  const getPagesToShow = () => {
    let startPage = currentPage - 2;
    let endPage = currentPage + 2;

    if (currentPage <= 3) {
      startPage = 1;
      endPage = 5;
    } else if (currentPage >= totalPages - 2) {
      startPage = totalPages - 4;
      endPage = totalPages;
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i,
    );
  };

  const pages = getPagesToShow();

  return (
    <div className="flex items-center justify-center space-x-6 text-black">
      <Link
        className={`${currentPage === 1 ? 'pointer-events-none' : ''}`}
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
              className={`${page === currentPage ? 'pointer-events-none' : ''}`}
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
        className={`${!hasNextPage ? 'pointer-events-none' : ''}`}
      >
        <Button variant="contained" disabled={!hasNextPage}>
          Next
        </Button>
      </Link>
    </div>
  );
};
