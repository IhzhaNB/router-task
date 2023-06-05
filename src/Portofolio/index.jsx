import React from "react";
import "./style.css";

function Portofolio() {
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

export default Portofolio;
