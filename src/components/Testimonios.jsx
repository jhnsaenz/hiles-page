// src/components/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";

const testimonios = [
  {
    id: 1,
    nombre: "María Fernanda",
    texto: "Estoy encantada con mi bolso de Hilos. Se nota que está hecho con dedicación y calidad.",
  },
  {
    id: 2,
    nombre: "Claudia Reyes",
    texto: "Compré uno para mi mamá y quedó fascinada. ¡Recomendado totalmente!",
  },
  {
    id: 3,
    nombre: "Verónica Soto",
    texto: "Un trabajo artesanal hermoso, llegó rápido y en excelente estado.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 bg-[#f9f4f0]" id="testimonios">
      <h2 className="text-4xl font-bold mb-12 text-center text-[#5C4033] font-[Great_Vibes]">
        Lo que dicen nuestras clientas
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonios.map((testimonio, index) => (
          <motion.div
            key={testimonio.id}
            className="bg-white rounded-2xl shadow-md p-6 border border-[#dec6aa]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <p className="text-[#7b5e43] italic mb-4">"{testimonio.texto}"</p>
            <p className="font-semibold text-[#5C4033] text-right">- {testimonio.nombre}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
