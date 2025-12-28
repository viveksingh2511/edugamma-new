import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import Modules from "./components/Modules";
import Workflow from "./components/Workflow";
import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WhyChoose />
      <Modules />
      <Workflow />
      <Benefits />
      <CTA />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
