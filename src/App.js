import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Shop from "./Pages/Shop"
import ShopCategory from "./Pages/ShopCategory"
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginRegister from './Pages/LoginRegister';
import Footer from './Components/Footer/Footer';
import men_banner from "./Assetes/banner_mens.png"
import women_banner from "./Assetes/banner_women.png"
import kid_banner from "./Assetes/banner_kids.png"
import Practish from './Pages/Practish';
import Loginprotect from './utils/Loginprotect';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Loginprotect><Shop/></Loginprotect>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/> 
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginRegister/>}/>
          <Route path='/data' element={<Practish/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
