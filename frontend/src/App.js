import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Calculate from './pages/Calculate';
import Main from './pages/Main';
import Check from './pages/Check';
import Contacts from './pages/Contacts';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="calculate" element={<Calculate />} />
        <Route path="contact" element={<Contacts />} />
        <Route path="check" element={<Check />} />
        {/* <Route path="adminpageonly" element={<Admin />} /> */}
      </Routes>
      {/* <Header /> */}
    </>
  );
}

export default App;
