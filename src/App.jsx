import "./App.css";
import About from "./Portofolio/components/about/About";
import Contact from "./Portofolio/components/contact/Contact";
import Footer from "./Portofolio/components/footer/Footer";
import Header from "./Portofolio/components/header/Header";
import Home from "./Portofolio/components/home/Home";
import Qualification from "./Portofolio/components/qualification/Qualification";
import Scrollup from "./Portofolio/components/scrollup/Scrollup";
// import Services from "./Portofolio/components/services/Services";
import Skills from "./Portofolio/components/skills/Skills";
// import Testimonials from "./Portofolio/components/testimonials/Testimonials";
import Work from "./Portofolio/components/work/Work";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        {/* <Services /> */}
        <Qualification />
        <Work />
        {/* <Testimonials /> */}
        <Contact />
      </main>

      <Footer />
      <Scrollup />
    </>
  );
}

export default App;
