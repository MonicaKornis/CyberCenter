import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Connect from './Connect';
import Services from './Services';
import Navbar from './Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/connect" element={<Connect />}/>
      <Route path="/services" element={<Services />}/>
    </Routes>
    </>
  );
}

export default App;
