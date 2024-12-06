import { Route, BrowserRouter, Routes } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Error from "./pages/Error"

const App = () => {

  const showToast = () => {
    toast.success("Hello, Toastify!");
  };

  return (
    <BrowserRouter>
      <main>
        <ToastContainer />
        <button onClick={showToast}>Toast</button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App