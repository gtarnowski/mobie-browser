export const encodeFilterByName = filter => {
  switch (filter) {
    case "title":
      return "t=";
    case "imdb":
      return "i=";
    case "year":
      return "y=";
    case "all":
      return "s=";
    default:
      return "t=";
  }
};
