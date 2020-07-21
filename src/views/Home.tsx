import * as React from 'react'
import { CurrencyTable } from '../components/CurrencyTable/CurrencyTable'
import { CurrencyTableHeader } from '../components/CurrencyTableHeader/CurrencyTableHeader'
import { CurrencyTableFooter } from '../components/CurrencyTableFooter/CurrencyTableFooter'

export const Home: React.FC = () => {
    return <>
        <CurrencyTableHeader />
        <CurrencyTable />
        <CurrencyTableFooter />
    </>
}
