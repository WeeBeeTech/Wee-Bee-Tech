import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
<<<<<<< HEAD

=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
>>>>>>> f878432 (updates)
// Component import
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BrandsLogo from "./components/BrandsLogo/BrandsLogo.jsx";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import BlogsComp from "./components/Blogs/BlogsComp.jsx";
import Footer from "./components/Footer/Footer";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
<<<<<<< HEAD
import PricingList from "./components/Pricing/PricingList.jsx";
=======

import MediaSupportPage from "./components/pages/mediaSupportPage.jsx";
import WebDesigning from "./components/pages/WebDesigning.jsx";
import DigitalMarketting from "./components/pages/DigitalMarketting.jsx";
>>>>>>> f878432 (updates)

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
<<<<<<< HEAD
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <BrandsLogo />
      <Services />
      <PricingList />
      <Testimonial />
      <BlogsComp />
      <ContactForm />
      <Footer />
    </div>
=======
    <Router>
      <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <BrandsLogo />
              <Services />
              <Testimonial />
              <BlogsComp />
              <ContactForm />
              <Footer />
            </>
          } />

          {/* Skill pages */}
          <Route path="/media-support" element={<MediaSupportPage />} />
          <Route path="/web-designing" element={<WebDesigning />} />
          <Route path="/digital-marketting" element={<DigitalMarketting />} />
        </Routes>
      </div>
    </Router>
>>>>>>> f878432 (updates)
  );
};

export default App;
