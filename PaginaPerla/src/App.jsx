import { Check } from 'lucide-react';
import './App.css';

//Importamos imagenes del assets
import heroImg from './assets/Hero.webp'; // 800x533
import polloImg from './assets/Pollo.webp'; // 800x533
import cajaImg from './assets/CajaSazonador.webp'; // 800x533
import trioImg from './assets/Trio.webp'; // 800x800
import manoImg from './assets/Mano.webp'; // 800x800


function App() {
  const valores = ["Transparencia", "Innovación", "Honestidad", "Responsabilidad",
    "Trabajo en equipo", "Calidad", "Empatía",
    "Flexibilidad", "Respeto"];

  const productos = [
    { id: 1, nombre: "Sazona Tu Vida", img: polloImg, tag: "800x533" },
    { id: 2, nombre: "Diferentes", img: trioImg, tag: "800x800" },
    { id: 3, nombre: "Calidad Natural", img: manoImg, tag: "800x800" },
    { id: 4, nombre: "Todos", img: cajaImg, tag: "800x533" }
  ];

  return (
    <div className="container">
      {/* Título principal centrado en la parte superior */}
      <header className="main-header">
        <h1 className="brand-title">EL SABOR DE LA VIDA</h1>
      </header>

      {/* Sección Hero */}
      <section className="hero-banner">
        <img src={heroImg} alt="Hero El Sabor de la Vida" className="hero-img" />
        <div className="hero-text">
        </div>
      </section>

      {/* Grid de Identidad */}
      <div className="identity-grid">
        <article className="card">
          <h2>Misión</h2>
          <p>
            Brindar alternativas naturales y saludables que realcen el sabor de los alimentos sin comprometer la salud,
            promoviendo una alimentación consciente que contribuya a mejorar la calidad de vida y la adherencia
            a la alimentación terapéutica en personas con enfermedad renal y en quien requiera una dieta baja en sodio.
          </p>
        </article>
        <article className="card">
          <h2>Visión</h2>
          <p>
            Consolidarnos como una empresa innovadora en el sector de alimentos saludables,
            expandiendo nuestra línea de productos naturales para que cada hogar que busque reducir el consumo de sodio,
            fósforo y potasio encuentre en nosotros la inspiración y el sabor necesarios para una vida saludable.
          </p>
        </article>
        <article className="card centered-card">
          <h2>Valores</h2>
          <ul className="values-list">
            {valores.map((v, i) => (
              <li key={i}><Check size={16} className="icon-green" /> {v}</li>
            ))}
          </ul>
        </article>
      </div>
      {/* Sección de Productos Actualizada */}
      <section className="product-section">
        {/* Título centrado y actualizado */}
        <h2 className="section-title centered-title">Nuestros Productos</h2>
        <div className="product-grid">
          {productos.map((prod) => (
            <div key={prod.id} className="product-card">
              <div className="image-wrapper">
                <img
                  src={prod.img}
                  alt={prod.nombre}
                  className="product-thumb"
                  loading="lazy"
                />
              </div>
              <div className="product-info">
                <h3>{prod.nombre}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="main-footer">
        <div className="footer-content">
          <p style={{ color: "#000000" }}>© 2026 EL SABOR DE LA VIDA</p>
          <a
            href="https://www.facebook.com/share/p/1Dsmq3KJvd/"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook-button"
          >
            SÍGUENOS EN FACEBOOK
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App