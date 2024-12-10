import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "../src/pages/home";

import Contact from "./pages/Contact";
import Industries from "./pages/Industries";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Services from "./pages/Services";
import React, { useEffect, useState } from "react";
import AllCaseStudies from "./pages/AllCaseStudies";
import Project from "./pages/Project";
import LoadingAnimation from "./components/LoadingAnimation";
import StaffAug from "./pages/StaffAug";

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  const startTime = performance.now();

  const [isLoading, setIsLoading] = useState(true);
  console.log(startTime);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Simulate loading for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <Router>
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/services" element={<Services />} />
            <Route path="/CaseStudies" element={<AllCaseStudies />} />
            <Route path="/CaseStudies/:id" element={<Project />} />
            <Route path="/staffAugmentaion" element={<StaffAug />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
