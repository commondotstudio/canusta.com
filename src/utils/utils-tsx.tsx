export const calculateCenteredX = (x: number) => {
  const centeredx = x - window.innerWidth / 2;
  return centeredx;
};

export const calculateCenteredY = (y: number) => {
  const centeredy = y - window.innerHeight / 2;
  return centeredy;
};

export const dateCleaner = (date: string) => {
  const dateCleanWithDot = date.replace(/-/g, ".");
  const dateClean = dateCleanWithDot.split("T")[0];
  return dateClean;
};

export const readintTimeCalculator = (words: string) => {
  const wordsPerMinute = 200;
  const numberOfWords = words.split(/\s/g).length;
  const minutes = numberOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return readTime;
};
