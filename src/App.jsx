import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Authentication from "./layouts/Authentication";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <ToastContainer stacked />
      <Routes>
        {/* Default Layout */}
        <Route path="/*" element={<DefaultLayout />} />
        {/* Authentication Layout */}
        <Route path="/auth/*" element={<Authentication />} />
      </Routes>
    </Router>
  );
};

export default App;

