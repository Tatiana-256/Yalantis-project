export interface Dictionary<T> {
  [Key: string]: T;
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getMonth = (userBirthday: string) => {
  const d = new Date(userBirthday);
  return months[d.getMonth()];
};
