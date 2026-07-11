export const isNotEmpty = (items: string[]) => {
  return items.every((item) => item.trim().length > 0);
};

export const isValidUrl = (urlLinks: string[]) => {
  return urlLinks.every((urlLink) => {
    try {
      return new URL(urlLink).protocol === 'https:';
    } catch {
      return false;
    }
  });
};
