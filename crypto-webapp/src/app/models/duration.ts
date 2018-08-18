/**
 * This file contains all possible durations for OHLC query values
 */

// Second -- 1SEC, 2SEC, 3SEC, 4SEC, 5SEC, 6SEC, 10SEC, 15SEC, 20SEC, 30SEC
export enum DurationSeconds {
    ONE = '1SEC',
    TWO = '2SEC',
    THREE = '3SEC',
    FOUR = '4SEC',
    FIVE = '5SEC',
    SIX = '6SEC',
    TEN = '10SEC',
    FIFTEEN = '15SEC',
    TWENTY = '20SEC',
    THIRTY = '30SEC'
}

// Minute -- 1MIN, 2MIN, 3MIN, 4MIN, 5MIN, 6MIN, 10MIN, 15MIN, 20MIN, 30MIN
export enum DurationMinutes {
    ONE = '1MIN',
    TWO = '2MIN',
    THREE = '3MIN',
    FOUR = '4MIN',
    FIVE = '5MIN',
    SIX = '6MIN',
    TEN = '10MIN',
    FIFTEEN = '15MIN',
    TWENTY = '20MIN',
    THIRTY = '30MIN'
}

// Hour	-- 1HRS, 2HRS, 3HRS, 4HRS, 6HRS, 8HRS, 12HRS
export enum DurationHours {
    ONE = '1HRS',
    TWO = '2HRS',
    THREE = '3HRS',
    FOUR = '4HRS',
    SIX = '6HRS',
    EIGHT = '8HRS',
    TWELVE = '12HRS'
}

// Day -- 1DAY, 2DAY, 3DAY, 5DAY, 7DAY, 10DAY
export enum DurationDays {
    ONE = '1DAY',
    TWO = '2DAY',
    THREE = '3DAY',
    FIVE = '5DAY',
    SEVEN = '7DAY',
    TEN = '10DAY'
}

// Month -- 1MTH, 2MTH, 3MTH, 4MTH, 6MTH
export enum DurationMonths {
    ONE = '1MTH',
    TWO = '2MTH',
    THREE = '3MTH',
    FOUR = '5MTH',
    SIX = '7MTH'
}

// Year -- 1YRS, 2YRS, 3YRS, 4YRS, 5YRS
export enum DurationYears {
    ONE = '1YRS',
    TWO = '2YRS',
    THREE = '3YRS',
    FIVE = '5YRS',
}
