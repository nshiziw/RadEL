import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <ToastContainer stacked/>
      <Routes>
        {/* Default Layout */}
        <Route path="/*" element={<DefaultLayout />} />
      </Routes>
    </Router>
  );
};

export default App;

