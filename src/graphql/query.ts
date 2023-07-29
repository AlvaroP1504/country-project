import { gql } from 'graphql-tag';

const GET_CONTINENTS = gql`
query GetContinents{
    continents {
        code
        name
    }
}`

const GET_COUNTRIES = gql`
    query GetCountries($continents: [String!]){
        countries (filter: {continent: {in: $continents}}){
            code
            name
        }
    }
`

export { GET_CONTINENTS, GET_COUNTRIES };