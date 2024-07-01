import Page from "./Pages/Head"
import Navbar from "./components/navBar"
import "./style.css"
import About from "./Pages/Aboutme"

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Page />
      <About />
    </div>
  )
}

export default App
