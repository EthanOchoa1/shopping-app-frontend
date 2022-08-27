import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './assets/styles.css'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import SingleProduct from './pages/SingleProduct'
import AddProduct from './pages/AddProduct'


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='single-product' element={<SingleProduct />} />
      <Route path='add-product' element={<AddProduct />}/>
      <Route path='*' element={<h2>Page Not Found</h2>} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
