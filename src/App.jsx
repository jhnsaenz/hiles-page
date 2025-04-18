import React, { Suspense, lazy } from "react";
import AnimatedSection from "./components/AnimatedSection";
import ScrollToTop from "./components/ScrollToTop";
import Redes from "./components/Redes";
import Nosotros from "./components/Nosotros";
import Navbar from "./components/Navbar";
import Testimonios from "./components/Testimonios"; // NUEVO
import { ToastContainer } from "react-toastify";
import { Link } from "react-scroll";
import "react-toastify/dist/ReactToastify.css";

// Lazy loading del catálogo y contacto
const Catalogo = lazy(() => import("./components/Catalogo"));
const Contacto = lazy(() => import("./components/Contacto"));

function App() {
  return (
    <div className="text-[#4B2E2E] font-sans scroll-smooth" style={{ backgroundColor: "#EFE5DC" }}>
      <Navbar />

      <main className="pt-24" role="main">
        {/* Inicio */}
        <AnimatedSection
          id="inicio"
          className="min-h-screen flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-7xl font-bold font-[Great_Vibes] text-[#5C3A21] mb-4">
            Hilos
          </h1>
          <p className="text-2xl text-[#7A5033] italic">
            Tejidos a mano con amor y tradición
          </p>
        </AnimatedSection>

        {/* Catálogo */}
        <Suspense fallback={<p className="text-center py-10">Cargando catálogo...</p>}>
          <AnimatedSection id="catalogo">
            <Catalogo />
          </AnimatedSection>
        </Suspense>

        {/* Nosotros */}
        <AnimatedSection id="nosotros">
          <Nosotros />
        </AnimatedSection>

        {/* Testimonios */}
        <AnimatedSection id="testimonios">
          <Testimonios />
        </AnimatedSection>

        {/* Redes */}
        <AnimatedSection id="redes">
          <Redes />
        </AnimatedSection>

        {/* Contacto */}
        <Suspense fallback={<p className="text-center py-10">Cargando contacto...</p>}>
          <AnimatedSection id="contacto">
            <Contacto />
          </AnimatedSection>
        </Suspense>
      </main>

      <ScrollToTop />
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Footer actualizado */}
      <footer className="bg-[#D8C3A5] text-[#5C3A21] py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Enlaces de navegación */}
          <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-medium">
            {[
              { to: "inicio", label: "Inicio" },
              { to: "catalogo", label: "Catálogo" },
              { to: "nosotros", label: "Nosotros" },
              { to: "testimonios", label: "Testimonios" },
              { to: "redes", label: "Redes Sociales" },
              { to: "contacto", label: "Contacto" },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer hover:text-[#7A5033] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Redes sociales */}
          <div className="flex gap-4 text-2xl">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-[#7A5033] transition-colors"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-[#7A5033] transition-colors"
            >
              <i className="fab fa-facebook" />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-[#7A5033] transition-colors"
            >
              <i className="fab fa-whatsapp" />
            </a>
          </div>
        </div>

        {/* Derechos reservados */}
        <p className="text-center text-xs mt-6">
          © {new Date().getFullYear()} Hilos. Todos los derechos reservados.
        </p>
        <p className="text-center text-xs mt-2">
          Hecho por: <span className="font-semibold">INVENTATech</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
