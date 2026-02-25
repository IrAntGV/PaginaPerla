import { Check } from 'lucide-react';
import './App.css';

function App() {
  const valores = ["Transparencia", "Innovación", "Honestidad", "Responsabilidad",
    "Trabajo en equipo", "Calidad", "Empatía",
    "Flexibilidad", "Respeto"];
  return (
    <div className="container">
      <header className='main-header'>
        <h1>El Sabor de la Vida</h1>
        <p className='subtitle'>Salud renal y nutrición consciente</p>
      </header>

      <main>
        <section className="identity-grid">
          {/* Misión */}
          <article className="card">
            <div className="card-header">
              <h2>Misión</h2>
            </div>
            <p>
              Brindar alternativas naturales y saludables que realcen el sabor de los alimentos
              sin comprometer la salud, promoviendo una alimentación consciente que contribuya
              a mejorar la calidad de vida y la adherencia a la alimentación terapéutica en
              personas con enfermedad renal y en quien requiera una dieta baja en sodio.
            </p>
          </article>

          {/* Vision */}
          <article className="card">
            <div className="card-header">
              <h2>Visión</h2>
            </div>
            <p>
              Consolidarnos como una empresa innovadora en el sector de alimentos saludables,
              expandiendo nuestra línea de productos naturales para que cada hogar que busque
              reducir el consumo de sodio, fósforo y potasio encuentre en nosotros la inspiración
              y el sabor necesarios para una vida saludable.
            </p>
          </article>

          {/* Valores */}
          <article className="card values-card">
            <div className="card-header">
              <h2>Valores</h2>
            </div>
            <ul className="values-list">
              {valores.map((valor, index) => (
                <li key={index}>
                  <Check size={18} className='icon-green' strokeWidth={3} />
                  <span>{valor}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        {/* Sección de Publicidad */}
        <section className="product-ads">
          <h2 className="section-title">Nuestros Productos</h2>
          <div className="product-gallery">
            {/* Las imágenes se añadirán aquí en la siguiente fase */}
            <div className="placeholder-card">
              <p>Próximamente: Galería de suplementos y alternativas naturales</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App