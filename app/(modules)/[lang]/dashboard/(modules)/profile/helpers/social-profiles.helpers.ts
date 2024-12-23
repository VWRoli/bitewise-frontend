export const addHttps = (url: string) => {
  if (!url) return '';
  if (!url.includes('https://')) return `https://${url}`;
  return url;
};
