import React from 'react';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-r from-[#5C4033] to-[#7b5e43]"
      aria-label="Sección principal de presentación"
    >
      {/* Capa de textura de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url(/images/texture.png)' }}  {/* Actualizamos aquí */}
      ></div>
      
      {/* Superposición oscura para mejorar la visibilidad del texto */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Contenido principal */}
      <div className="relative z-10 text-white">
        <h1 className="text-6xl sm:text-7xl font-bold text-amber-50 tracking-wide font-[Great_Vibes]">
          Hilos
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-amber-200">
          Tejidos a mano con amor y tradición
        </p>
      </div>
    </section>
  );
};

export default Hero;
