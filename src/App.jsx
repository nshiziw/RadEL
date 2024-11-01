import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Authentication from "./layouts/Authentication";
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
        {/* Authentication Layout */}
        <Route path="/auth/*" element={<Authentication />} />
        {/* Error Page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;

