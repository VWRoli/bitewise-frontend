import { getPagesToShow } from '@/app/utils/helpers';
import { cn } from '@/app/lib';
import React from 'react';
import {
  Pagination as ShadcnPagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/app/components/ui/pagination';
import { EOrderDirection } from '@/app/utils/enums';

interface IProps {
  page?: string;
  totalPages: number;
  hasNextPage: boolean;
  orderBy?: string;
  orderDirection?: EOrderDirection;
}

export const Pagination = async (props: IProps) => {
  const { page = 1, totalPages, hasNextPage, orderBy, orderDirection } = props;

  const currentPage = Math.min(Math.max(Number(page), 1), totalPages);

  const pages = getPagesToShow(currentPage, totalPages);

  const orderQuery = `&orderBy=${orderBy}&orderDirection=${orderDirection}`;

  return (
    <ShadcnPagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`?page=${currentPage - 1}${orderQuery}`}
            aria-disabled={currentPage === 1}
            className={cn(
              'rounded-md px-4 py-2 transition-colors',
              currentPage === 1
                ? 'pointer-events-none bg-gray-200 text-gray-400'
                : 'bg-white text-black hover:bg-gray-100',
            )}
          />
        </PaginationItem>
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={`?page=${page}${orderQuery}`}
              className={cn(
                'rounded-md px-4 py-2 transition-colors',
                page === currentPage
                  ? 'bg-primary font-semibold text-white'
                  : 'bg-white text-black hover:bg-gray-100',
              )}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href={`?page=${currentPage + 1}${orderQuery}`}
            aria-disabled={!hasNextPage}
            className={cn(
              'rounded-md px-4 py-2 transition-colors',
              !hasNextPage
                ? 'pointer-events-none bg-gray-200 text-gray-400'
                : 'bg-white text-black hover:bg-gray-100',
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </ShadcnPagination>
  );
};
