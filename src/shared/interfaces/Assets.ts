import { Markets } from './Markets'

export interface Assets {
    assets: Asset[]
}

export interface Asset {
    id: string
    assetName: string
    assetSymbol: string
    marketCap: number | null
    markets: Markets[]
}
