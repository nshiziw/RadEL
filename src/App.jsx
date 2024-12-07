// import { Route, BrowserRouter, Routes } from "react-router-dom"
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Home from "./pages/Home"
// import Contact from "./pages/Contact"
// import Error from "./pages/Error"

// const App = () => {



//   return (
//     <BrowserRouter>
//       <main>
//         <ToastContainer stacked/>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="*" element={<Error />} />
//         </Routes>
//       </main>
//     </BrowserRouter>
//   );
// }

// export default App

import DefaultLayout from "./layouts/DefaultLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />} />
      </Routes>
    </Router>
  )
}

export default App