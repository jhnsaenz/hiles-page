// src/components/Redes.jsx
import React from "react";

const Redes = () => {
  return (
    <section
      id="redes"
      className="py-16 px-4 bg-[#D7CCC8] text-center"
      aria-labelledby="redes-heading"
    >
      <h3
        id="redes-heading"
        className="text-4xl font-bold mb-6 text-[#5D4037] font-[Great_Vibes]"
      >
        Redes Sociales
      </h3>
      <p className="mb-4 text-[#7B5E43]">
        Síguenos en nuestras plataformas:
      </p>

      <div
        className="flex justify-center space-x-6 text-4xl"
        role="navigation"
        aria-label="Enlaces a redes sociales"
      >
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-[#6D4C41] focus:outline-none focus:ring-2 focus:ring-[#6D4C41] rounded-full"
        >
          📸
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-[#6D4C41] focus:outline-none focus:ring-2 focus:ring-[#6D4C41] rounded-full"
        >
          📘
        </a>
        <a
          href="https://wa.me/3175846819"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="hover:text-[#6D4C41] focus:outline-none focus:ring-2 focus:ring-[#6D4C41] rounded-full"
        >
          📱
        </a>
      </div>
    </section>
  );
};

export default Redes;
