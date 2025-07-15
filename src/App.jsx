import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import LoginSignUp from "./Pages/LoginSignUp";
import Cart from "./Pages/Cart"; // ✅ Import this
import Footer from "./Components/Footer/Footer";
import men_banner from "./assets/banner.jpg";
import women_banner from "./assets/women_banner.avif"
import kids_banner from "./assets/kids_banner.jpg"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory category="men" banner={men_banner} />} />
        <Route path="/women" element={<ShopCategory category="women" banner={women_banner} />} />
        <Route path="/kids" element={<ShopCategory category="kid" banner={kids_banner} />} />


        <Route path="/product/:productId" element={<Product />} />


        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
