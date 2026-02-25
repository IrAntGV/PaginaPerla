import { CheckCircle2 } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Sazonador de Pollo</h1>
      </header>

      <main>
        {/* Sección de Identidad */}
        <section className="identity-section">
          <div className="card">
            <h2>Misión</h2>
            <p>
              Brindar alternativas naturales y saludables que realcen el sabor de los alimentos
              sin comprometer la salud, promoviendo una alimentación consciente que contribuya
              a mejorar la calidad de vida y la adherencia a la alimentación terapéutica en
              personas con enfermedad renal y en quien requiera una dieta baja en sodio.
            </p>
          </div>
          <div className="card">
            <h2>Visión</h2>
            <p>
              Consolidarnos como una empresa innovadora en el sector de alimentos saludables,
              expandiendo nuestra línea de productos naturales para que cada hogar que busque
              reducir el consumo de sodio, fósforo y potasio encuentre en nosotros la inspiración
              y el sabor necesarios para una vida saludable.
            </p>
          </div>
          <div className="card">
            <h2>Valores</h2>
            <ul className="values-list">
              {["Transparencia", "Innovación", "Honestidad", "Responsabilidad",
                "Trabajo en equipo", "Calidad", "Empatía",
                "Flexibilidad", "Respeto"].map((value) => (
                  <li key={value}>
                    <CheckCircle2 size={18} className='icon-value' />
                    {value}
                  </li>
                ))}
            </ul>
          </div>
        </section>

        {/* Sección de Publicidad */}
        <section className="product-ads">
          <h2>Nuestros Productos</h2>
          <div className="image-grid">
            {/* Aquí irán tus etiquetas <img src="..." /> */}
            <p>[Espacio para imágenes publicitarias]</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App