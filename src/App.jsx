import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import LoginSignUp from "./Pages/LoginSignUp";
import Cart from "./Pages/Cart"; // ✅ Import this
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory category="mens" />} />
        <Route path="/women" element={<ShopCategory category="women" />} />
        <Route path="/kids" element={<ShopCategory category="kids" />} />

        
        <Route path="/product/:productId" element={<Product />} />

       
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignUp />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
