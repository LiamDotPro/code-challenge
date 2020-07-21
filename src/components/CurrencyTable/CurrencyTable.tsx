import * as React from 'react'
import { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_MARKETS } from '../../graphQL/queries/GET_MARKETS'
import './CurrencyTable.scss'
import { GET_VIEWING_LIMIT } from '../../graphQL/queries/GET_VIEWING_LIMIT'
import { routes } from '../../Router'
import { Link } from 'react-router-dom'
import { GET_VIEWING_SEARCH } from '../../graphQL/queries/GET_VIEWING_SEARCH'
import { findFirstOpenMarket, findWeighedAverage } from '../../shared/functions/transforms'
import { Assets } from '../../shared/interfaces/Assets'

export const CurrencyTable: React.FC = () => {

    const search = useQuery(GET_VIEWING_SEARCH).data.searchQuery

    const searchQuery = useQuery<Assets>(GET_MARKETS, {
        variables: {
            limit: useQuery(GET_VIEWING_LIMIT).data.limit,
            searchQuery: search
        }
    })

    const {
        data,
        loading,
        error,
        refetch
    } = useQuery<Assets>(GET_MARKETS, {
        variables: {
            limit: useQuery(GET_VIEWING_LIMIT).data.limit
        }
    })

    useEffect(() => {

    })

    const refetchData = async () => {
        await refetch({ limit: 25 })
        return null
    }

    if (error) {
        refetchData()
    }

    const formatCellItems = (items: any) => {
        return items.map((el: any, i: number) => {
            return (
                <tr key={ `currency-row${ i }` }>
                    <td>
                        <Link to={ routes.view.navigate(el.assetSymbol) }>{ el.assetName }      </Link>
                    </td>
                    <td>{ findFirstOpenMarket(el.markets) }</td>
                    <td>{ el.assetSymbol }</td>
                    <td>{ `${ Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(el.marketCap) } ` }</td>
                    <td>{ findWeighedAverage(el.markets) }</td>
                </tr>
            )
        })
    }

    return <div className={ `row` }>

        { !loading && !error &&
		<div className="col-xs-12 bfy-currency-table-container">
			<table>
				<thead>
				<tr>
					<th>Name</th>
					<th>Pair</th>
					<th>Symbol</th>
					<th>Market Cap</th>
					<th>Average Last Price</th>
				</tr>
				</thead>
				<tbody>
                { search && formatCellItems(searchQuery && searchQuery.data && searchQuery.data.assets)

                }
                { !search && formatCellItems(data && data.assets)
                }
				</tbody>
			</table>
		</div>
        }
    </div>
}
