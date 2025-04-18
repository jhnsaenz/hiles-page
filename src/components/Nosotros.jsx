import React from 'react';

const Nosotros = () => {
  return (
    <section
      id="nosotros"
      className="py-16 px-4 bg-[#D7CCC8] text-center"
      aria-labelledby="nosotros-heading"
    >
      <h3
        id="nosotros-heading"
        className="text-4xl font-bold mb-6 text-[#5D4037] font-[Great_Vibes]"
      >
        Sobre Nosotros
      </h3>
      <p className="max-w-2xl mx-auto text-lg text-[#7B5E43]">
        En Hilos nos dedicamos a crear productos tejidos a mano con técnicas
        tradicionales y mucho amor. Cada pieza cuenta una historia de arte,
        paciencia y creatividad. Nuestro objetivo es ofrecer productos únicos y
        sostenibles.
      </p>
    </section>
  );
};

export default Nosotros;
