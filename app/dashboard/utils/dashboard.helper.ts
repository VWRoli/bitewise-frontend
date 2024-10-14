export const getPathName = (pathName: string) => {
  const pathArray = pathName.split('/');
  const lastElement = pathArray[pathArray.length - 1];
  return removeDashFromString(lastElement);
};

export const removeDashFromString = (str: string) => {
  return str.replace('-', ' ');
};

export function getFirstTwoCharacters(inputString?: string) {
  if (!inputString) return '';
  return inputString.substring(0, 2);
}
