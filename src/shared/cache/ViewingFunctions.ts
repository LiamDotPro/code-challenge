import { GET_VIEWING_MODE } from '../../graphQL/queries/GET_VIEWING_MODE'
import { ViewingMode } from '../enums/ViewingMode'
import { GET_VIEWING_LIMIT } from '../../graphQL/queries/GET_VIEWING_LIMIT'
import { cache } from '../../index'
import { GET_VIEWING_SEARCH } from '../../graphQL/queries/GET_VIEWING_SEARCH'

export const mutateViewingMode = (newMode: ViewingMode) => {
    cache.writeQuery({
        query: GET_VIEWING_MODE,
        data: {
            mode: newMode
        }
    })
}
export const mutateViewingLimit = (newLimit: string | number) => {
    cache.writeQuery({
        query: GET_VIEWING_LIMIT,
        data: {
            limit: newLimit
        }
    })
}

export const mutateViewingSearch = (newQuery: string) => {
    cache.writeQuery({
        query: GET_VIEWING_SEARCH,
        data: {
            searchQuery: newQuery
        }
    })
}
