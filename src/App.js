import Header from './Component/Header';
import Main from './Component/Main';
import About from './Component/About';
import Footer from './Component/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      <ToastContainer />
      </BrowserRouter>
      
      
    </div>

  );
}

export default App;