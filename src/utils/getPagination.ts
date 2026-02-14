export function getPagination(current: number, total: number, delta = 1) {
  const range = [];
  const rangeWithDots = [];
  for (let i = 1; i <= total; i++) {
    if (
      i === 1 ||
      i === total ||
      (i >= current - delta && i <= current + delta)
    ) {
      range.push(i);
    }
  }

  let prev: number | null = null;

  for (const page of range) {
    if (prev !== null) {
      if (page - prev === 2) {
        rangeWithDots.push(prev + 1);
      } else if (page - prev > 2) {
        rangeWithDots.push("...");
      }
    }

    rangeWithDots.push(page);
    prev = page;
  }

  return rangeWithDots;
}
