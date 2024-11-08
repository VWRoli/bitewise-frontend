export const makeStringReadable = (str: string): string => {
  const res = str.replace(/_/g, ' ').toLowerCase();
  return res.charAt(0).toUpperCase() + res.slice(1);
};
