// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/home";
// import ProductPage from "./pages/productpage";
// import LoginPage from "./pages/loginpage";
// import SignupPage from "./pages/signuppage";
// import Contact from "./pages/contactpage";
// import About from "./pages/aboutpage";
// import AdminDashboard from "./pages/AdminDashboard";
// import Footer from "./components/Footer";
// import "./App.css";

// function App() {
//   const [isCartOpen] = useState(false);

//   return (
//     <Router>
//       <div className={`main-content ${isCartOpen ? "shifted" : ""}`}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<ProductPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<SignupPage />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/admin" element={<AdminDashboard />} />

//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;





import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ProductPage from "./pages/productpage";
import LoginPage from "./pages/loginpage";
import SignupPage from "./pages/signuppage";
import Contact from "./pages/contactpage";
// import About from "./pages/aboutpage";
import AdminDashboard from "./pages/AdminDashboard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [isCartOpen] = useState(false);

  return (
    <Router>
      <div className={`main-content ${isCartOpen ? "shifted" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
        <Footer /> {/* Always visible at bottom */}
      </div>
    </Router>
  );
}

export default App;
