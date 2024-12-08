import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Blank from "./layouts/Blank";
import Error from "./pages/auth/Error"

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <ToastContainer stacked />
      <Routes>
        {/* Default Layout */}
        <Route path="/*" element={<DefaultLayout />} />
        {/* Blank Layout */}
        <Route path="/auth/*" element={<Blank />} />
        {/* Error Page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;

