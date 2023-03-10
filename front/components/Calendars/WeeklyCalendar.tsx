import useDates from "../../composable/UseDates"

export default function WeeklyCalendar({ start, end }: { start: Date, end: Date }) {
    const weeks = useDates().weeksBetweenIntervall(start, end)
    const item = useDates().datesBetweenIntervall(new Date(new Date().getFullYear(), 2, 1), new Date(new Date().getFullYear(), 3, 10))

    return (
        <ul className="grid grid-cols-6 w-full">
            {weeks.map((week) => {
                const filter = item.filter(date => date.week === week)
                const count = filter?.map(filtered => filtered.week)

                const percentage = ((count.length / 7) * 100).toFixed(2)
                return (
                    <div className="p-3 h-48">
                        <h5>Semaine {week}</h5>
                        {percentage !== "0.00" ? <div className="w-full rounded-full h-1.5 mb-4 flex weeklyScares" >
                            {/*
                                 @todo dynamic background color
                                @todo fix when start date not first progress should stick to the right
                                */}
                            <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={{ width: `${percentage}%` }}></div>
                        </div> : ""}

                    </div>
                )
            })}
        </ul >
    )

}