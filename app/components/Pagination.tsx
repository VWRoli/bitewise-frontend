import { getPagesToShow } from '@/utils/helpers';
import { cn } from '@/lib';
import React from 'react';
import {
  Pagination as ShadcnPagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

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
    <ShadcnPagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`?page=${currentPage - 1}`}
            aria-disabled={currentPage === 1}
            className={cn(
              'px-4 py-2 rounded-md transition-colors',
              currentPage === 1
                ? 'pointer-events-none bg-gray-200 text-gray-400'
                : 'hover:bg-gray-100 bg-white text-black',
            )}
          />
        </PaginationItem>
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={`?page=${page}`}
              className={cn(
                'px-4 py-2 rounded-md transition-colors',
                page === currentPage
                  ? 'bg-stone-500 text-white font-semibold'
                  : 'hover:bg-gray-100 bg-white text-black',
              )}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href={`?page=${currentPage + 1}`}
            aria-disabled={!hasNextPage}
            className={cn(
              'px-4 py-2 rounded-md transition-colors',
              !hasNextPage
                ? 'pointer-events-none bg-gray-200 text-gray-400'
                : 'hover:bg-gray-100 bg-white text-black',
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </ShadcnPagination>
  );
};
