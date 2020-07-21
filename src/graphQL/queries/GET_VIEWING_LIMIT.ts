import { gql } from '@apollo/client'

export const GET_VIEWING_LIMIT = gql`
    query GetViewingLimit {
        limit
    }
`
