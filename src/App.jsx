import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Product from "./components/pages/Product"
import Home from "./components/pages/Home"
import Text from "./components/pages/Text"
import Login from "./components/pages/Login"; 
import Register from "./components/pages/Register";

import "./styles/style.css";
import "./styles/flickty.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product/:productId" element={<Product />}/>
        <Route path="/text" element={<Text />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
