export function getDateBefore(date: Date, days: number) {
  return new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
}

export function getDateAfter(date: Date, days: number) {
  return getDateBefore(date, -days)
}

// I'm pretty sure this is genuinely just how you do this in JS (without external libs)
export const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
