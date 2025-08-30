import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import './App.css';
import Home from './component/pages/home/Home';
import Dress from './component/pages/dress/Dress';
import Contact from './component/pages/contact/Contact';

import Header from './component/static/header/Header';
import Footer from './component/static/footer/Footer';
function App() {
  return (
    <div className='w-full'>
        <Router>
          <Header />
          <Routes>
            <Route path='' element={<Home />} />
            <Route path='dress' element={<Dress />} />
            <Route path='contact' element={<Contact />} />
            {/* <Route path='sing-in' element={<SingIn />} />
            <Route path='sing-up' element={<SingUp />} />
            <Route path='admin' element={<Admin />} /> */}
          </Routes>
          <Footer />
        </Router>
      </div>
  );
}

export default App;
