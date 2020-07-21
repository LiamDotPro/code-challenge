import { gql } from '@apollo/client'

export const GET_VIEWING_SEARCH = gql`
    query GetViewingSearch {
        searchQuery
    }
`
