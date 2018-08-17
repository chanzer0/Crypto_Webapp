/**
 * Response object type for OHLC requests
 */
export interface OHLC {
    time: number; // ex: 1529280000
    close: number; // ex: 6714.82
    high: number; // ex: 6802.03
    low: number; // ex: 6401.41
    open: number; // ex: 6457.78
    volumefrom: number; // ex: 65285.57
    volumeto: number; // ex: 430241689.13
}
/**
 * What the response looks like
 *
 * {
 *    "time": 1529280000,
 *    "close": 6714.82,
 *    "high": 6802.03,
 *    "low": 6401.41,
 *    "open": 6457.78,
 *    "volumefrom": 65285.57,
 *    "volumeto": 430241689.13
 *   },
 */
