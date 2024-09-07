import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Project";
import TemplateDetails from "./components/TemplateDetails";
import Pricing from "./components/Pricing";
import HowItWorks from "./components/HowItWorks";
import AboutUs from "./components/AboutUs";
import FAQs from "./components/FAQs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound"; // You can create a custom 404 page

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <About></About>
              <Projects></Projects>
              <HowItWorks></HowItWorks>
              <Pricing></Pricing>
              <AboutUs></AboutUs>
              <FAQs></FAQs>
              <Contact></Contact>
              <Footer></Footer>
            </>
          }
        />{" "}
        {/* Home */}
        <Route path="/portfolio/:id" element={<TemplateDetails />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
