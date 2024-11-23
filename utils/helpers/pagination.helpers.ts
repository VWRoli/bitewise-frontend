export const getPagesToShow = (currentPage: number, totalPages: number) => {
  const maxVisiblePages = 5;
  const half = Math.floor(maxVisiblePages / 2);

  let startPage = Math.max(1, currentPage - half);
  let endPage = Math.min(totalPages, currentPage + half);

  if (currentPage <= half) {
    endPage = Math.min(maxVisiblePages, totalPages);
  } else if (currentPage > totalPages - half) {
    startPage = Math.max(1, totalPages - maxVisiblePages + 1);
  }

  return Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );
};
