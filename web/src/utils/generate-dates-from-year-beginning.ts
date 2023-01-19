import dayjs from "dayjs";

export function generateDatesFromYearBeginning() {
    const firdtDayOfTheYear = dayjs().startOf('year')
    const today =  new Date()

    const dates = []
    let compareDate =  firdtDayOfTheYear

    while (compareDate.isBefore(today)) {
        dates.push(compareDate.toDate())
        compareDate = compareDate.add(1, 'day')
    }

    return dates
}