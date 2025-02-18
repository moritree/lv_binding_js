export function getDateBefore(date: Date, days: number) {
  return new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
}

export function getDateAfter(date: Date, days: number) {
  return getDateBefore(date, -days)
}
