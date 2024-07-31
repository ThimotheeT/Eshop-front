import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/composants/Navbar";
import Home from "../src/components/pages/Home";
import Allproducts from "../src/components/pages/Allproducts";
import Product from "../src/components/pages/Product";
import Categories from "../src/components/pages/Categories";
import Profil from "../src/components/pages/Profil";
import Connexion from "../src/components/pages/Connexion";
import LoginForm from "../src/components/composants/LoginForm";
import SignupForm from "../src/components/composants/SignupForm";
import Footer from "../src/components/composants/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Editprofil from "./components/pages/Editprofil";

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
              {/* URL vers page de connexion, soit Login, soit Signup */}
              <Route path="/connexion" element={<Connexion />}>
                                <Route path="login" element={<LoginForm />} />
                                <Route path="signup" element={<SignupForm />} />
                            </Route>
              {/* URL vers la page du profil */}
              <Route path="/profil" element={<Profil />} />
              {/* URL vers la page de modif profil */}
              <Route path="/editprofil" element={<Editprofil />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
