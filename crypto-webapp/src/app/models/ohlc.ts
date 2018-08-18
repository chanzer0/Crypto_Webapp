/**
 * Response object type for OHLC requests
 */
export interface OHLC {
    time_period_start: string; // ex: 1529280000
    time_period_end: string; // ex: 1529280000
    price_open: number; // ex: 6714.82
    price_high: number; // ex: 6714.82
    price_low: number; // ex: 6714.82
    price_close: number; // ex: 6714.82
    volume_traded: number; // ex: 65285.57
    trades_count: number; // ex: 430241689.13
}
/**
 * What the response looks like
 *
   {
    "time_period_start": "2018-08-18T00:00:00.0000000Z",
    "time_period_end": "2018-08-19T00:00:00.0000000Z",
    "time_open": "2018-08-18T00:00:02.0000000Z",
    "time_close": "2018-08-18T01:57:47.0000000Z",
    "price_open": 6585.900000000,
    "price_high": 6619.500000000,
    "price_low": 6521.600000000,
    "price_close": 6532.500000000,
    "volume_traded": 2181.543636380,
    "trades_count": 5123
  },
 */
