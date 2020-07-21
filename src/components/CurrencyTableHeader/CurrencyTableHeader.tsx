import * as React from 'react'
import { useQuery } from '@apollo/client'
import { mutateViewingMode } from '../../shared/cache/ViewingFunctions'
import { ViewingMode } from '../../shared/enums/ViewingMode'
import { GET_VIEWING_MODE } from '../../graphQL/queries/GET_VIEWING_MODE'
import { SearchField } from '../SearchField/SearchField'

import './CurrencyTableHeader.scss'

export const CurrencyTableHeader: React.FC = () => {

    const {
        data,
        loading
    } = useQuery(GET_VIEWING_MODE)

    return <div className="row">
        <div className="col-xs-6 bfy-currency-table-header">
            <h1>CryptoCurrency Market</h1>
        </div>


        <div className="col-xs-6 bfy-currency-table-controls-container">
            <div className="bfy-currency-table-controls">
                { !loading &&
				<button
					onClick={ e => mutateViewingMode(data.mode === ViewingMode.Light ? ViewingMode.Dark : ViewingMode.Light) }>
                    { data.mode === ViewingMode.Light ? 'Dark' : 'Light' }
				</button>
                }
                <SearchField />
            </div>

        </div>
    </div>
}
