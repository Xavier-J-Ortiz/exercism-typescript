function isLeapYear(year: number) {
    return !(year % 100) ? !(year % 400) : !(year % 4)
}

export default isLeapYear