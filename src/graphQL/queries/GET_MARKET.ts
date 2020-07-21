import { gql } from '@apollo/client'

export const GET_MARKET = gql`
    query PageAssets($symbol: String)  {
        assets(filter: {
            assetSymbol: {
                _in: [$symbol]
            }
            }) {
            id
            assetName
            assetSymbol
            marketCap
            markets {
                marketSymbol
                baseSymbol
                quoteSymbol
                ticker {
                    lastPrice
                    baseVolume
                    quoteVolume
                    highPrice
                    lowPrice
                }
            }
        }
    }
`;
