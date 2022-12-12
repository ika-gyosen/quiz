import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '~/providers/Apollo';
import { Layout } from '~/components/Layout';
import { Top } from '~/pages/Top';

const App = () => {
  return (
    <BrowserRouter>
      <ApolloProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Top />} />
          </Route>
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default App;
