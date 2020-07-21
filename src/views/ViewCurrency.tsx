import * as React from 'react'
import { useQuery } from '@apollo/client'
import { GET_MARKET } from '../graphQL/queries/GET_MARKET'
import { useParams } from 'react-router'
import { CurrencyTableHeader } from '../components/CurrencyTableHeader/CurrencyTableHeader'
import { Asset, Assets } from '../shared/interfaces/Assets'
import { CurrencyCard } from '../components/CurrencyCard/CurrencyCard'
import { findWeighedAverage } from '../shared/functions/transforms'

export const ViewCurrency: React.FC = () => {

    let { id } = useParams();

    const { data, loading } = useQuery<Assets>(GET_MARKET, {
        variables: {
            symbol: id

        }
    })

    const getCurrencyCards = (asset: Asset): JSX.Element[] => {

        return asset.markets.map((el, i) => {
            if (!el.ticker) {
                return <></>
            }
            return (<CurrencyCard lastPrice={ el.ticker ? `${ el.ticker.lastPrice }` : '0' }
                                  pair={ `${ el.baseSymbol }/${ el.quoteSymbol }` }
                                  title={ asset.assetName }
                                  key={ `bfy-asset-card-${ i }` }
                                  high={ el.ticker ? `${ el.ticker.highPrice }` : '0' }
                                  low={ el.ticker ? `${ el.ticker.lowPrice }` : '0' }
                                  price={ findWeighedAverage([el]) }
                                  change={
                                      <p>{ el.ticker ? el.ticker.percentChange : `0%` }</p>
                                  } />
            )
        })
    }


    return <>
        <CurrencyTableHeader />
        <div className="row">
            { !loading && data && data.assets.length > 0 && getCurrencyCards(data.assets[0]) }
        </div>
    </>
}
