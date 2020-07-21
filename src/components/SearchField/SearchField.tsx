import * as React from 'react'
import { useQuery } from '@apollo/client'
import { GET_VIEWING_SEARCH } from '../../graphQL/queries/GET_VIEWING_SEARCH'
import searchIcon from '../../assets/search.svg'

import './SearchField.scss'
import { mutateViewingSearch } from '../../shared/cache/ViewingFunctions'

export const SearchField: React.FC = () => {

    const updateSearch = (value: string) => {
        mutateViewingSearch(value)
    }

    const { data } = useQuery(GET_VIEWING_SEARCH)

    return <div className={ `bfy-search-field` }>
        <input onChange={ e => updateSearch(e.currentTarget.value) }
               value={ data.searchQuery }
               placeholder={ `Search cryptocurrency, rates and prices` } />
        <img src={ searchIcon } alt={ `search icon` } />
    </div>
}
