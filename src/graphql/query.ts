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
            continent {
                code
                name
            }
        }
    }
`
const GET_COUNTRY = gql`
    query GetCountry($code: ID!){
        country(code: $code) {
            code
            name
            continent {
                code
                name
            }
            capital
            languages {
                code
                name
            }
            currency
            states {
                code
                name
            }
        }
    }
    `

export { GET_CONTINENTS, GET_COUNTRIES, GET_COUNTRY };