/**
 * Response object type for OHLC requests
 */
export interface OHLC {
    time: number; // ex: 1529280000
    close: number; // ex: 6714.82
    high: number; // ex: 6714.82
    low: number; // ex: 6714.82
    open: number; // ex: 6714.82
    volumefrom: number; // ex: 65285.57
    volumeto: number; // ex: 430241689.13
}
/**
 * What the response looks like
 *
Data: Array [11]
 0: Object
  time: 1533686400
  close: 6285.02
  high: 6723.99
  low: 6133.03
  open: 6723.29
  volumefrom: 130417.52
  volumeto: 838853615.89
 */
