import Link from 'next/link'

import createApolloClient from '../apollo/apollo-client'
import { GET_ALL_STATES } from '../apollo/gql-queries'

export default function Landing({listOfStates}){
  return(
    <div className="container">
      <h1>
        List of States
      </h1>
      <ul>
        {listOfStates.map((stateObj) =>{
          return(
            <li>
                <Link
                  key={stateObj.id}
                  href={`state/${stateObj.name}`}
                >
                  <a>{stateObj.name}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export async function getServerSideProps() {
  const client = createApolloClient()
  const { data } = await client.query({
    query: GET_ALL_STATES,
  });

  return {
    props: {
      listOfStates: data.states_state_name
    },
  };
}