import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import './App.css';
import Header from './component/static/header/Header';
import Footer from './component/static/footer/Footer';
// pages imports
import Home from './component/pages/home/Home';
import About from './component/pages/about/About';
import Contact from './component/pages/contact/Contact';
import SingIn from './component/pages/sing-in/SingIn';
import SingUp from './component/pages/sing-up/SingUp';
// Admin panel import
import Admin from './component/admin/Admin';
function App() {
  return (
    <div className='w-full'>
        <Router>
          <Header />
          <Routes>
              <Route path='' element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact />} />
              <Route path='sing-in' element={<SingIn />} />
              <Route path='sing-up' element={<SingUp />} />
              <Route path='admin' element={< Admin />}></Route>
          </Routes>
          <Footer />
        </Router>
      </div>
  );
}

export default App;
