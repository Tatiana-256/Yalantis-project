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

// export const dataMonthsGenerator = () => {
//   const monthsDictionary: Dictionary<Array<IUser>> = {};
//   months.forEach((m) => (monthsDictionary[m] = []));
//   const storageUsers: Array<IUser> = restoreState(pointedUsers);
//   storageUsers.forEach((x) => monthsDictionary[getMonth(x.dob)].push(x));
//   return monthsDictionary;
// };

export const getMonth = (userBirthday: string) => {
  const d = new Date(userBirthday);
  return months[d.getMonth()];
};
