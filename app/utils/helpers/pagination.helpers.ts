import { FIRST_PAGE, MAX_VISIBLE_PAGES, TWO } from '@/app/utils/constants';

export const getPagesToShow = (currentPage: number, totalPages: number) => {
  const half = Math.floor(MAX_VISIBLE_PAGES / TWO);

  let startPage = Math.max(FIRST_PAGE, currentPage - half);
  let endPage = Math.min(totalPages, currentPage + half);

  if (currentPage <= half) {
    endPage = Math.min(MAX_VISIBLE_PAGES, totalPages);
  } else if (currentPage > totalPages - half) {
    startPage = Math.max(
      FIRST_PAGE,
      totalPages - MAX_VISIBLE_PAGES + FIRST_PAGE,
    );
  }

  return Array.from(
    { length: endPage - startPage + FIRST_PAGE },
    (_, i) => startPage + i,
  );
};
