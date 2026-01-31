import { useState, useEffect } from "react";

export default function useTracksEffect() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [expandedResources, setExpandedResources] = useState({});

  // Mostrar botão voltar ao topo
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const toggleResource = (id) => {
    setExpandedResources((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return {
    showBackToTop,
    scrollToTop,
    expandedResources,
    toggleResource,
  };
}