/**File contains all the components and the routing happens here */
import "./App.scss";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products/products";
import ProductDetails from "./components/Products/productDetails";
import Login from "./components/LoginPage/login";
import Footer from "./components/Footer/footer";
import Register from "./components/RegisterPage/register";
import Dashboard from "./components/Dashboard/dashboard";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/productdetail/:productId" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
