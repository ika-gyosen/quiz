import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '~/components/Layout';
import { Top } from '~/pages/Top';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Top />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
