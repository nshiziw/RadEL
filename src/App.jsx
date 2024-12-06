import { Route, BrowserRouter, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App