import "./main.css"
import Home from "./pages/Home/Home";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/LoginPage/Register";
import Login from "./pages/LoginPage/Login";
import ScrollToTop from "./utils/ScrollToTop";
import User from "./pages/User/User";
import AboutFabric from "./pages/AboutFabric/AboutFabric";
import Catalog from "./pages/Catalog/Catalog";
import Products from "./pages/Products/Products";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import Goods from "./pages/Goods/Goods";

function App() {
  

  return (
    <div className="App">
      <div className="container">
          <Router>
              <ScrollToTop/>
              <NavBar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/user" element={<User />}/>
                  <Route path="/aboutus" element={<AboutFabric />}/>
                  <Route path="/catalog" element={<Catalog />}/>
                  <Route path="/products" element={<Products />}/>
                  <Route path="/admin-panel" element={<AdminPanel />}/>
                  <Route path="/admin-panel-goods" element={<Goods />}/>
                </Routes>
              <Footer />
          </Router>
      </div>
      <div className="copywriting">
        <p>Copyright 2023 Ювелірна Фабрика, All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
