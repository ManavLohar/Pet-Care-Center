import React from "react";
import About from "./components/About/About";
import Activities from "./components/Activities/Activities";
import Categories from "./components/Categories/Categories";
import Features from "./components/Features/Features";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ClientsReview from "./components/ClientsReview/ClientsReview";
import Services from "./components/Services/Services";
import Suggestions from "./components/Suggestion/Suggestions";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import News from "./components/News/News";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Features />
      <WhatWeDo />
      <Gallery />
      <Categories />
      <Activities />
      <Suggestions />
      <ClientsReview />
      <News />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
