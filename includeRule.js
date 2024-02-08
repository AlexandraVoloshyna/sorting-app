export function applyIncludeRule(data, conditions) {
  const { include } = conditions;
  return data.filter(item =>
    include.some(condition =>
      Object.entries(condition).every(([key, value]) => item[key] === value)
    )
  );
}
