export const getRandomDate = (
  fromDays: number,
  toDays: number
): Date => {
  const today = new Date();
  const randomDays =
    Math.floor(Math.random() * (toDays - fromDays + 1)) + fromDays;

  const result = new Date(today);
  result.setDate(result.getDate() + randomDays);

  result.setHours(Math.floor(Math.random() * 24));
  result.setMinutes(Math.floor(Math.random() * 60));
  result.setSeconds(Math.floor(Math.random() * 60));
  result.setMilliseconds(0);

  return result;
};
