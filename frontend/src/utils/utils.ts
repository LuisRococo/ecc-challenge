export const capitalizeFirstLetter = (text: string) => {
  if (text.length === 0) return '';
  const firstCharacter = text.charAt(0).toUpperCase();
  const restOfText = text.slice(1);

  return firstCharacter + restOfText;
};
