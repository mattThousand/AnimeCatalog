import {ApolloClient, InMemoryCache} from '@apollo/client';
import {concatPagination, relayStylePagination} from '@apollo/client/utilities';

export const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache({
    typePolicies: {
      Page: {
        fields: {media: concatPagination()},
      },
      Query: {
        fields: {
          Page: relayStylePagination(),
        },
      },
    },
  }),
});
