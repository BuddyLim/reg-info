import { gql } from '@apollo/client';

export const GET_ALL_STATES = gql`
  query{
    states_state_name {
      id
      name
    }
  }
`