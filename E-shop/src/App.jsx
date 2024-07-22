import React from "react";
import Navbar from '../src/components/composants/Navbar'
import Home from '../src/components/pages/Home'
import Footer from '../src/components/composants/Footer'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  React.useEffect(() => {
    AOS.init(
      {
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100,
      }
    );
    AOS.refresh();
  }, []);

  return (
    <div className="bg-brandWhite dark:bg-brandBlack dark:text-brandWhite
    duration-200 overflow-hidden font-poppins">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
