import { Routes,Route } from "react-router-dom"
import About from "./Screen/About"
import Contact from "./Screen/Contact"
import Home from "./Screen/Home"
import Nevbar from "./Screen/Navbar"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<h1>Hello DashBoard</h1>} />
      <Route path="/home" element={<Nevbar />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default App
