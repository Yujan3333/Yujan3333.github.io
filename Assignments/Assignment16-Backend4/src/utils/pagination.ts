import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "../constants/pagination";

export const buildMeta = (total: number, size?: number, page?: number) => {
  return {
    page: page || DEFAULT_PAGE,
    limit: size || DEFAULT_PAGE_SIZE,
    total: Number(total),
  };
};

export const getPaginationOptions = (option: {
  page?: number;
  limit?: number;
}) => {
  const { page = DEFAULT_PAGE, limit = DEFAULT_PAGE_SIZE } = option;

  const offset = (page - 1) * limit;

  return {
    limit: limit,
    offset,
  };
};