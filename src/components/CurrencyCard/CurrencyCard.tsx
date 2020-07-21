import * as React from 'react'

import './CurrencyCard.scss'

interface props {
    title: string
    pair: string
    price: string
    lastPrice: string
    change: JSX.Element
    low: string
    high: string

}

export const CurrencyCard: React.FC<props> = ({ title, pair, price, lastPrice, high, low, change }) => {
    return <>
        <div className="col-xs-4">
            <div className="bfy-card">
                <div className="bfy-card-name">
                    { title }
                </div>
                <div className="second-row-container">
                    <div className="bfy-card-pair">
                        { pair }
                    </div>
                    <div className="bfy-card-price">
                        { price }
                    </div>
                </div>
                <div className="third-row-container">
                    <div className="bfy-last-price">
                        { lastPrice }
                    </div>
                    <div className="bfy-twenty-hour-change">
                        { change }
                    </div>
                    <div className="bfy-twenty-hour-low">
                        { `$${ low }` }
                    </div>
                    <div className="bfy-twenty-hour-high">
                        { `$${ high }` }
                    </div>
                </div>
            </div>
        </div>
    </>
}
