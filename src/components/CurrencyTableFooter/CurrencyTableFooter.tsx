import * as React from 'react'
import { mutateViewingLimit } from '../../shared/cache/ViewingFunctions'

import './CurrencyTableFooter.scss'

const linksMap: { [key: string]: number | string } = {
    one: 25,
    two: 50,
    all: 'all'
}

export const CurrencyTableFooter: React.FC = () => {

    const buildLinks = () => {

        let arrOfElements: JSX.Element[] = []

        for (const [key, value] of Object.entries(linksMap)) {
            if (value === 'all') {
                arrOfElements.push(<p key={ `mutateViewingItem-${ key }` }
                                      onClick={ e => mutateViewingLimit('all') }>all</p>)
                continue
            }

            arrOfElements.push(<p key={ `mutateViewingItem-${ key }` }
                                  onClick={ e => mutateViewingLimit(value) }>{ value }</p>)
        }

        return arrOfElements
    }

    return <div className={ `row` }>
        <div className="col-xs-12 bfy-footer-links">
            { buildLinks().map(el => el) }
        </div>
    </div>
}
