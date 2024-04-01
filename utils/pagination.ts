export const pagination = <T>(
  data: T[],
  currentPage: number,
  pageSize: number,
) => {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  if (startIndex >= data.length) {
    return [];
  }
  return data.slice(startIndex, endIndex);
};
