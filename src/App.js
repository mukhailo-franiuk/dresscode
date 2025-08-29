import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import './App.css';
import Footer from './component/static/footer/Footer';
function App() {
  return (
    <div className='w-full'>
        <Router>
          {/* <Header /> */}
          <Routes>
            {/* <Route path='' element={<Home />} />
            <Route path='dress' element={<Dress />} />
            <Route path='contact' element={<Contact />} />
            <Route path='sing-in' element={<SingIn />} />
            <Route path='sing-up' element={<SingUp />} />
            <Route path='admin' element={<Admin />} /> */}
          </Routes>
          <Footer />
        </Router>
      </div>
  );
}

export default App;
