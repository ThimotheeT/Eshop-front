import Navbar from '../src/components/composants/Navbar'
import Home from '../src/components/pages/Home'
import Footer from '../src/components/composants/Footer'

function App() {

  return (
    <div className="bg-brandWhite dark:bg-brandBlack dark:text-brandWhite
    duration-200 overflow-hidden">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
