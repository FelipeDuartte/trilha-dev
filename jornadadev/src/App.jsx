import AppLayout from "./layouts/MainLayout.jsx";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Tracks from "./components/Tracks/Tracks";
import About from "./components/About/About";
import Questions from "./components/Questions/Questions";
import Footer from "./components/Footer/Footer";
import FrontLayout from "./layouts/FrontLayout.jsx";
import Pagefront from "./Page/Frontend/Front.jsx";
import PageBack from "./Page/Backend/Back.jsx";
import PageFull from "./Page/Fullstack/Full.jsx";
import Login from "./Page/Login/Login.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

function AppRoutes() {
  useEffect(() => {
    function revealCardsOnScroll() {
      const cards = document.querySelectorAll(".track-card");
      const triggerBottom = window.innerHeight * 0.85;
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) card.classList.add("visible");
      });
    }

    function revealOnScroll() {
      const elements = document.querySelectorAll(".fade-up");
      const triggerBottom = window.innerHeight * 0.9;
      elements.forEach((el) => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom) el.classList.add("visible");
      });
    }

    window.addEventListener("scroll", revealCardsOnScroll);
    window.addEventListener("scroll", revealOnScroll);

    return () => {
      window.removeEventListener("scroll", revealCardsOnScroll);
      window.removeEventListener("scroll", revealOnScroll);
    };
  }, []);

  return (
    <Routes>
      {/* ROTA PÚBLICA: login — acessada só pelo botão do Header */}
      <Route path="/login" element={<Login />} />

      {/* LAYOUT PRINCIPAL — público */}
      <Route element={<AppLayout />}>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Tracks />
              <Questions />
              <About />
              <Footer />
            </>
          }
        />
      </Route>

      {/* LAYOUT EXCLUSIVO FRONT-END — público */}
      <Route element={<FrontLayout />}>
        <Route path="/front-end"  element={<Pagefront />} />
        <Route path="/Back-end"   element={<PageBack />} />
        <Route path="/full-stack" element={<PageFull />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;