const utils = {
  randomIndex: (): number => {
    return Math.floor(Math.random() * 3);
  },
  fixImageLink: (url: string): string => {
    if (typeof url !== "string") {
      return url;
    }

    return url.split(" ").join("");
  },
};

export default utils;
