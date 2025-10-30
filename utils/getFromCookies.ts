export const getFromCookies = (item: string) => {
  if (typeof window !== "undefined") {
    const val = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${item}=`))
      ?.split("=")[1];
    return val;
  }
  return null;
};
