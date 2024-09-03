export const capitalizeFirstLetter = (text: string) => {
  const cleanedText = text?.replace(/\s+/g, " ").trim();
  const lowercase = cleanedText?.toLowerCase();
  return lowercase?.replace(
    lowercase?.charAt(0),
    lowercase?.charAt(0)?.toLocaleUpperCase()
  );
};

export const capitalizeFirstLetters = (str: string) => {
  const lowercase = str?.toLocaleLowerCase();

  const result = lowercase
    ?.split(" ")
    ?.map((text) =>
      text?.replace(text?.charAt(0), text?.charAt(0)?.toUpperCase())
    )
    ?.join(" ");
  return result;
};

export const formatAvatarText = (email: string | undefined) => {
  if (typeof email === "string" && email.length > 0) {
    return email.slice(0, 1).toUpperCase();
  }
  return email;
};

export const percentageChange = (
  currentMonth: number | string,
  lastMonth: number | string
) => {
  const value = ((+currentMonth - +lastMonth) / +lastMonth) * 100;
  const result = Math.ceil(value * 10) / 10;
  return result;
};
