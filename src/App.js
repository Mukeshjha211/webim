import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import HeroSection from "./components/HeroSection";
// import About from './components/About';
// import Contact from './components/Contact';
import NotFound from "./components/NotFound"; // You can create a custom 404 page

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HeroSection />} /> {/* Home */}
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
