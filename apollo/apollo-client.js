import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export default function createApolloClient(){
    return new ApolloClient({
        ssrMode: typeof window === "undefined",
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: "https://engaging-clam-68.hasura.app/v1/graphql",
            headers:{
            "x-hasura-admin-secret": "qSpP5ekbUfIxwljAYeRELwOrLINOnP46nGK0L7OEnxu6KByGio1Y8NuiRLqatsr2"
            }
        })
      })
}