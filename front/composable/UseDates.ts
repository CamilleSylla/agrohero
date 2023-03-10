import "../utils/dateUtils";

export default function useDates() {
  //@todo add reactive date
  const formatDateToString = (
    date: Date
  ) => {
    return {
      numeric: new Intl.DateTimeFormat(
        "fr",
        {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        }
      ).format(date),
      long: new Intl.DateTimeFormat("fr", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      }).format(date),
    };
  };

  const weekNumber = (date: Date) => {
    return date.getWeek();
  };

  function firstDayOfWeek(date: Date) {
    const dayOfWeek = date.getDay();
    const diff =
      date.getDate() -
      dayOfWeek +
      (dayOfWeek === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  }

  function lastDayOfWeek(date: Date) {
    const dayOfWeek = date.getDay();
    const diff = 7 - dayOfWeek;

    const lastDayOfWeek = new Date(
      date.setDate(date.getDate() + diff)
    );
    return lastDayOfWeek;
  }

  function firstDayOfYear(date: Date) {
    const year = date.getFullYear();
    return new Date(year, 0, 1);
  }

  function datesBetweenIntervall(
    start: Date,
    end: Date
  ) {
    const dates = [];
    let currentDate = new Date(start);

    while (currentDate <= end) {
      dates.push({
        format: formatDateToString(
          new Date(currentDate)
        ),
        date: new Date(currentDate),
        week: weekNumber(currentDate),
      });
      currentDate.setDate(
        currentDate.getDate() + 1
      );
    }

    return dates;
  }

  function firstDayOfMonth(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1);
  }
  function lastDayOfMonth(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0);
  }

  function addWeeksToDate(
    start: Date,
    weeks: number
  ) {
    const result = new Date(start);
    result.setDate(
      result.getDate() + weeks * 7
    );
    return result;
  }

  function weeksBetweenIntervall(
    start: Date,
    end: Date
  ) {
    const datesWeeks = datesBetweenIntervall(
      start,
      end
    ).map((date) => date.week);
    const weeks = Array.from(
      new Set(datesWeeks)
    ).sort((a, b) => a - b);
    return weeks;
  }

  return {
    formatDateToString,
    weekNumber,
    firstDayOfWeek,
    lastDayOfWeek,
    firstDayOfYear,
    datesBetweenIntervall,
    firstDayOfMonth,
    lastDayOfMonth,
    addWeeksToDate,
    weeksBetweenIntervall,
  };
}
