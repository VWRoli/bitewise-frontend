export const removeDashFromString = (str: string) => {
  return str.replace('-', ' ');
};

export function getFirstTwoCharacters(inputString?: string) {
  if (!inputString) return '';
  return inputString.substring(0, 2);
}
