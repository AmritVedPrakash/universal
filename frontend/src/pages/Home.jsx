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
import TransitionProcess from "../components/TransitionProcess.jsx";
import WhyUniversal from "../components/WhyUniversal.jsx";
import ManagementTeam from "../components/aboutus/ManagementTeam.jsx";

function Home() {
  return (
    <>
      {/* <Navbar /> */}

      <main>
        <HeroSection />
       
        <OurClients/>
        
        <ManagementTeam />
        {/* <Team/> */}
        <TransitionProcess/>
        <WhyUniversal/>
        {/* <SecurityServices/> */}
        <StatsSection/>
        
        
        <OurTestimonials/>
        
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default Home;
