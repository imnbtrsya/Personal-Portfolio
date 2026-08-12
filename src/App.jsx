import { useState } from "react";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Certification from "./components/Certification/Certification";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {

  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <SplashScreen onFinish={() => setLoading(false)} />
      ) : (
        <div className="portfolio">

          <Header />

          <main>
            <Hero />

            <About />

            <Skills />

            <Projects />

            <Certification />

            <Contact />

          </main>

          <Footer />

        </div>
      )}
    </>
  );

}

export default App;