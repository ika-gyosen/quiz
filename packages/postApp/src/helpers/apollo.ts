import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  InMemoryCacheConfig,
} from '@apollo/client';

type Props = {
  uri: string;
  cacheConfig?: InMemoryCacheConfig;
  credentials: string;
};

export const createApolloClient = ({
  uri,
  cacheConfig,
  credentials,
}: Props) => {
  const httpLink = createHttpLink({
    uri,
    credentials,
  });

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(cacheConfig),
  });
};
