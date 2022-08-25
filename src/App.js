import {BrowserRouter} from 'react-router-dom'



import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Home />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
