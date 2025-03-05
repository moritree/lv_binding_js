export function getDateBefore(date: Date, days: number) {
  return new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
}

export function getDateAfter(date: Date, days: number) {
  return getDateBefore(date, -days)
}

export function roundToNearestMinute(date: Date) {
  const rounded = new Date(date)
  rounded.setSeconds(0, 0);
  if (date.getSeconds() >= 30) rounded.setMinutes(date.getMinutes() + 1);
  return rounded;
}

export function twelveHourTime(date: Date): string {
  let amPm = "AM";
  let hour = date.getHours();
  if (hour >= 12) {
    amPm = "PM"
    if (hour > 12) hour -= 12;
  }
  return date.getHours() + ":" + date.getMinutes() + " " + amPm
}

// I'm pretty sure this is genuinely just how you do this in JS (without external libs)
export const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
