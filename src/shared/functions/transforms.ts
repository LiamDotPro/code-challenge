import { Markets } from '../interfaces/Markets'

export const findFirstOpenMarket = (marketArr: Markets[]): string => {

    const item = marketArr.find(el => el.ticker !== null)

    if (!item) {
        return ''
    }

    return `${ item.baseSymbol }/${ item.quoteSymbol }`
}

export const findWeighedAverage = (marketArr: Markets[]): string => {

    const filteredMarkets = marketArr.filter(el => el.ticker && (el.quoteSymbol.includes('USD'))
    ).map(el => el.ticker ? {
        lastPrice: +el.ticker.lastPrice,
        baseVolume: +el.ticker.baseVolume,
        exchange: el.marketSymbol
    } : undefined).filter(Boolean)

    let totalVolume = 0

    for (let item of filteredMarkets) {
        if (!item) {
            continue
        }

        totalVolume = +totalVolume + +item.baseVolume
    }

    if (totalVolume <= 0) {
        return ''
    }

    const weightedMarkets = filteredMarkets.map(el => {

        if (!el) {
            return undefined
        }

        return {
            weight: (el.baseVolume / totalVolume * 100), ...el
        }
    }).filter(Boolean)

    let calculatedAverage = 0

    for (let weightedItem of weightedMarkets) {

        if (!weightedItem) {
            continue
        }

        calculatedAverage = calculatedAverage + (weightedItem.weight * weightedItem.lastPrice) / 100
    }

    return `${ Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(calculatedAverage) }`
}
