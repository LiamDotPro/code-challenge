import { gql } from '@apollo/client'

export const GET_MARKETS = gql`
    query PageAssets($limit: Int, $like: String, $searchQuery: String)  {
        assets(sort: [{ marketCapRank: ASC }], page: { limit: $limit }, filter: {assetName:{_like:$searchQuery}}) {
            id
            assetName
            assetSymbol
            marketCap
            markets(filter: {quoteSymbol: { _like: $like}}) {
                marketSymbol
                baseSymbol
                quoteSymbol
                ticker {
                    lastPrice
                    baseVolume
                    quoteVolume
                }
            }
        }
    }
`;
