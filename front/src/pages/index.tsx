import { useState } from "react"
import WeeklyCalendar from "../../components/Calendars/WeeklyCalendar"
import useDates from "../../composable/UseDates"

export default function Home() {
  const [intervall, setIntervall] = useState({
    start: new Date(),
    end: new Date()
  })
  const { formatDateToString, firstDayOfWeek, lastDayOfWeek, weekNumber, datesBetweenIntervall, lastDayOfMonth, firstDayOfMonth, addWeeksToDate } = useDates()
  const current = new Date()
  const dates = {
    fullNumeric: formatDateToString(current).numeric,
    fullLong: formatDateToString(current).long,
    firstDayOfWeek: formatDateToString(firstDayOfWeek(current)).long,
    lastDayOfWeek: formatDateToString(lastDayOfWeek(current)).numeric,
    weekNumber: weekNumber(current),
    intervallDates: datesBetweenIntervall(intervall.start, intervall.end),
    firstDayOfMonth: formatDateToString(firstDayOfMonth(current)),
    lastDayOfMonth: formatDateToString(lastDayOfMonth(current)),
    datesInMonth: datesBetweenIntervall(firstDayOfMonth(current), lastDayOfMonth(current)),
    addWeeksToDate: addWeeksToDate(current, 1)
  }
  const firstDayOfYear = new Date(new Date().getFullYear(), 0, 1);
  const lastDayOfYear = new Date(new Date().getFullYear(), 11, 31);

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div className="flex gap-11">
        <div>
          <p>{dates.fullNumeric}</p>
          <p>{dates.fullLong}</p>
          <p>{dates.firstDayOfWeek}</p>
          <p>{dates.lastDayOfWeek}</p>
          <p>{dates.weekNumber}</p>
        </div>
        <div>
          <h1>dates between intervalls</h1>
          <input type="date" onChange={e => setIntervall({ ...intervall, start: new Date(e.target.value) })} />
          <input type="date" onChange={e => setIntervall({ ...intervall, end: new Date(e.target.value) })} />
          <ul>
            {dates.intervallDates.map(date => {
              return (
                <li>
                  <p>{date.format.long}</p>
                  <p>{date.format.numeric}</p>
                  <p>{date.week}</p>
                </li>
              )
            })}
          </ul>
        </div>
        {/* <div>
          <p>{dates.firstDayOfMonth.long}</p>
          <p>{dates.lastDayOfMonth.numeric}</p>
          <ul>
            {dates.datesInMonth.map(date => {
              return (
                <li>
                  <p>{date.format.long}</p>
                  <p>{date.format.numeric}</p>
                  <p>{date.week}</p>
                </li>
              )
            })}
          </ul>
        </div> */}
      </div>
      <WeeklyCalendar start={firstDayOfYear} end={lastDayOfYear} />
    </>
  )
}
