// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Navbar from "./components/Navbar"; // import your navbar
import './index.css';


function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar always visible */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;


// // src/App.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoginPage from "./components/LoginPage";
// import SignupPage from "./components/SignupPage";
// import Dashboard from "./components/Dashboard";
// import Navbar from "./components/Navbar";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route
//           path="/dashboard"
//           element={
//             <>
//               <Navbar />  {/* Navbar only on dashboard */}
//               <Dashboard />
//             </>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
