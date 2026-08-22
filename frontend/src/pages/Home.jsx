import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
// import WhyChooseUs from "../components/WhyChooseUs.jsx";
// import Testimonials from "../components/Testimonials.jsx";
// import CTASection from "../components/CTASection.jsx";
import Footer from "../components/Footer.jsx";
import OurClients from "../components/OurClients.jsx";
import AboutSecurity from "../components/AboutSecurity.jsx";
import StatsSection from "../components/StatsSection.jsx";
import AnHonestService from "../components/AnHonestService.jsx";
import Experience from "../components/experience.jsx";
import OurTestimonials from "../components/OurTestimonials.jsx";
import Team from "./Team.jsx";
import SecurityServices from "../components/services/SecurityServices.jsx";

function Home() {
  return (
    <>
      {/* <Navbar /> */}

      <main>
        <HeroSection />
        {/* <ServicesSection /> */}
        <OurClients/>
        <AboutSecurity/>
        <Team/>
        {/* <SecurityServices/> */}
        <StatsSection/>
        
        <AnHonestService/>
        <Experience/>
        <OurTestimonials/>
        {/* <WhyChooseUs />
        <Testimonials />
        <CTASection /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default Home;
