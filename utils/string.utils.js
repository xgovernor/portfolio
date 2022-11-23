export const truncate = (string, len = 205) => {
  if (!string) return;

  if (string.length > len) {
    return string.substring(0, len) + "...";
  }

  return string;
};

export const arrayToString = (list, connector = ", ") => {
  if (!list || !Array.isArray(list)) return;

  return list.join(connector);
};
