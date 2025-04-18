import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const HamburgerIcon = ({ isOpen }) => (
  <motion.div
    className="w-6 h-5 flex flex-col justify-between cursor-pointer"
    initial={false}
    animate={isOpen ? "open" : "closed"}
    variants={{
      open: { rotate: 45 },
      closed: { rotate: 0 },
    }}
  >
    <motion.span
      className="block h-[3px] bg-amber-100 rounded origin-left"
      variants={{
        closed: { rotate: 0, y: 0 },
        open: { rotate: 45, y: 6 },
      }}
      transition={{ duration: 0.3 }}
    />
    <motion.span
      className="block h-[3px] bg-amber-100 rounded"
      variants={{
        closed: { opacity: 1 },
        open: { opacity: 0 },
      }}
      transition={{ duration: 0.3 }}
    />
    <motion.span
      className="block h-[3px] bg-amber-100 rounded origin-left"
      variants={{
        closed: { rotate: 0, y: 0 },
        open: { rotate: -45, y: -6 },
      }}
      transition={{ duration: 0.3 }}
    />
  </motion.div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const links = [
    { to: "inicio", label: "Inicio" },
    { to: "catalogo", label: "Catálogo" },
    { to: "nosotros", label: "Nosotros" },
    { to: "testimonios", label: "Testimonios" },
    { to: "redes", label: "Redes Sociales" },
    { to: "contacto", label: "Contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#6d4c41] text-amber-100 shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-3xl font-[Great_Vibes] text-amber-100">Hilos</h1>

        {/* Escritorio */}
        <ul className="hidden md:flex gap-6 text-lg">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer hover:text-amber-300 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Móvil */}
        <button onClick={toggleMenu} className="md:hidden">
          <HamburgerIcon isOpen={isOpen} />
        </button>
      </nav>

      {/* Menú móvil deslizante */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Fondo oscuro */}
            <motion.div
              onClick={closeMenu}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Panel lateral */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 bg-[#5d4037] text-amber-100 z-50 p-6 shadow-lg md:hidden"
            >
              <ul className="flex flex-col gap-6 text-lg mt-10">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      onClick={closeMenu}
                      className="cursor-pointer hover:text-amber-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;



