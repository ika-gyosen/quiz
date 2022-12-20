import { ReactNode, useMemo, FC } from 'react';
import { ApolloProvider as ApolloProviderOrigin } from '@apollo/client';
import { createApolloClient } from '~/helpers/apollo';

export const ApolloProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const apolloClient = useMemo(
    () =>
      createApolloClient({
        uri: 'http://localhost:8080/v1/graphql',
        credentials: 'include',
      }),
    [],
  );

  return (
    <ApolloProviderOrigin client={apolloClient}>
      {children}
    </ApolloProviderOrigin>
  );
};
