import { ApolloProvider } from '~/providers/Apollo';
import { Test } from '~/Test';

const App = () => {
  return (
    <ApolloProvider>
      <Test />
    </ApolloProvider>
  );
};

export default App;
