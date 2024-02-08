
export function applySortRule(data, conditions) {
  const { sortBy } = conditions;
  if (sortBy) {
    data.sort((a, b) => {
      for (let i = 0; i < sortBy.length; i++) {
        const key = sortBy[i];

        if (a[key] < b[key]) {
          return -1;
        } else if (a[key] > b[key]) {
          return 1;
        }
      }
      return 0;
    });
  }

  return data;
}