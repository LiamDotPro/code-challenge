export interface Markets {
    marketSymbol: string,
    baseSymbol: string,
    exchangeSymbol: string,
    quoteSymbol: string,
    ticker: null | Ticker
}

export interface Ticker {
    lastPrice: number
    highPrice: number
    lowPrice: number
    percentChange: number
    baseVolume: number
    quoteVolume: number
}
