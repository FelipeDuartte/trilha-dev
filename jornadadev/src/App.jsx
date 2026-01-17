import "./App.css";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Tracks from "./components/Tracks/Tracks";
import About from "./components/About/About";
import Questions from "./components/Questions/Questions";
import Footer from "./components/Footer/Footer";

function App() {

  useEffect(() => {
    // Reveal cards on scroll
    function revealCardsOnScroll() {
      const cards = document.querySelectorAll(".track-card");
      const triggerBottom = window.innerHeight * 0.85;

      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
          card.classList.add("visible");
        }
      });
    }

    // Reveal fade-up elements on scroll
    function revealOnScroll() {
      const elements = document.querySelectorAll(".fade-up");
      const triggerBottom = window.innerHeight * 0.9;

      elements.forEach((el) => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
          el.classList.add("visible");
        }
      });
    }

    window.addEventListener("scroll", revealCardsOnScroll);
    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("load", revealCardsOnScroll);
    window.addEventListener("load", revealOnScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", revealCardsOnScroll);
      window.removeEventListener("scroll", revealOnScroll);
      window.removeEventListener("load", revealCardsOnScroll);
      window.removeEventListener("load", revealOnScroll);
    };
  }, []);


  return (
    <>
      <Header />
      <Hero />
      <Tracks />
      <Questions />
      <About />
      <Footer />
    </>
  );
}

export default App;
