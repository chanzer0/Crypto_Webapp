import { Quote } from "./quotes";

/**
 * Top Ten Coin Interface
 */
export interface ITopTenCoin {
    id: number, // ex: '1'
    name: string, // ex: 'Bitcoin'
    symbol: string, // ex: 'BTC'
    rank: number, // ex: '1'
    quotes: Quote[], // see `quotes.ts` for more
    last_updated: number
}

/**
 * Top Ten Coin Class
 */
export class TopTenCoin {
    constructor(
        public id: number, // ex: '1'
        public name: string, // ex: 'Bitcoin'
        public symbol: string, // ex: 'BTC'
        public rank: number, // ex: '1'
        public quotes: Quote[], // see `quotes.ts` for more
        public last_updated: number
    ) { }
}

/**
 * Here's an example of what the object response
 * looks like for a 'TopTenCoin', Bitcoin.
 * 
 * "1": {
 *  "id": 1,
 *  "name": "Bitcoin",
 *  "symbol": "BTC",
 *  "website_slug": "bitcoin",
 *  "rank": 1,
 *  "circulating_supply": 17098837.0,
 *  "total_supply": 17098837.0,
 *  "max_supply": 21000000.0,
 *  "quotes": {
 *       "USD": {
 *           "price": 6518.1,
 *           "volume_24h": 3168800000.0,
 *           "market_cap": 111451929450.0,
 *           "percent_change_1h": -0.11,
 *           "percent_change_24h": 0.96,
 *           "percent_change_7d": -8.81
 *       }
 *   },
 *   "last_updated": 1529246074
 * },
 * "2": {
 *  ...
 * }, 
 * ...
 */