import { Pagination } from 'src/types';

export const getQueryRange = ({ page, limit }: Pagination) => {
  const start = page === 0 ? page : page * limit;
  const end = page === 0 ? limit : page * limit + limit;

  return { start, end };
};
