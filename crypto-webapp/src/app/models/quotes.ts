/**
 * The "Quotes: " field of a TopTenCoin
 */
export interface Quote { // Contains all the info on price, volume, % changes
    USD: {
        price: number,
        volume_24h: number
        market_cap: number,
        percent_change_1h: number,
        percent_change_24h: number,
        percent_change_7d: number
    }
}