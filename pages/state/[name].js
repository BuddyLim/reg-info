import { useRouter } from "next/router";
import { useQuery, gql } from '@apollo/client';

const TEST_QUERY = gql`
  query MyQuery {
    states_state_name {
      id
      name
    }
  }`


export default function StateTemplate() {
  const router = useRouter();
  const test = useQuery(TEST_QUERY)

  console.log("🚀 ~ file: index.js ~ line 26 ~ Home ~ test", test)
  
  return (
    <div>
      {router.query.name}
    </div>
  )
}
