import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './pages/Main';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="calculate" element={<Calculate />} />
      <Route path="contact" element={<Contact />} />
      <Route path="check" element={<Check />} />
      <Route path="adminpageonly" element={<Admin />} /> */}
      </Routes>
      <Header />
    </>
  );
}

export default App;
