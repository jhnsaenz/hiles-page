// src/components/Seo.jsx
import { Helmet } from "react-helmet";

const Seo = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title ? `${title} | Hilos` : "Hilos - Tejidos artesanales"}</title>
      <meta name="description" content={description || "Bolsos y accesorios tejidos a mano con amor."} />
      <meta name="keywords" content="tejidos, artesanía, bolsos, hechos a mano, hilos, handmade" />
      <meta name="author" content="Hilos" />
      <meta property="og:title" content={title || "Hilos"} />
      <meta property="og:description" content={description || "Bolsos y accesorios tejidos a mano con amor."} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default Seo;
