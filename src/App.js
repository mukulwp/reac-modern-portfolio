import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import CopyRight from "./components/footer/CopyRight";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/testimonial/Testimonial";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText dark:bg-[#f1f1f1] dark:text-bodyColor">
      <Navbar />
      <div className="max-w-screen-2xl mx-auto px-4 lgl:px-16">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Testimonial />
        <Contact />
        <Footer />
        <CopyRight />
      </div>
    </div>
  );
}

export default App;
