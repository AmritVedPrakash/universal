import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";           
import TermsCondition from "./pages/TermsCondition.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import Services from "./pages/Services.jsx";
import Quality from "./components/qualities/Quality.jsx";
import Qualities from "./pages/Qualities.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
        <Route path="/quality" element={ <Qualities/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
