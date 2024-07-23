import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/composants/Navbar";
import Home from "../src/components/pages/Home";
import Allproducts from "../src/components/pages/Allproducts";
import Product from "../src/components/pages/Product";
import Categories from "../src/components/pages/Categories";
import Profil from "../src/components/pages/Profil";
import Footer from "../src/components/composants/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Router>
        <div
          className="bg-brandWhite dark:bg-brandBlack dark:text-brandWhite
    duration-200 overflow-hidden font-poppins"
        >
          <Navbar />
          <main>
            <Routes>
              {/* URL vers Home */}
              <Route path="/" element={<Home />} />
              {/* URL vers la page des produits */}
              <Route path="/products" element={<Allproducts />} />
              {/* URL vers la page d'un produit */}
              <Route path="/product/:id" element={<Product />} />
              {/* URL vers la page des categories */}
              <Route path="/categories" element={<Categories />} />
              {/* URL vers la page du profil */}
              <Route path="/profil" element={<Profil />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
