import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Categories from './pages/Categories';
import Offers from './pages/Offers';
import Contact from './pages/Contact';

//redeploy 123

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="productos" element={<Products />} />
            <Route path="categorias" element={<Categories />} />
            <Route path="ofertas" element={<Offers />} />
            <Route path="contacto" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App
