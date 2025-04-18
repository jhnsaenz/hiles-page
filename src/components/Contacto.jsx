// src/components/Contacto.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from 'emailjs-com';

// Validación con yup
const schema = yup.object().shape({
  nombre: yup.string().required('El nombre es obligatorio'),
  email: yup.string().email('Correo inválido').required('El correo es obligatorio'),
  mensaje: yup.string().min(10, 'El mensaje debe tener al menos 10 caracteres').required('El mensaje es obligatorio'),
});

const Contacto = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Función para manejar el envío del formulario
  const onSubmit = (data) => {
    // Configura tu service_id, template_id y user_id aquí
    const serviceID = 'service_phypjtg';
    const templateID = 'template_contacto';
    const userID = 'CWqXmlI3TGYdQ1TXu';

    // Enviar correo con EmailJS
    emailjs.send(serviceID, templateID, data, userID)
      .then((response) => {
        console.log('Mensaje enviado', response);
        alert('Mensaje enviado con éxito!');
        reset(); // Limpia el formulario
      }, (error) => {
        console.error('Error al enviar mensaje', error);
        alert('Hubo un error al enviar el mensaje.');
      });
  };

  return (
    <section id="contacto" className="py-16 px-4 bg-[#D7CCC8]" aria-labelledby="contacto-heading">
      <h3 id="contacto-heading" className="text-4xl font-bold text-center mb-10 text-[#5D4037]" tabIndex="0">
        Contacto
      </h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto bg-white p-6 rounded shadow-lg"
        noValidate
        aria-label="Formulario de contacto"
      >
        <div className="mb-4">
          <label htmlFor="nombre" className="block font-medium mb-1 text-[#5D4037]">
            Nombre
          </label>
          <input
            {...register('nombre')}
            id="nombre"
            type="text"
            className="w-full border border-[#A0845C] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#6D4C41]"
            aria-invalid={errors.nombre ? 'true' : 'false'}
            aria-describedby="nombre-error"
          />
          {errors.nombre && (
            <p id="nombre-error" className="text-red-600 text-sm mt-1">
              {errors.nombre.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1 text-[#5D4037]">
            Correo electrónico
          </label>
          <input
            {...register('email')}
            id="email"
            type="email"
            className="w-full border border-[#A0845C] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#6D4C41]"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby="email-error"
          />
          {errors.email && (
            <p id="email-error" className="text-red-600 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="mensaje" className="block font-medium mb-1 text-[#5D4037]">
            Mensaje
          </label>
          <textarea
            {...register('mensaje')}
            id="mensaje"
            rows="4"
            className="w-full border border-[#A0845C] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#6D4C41]"
            aria-invalid={errors.mensaje ? 'true' : 'false'}
            aria-describedby="mensaje-error"
          />
          {errors.mensaje && (
            <p id="mensaje-error" className="text-red-600 text-sm mt-1">
              {errors.mensaje.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#6D4C41] text-white py-2 rounded hover:bg-[#5D4037] transition"
        >
          Enviar mensaje
        </button>

        {isSubmitSuccessful && (
          <p className="text-green-600 text-center mt-4">Mensaje enviado con éxito.</p>
        )}
      </form>
    </section>
  );
};

export default Contacto;
