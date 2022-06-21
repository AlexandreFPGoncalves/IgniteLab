import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-eu-central-1.graphcms.com/v2/cl4nu464e0p1g01xpdkfs06h3/master",
    cache: new InMemoryCache()
})