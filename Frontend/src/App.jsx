import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import WorkoutSessions from "./components/WorkoutSessions";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import BMICalculator from "./components/BMICalculator";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="w-full z-40 pb-20">
          <Header />
        </div>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/workout" element={<WorkoutSessions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bmicalculator" element={<BMICalculator />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ToastContainer theme="dark" position="top-center" />
    </>
  );
};

export default App;
