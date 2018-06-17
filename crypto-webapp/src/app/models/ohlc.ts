export class OHLC {
    open: number; // The price at which the current candle 'opened'(started) at
    high: number; // The price at which the current candle peaked at
    low: number; // The price at which the current candle was lowest at
    close: number; // The price at which the current candle 'closed'(ended) at
    date: Date; // The date for the current candle
}
