export function applyExcludeRule(data, conditions) {
  const { exclude } = conditions;
  return data.filter(item =>
    exclude.every(condition =>
      Object.entries(condition).some(([key, value]) => item[key] !== value)
    )
  );
}
