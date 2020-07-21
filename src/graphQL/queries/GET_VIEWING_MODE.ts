import { gql } from '@apollo/client'

export const GET_VIEWING_MODE = gql`
    query GetViewingMode {
        mode
    }
`
