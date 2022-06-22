import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4oy1c6h1d9p01z459zxbp17/master",
  cache: new InMemoryCache()
});
