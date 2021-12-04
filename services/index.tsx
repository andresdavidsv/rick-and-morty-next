import { gql } from '@apollo/client';

const GET_CHARACTERS = gql`
  query getCharactersQuery($page: Int, $name: String){
    characters(page: $page, filter: { name: $name }){
      info {
          next
        }
      results{
        id
        name
        status
        species
        image
      }
    }
  }
`
const GET_CHARACTER = gql`
  query getCharacterQuery($id: ID!){
    character(id: $id){
      id
      name
      status
      species
      gender
      origin {
        name
        dimension
      }
      location {
        name
      }
      episode {
        id
        name
      }
      image
    }
  }
`

const GET_EPISODE = gql`
  query getEpisodeQuery($id: ID!){
    episode(id: $id){
      id
      name
      episode
      air_date
      characters {
        id
        name
      }
    }
  }
`

export { GET_CHARACTERS, GET_CHARACTER, GET_EPISODE };
