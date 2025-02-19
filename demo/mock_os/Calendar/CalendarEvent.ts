export default interface CalendarEvent {
  date: Date,
  title: string
  description?: string
  allDay?: boolean
}
