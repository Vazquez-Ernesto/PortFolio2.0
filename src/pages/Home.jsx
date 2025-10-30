import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content fade-in">
            <h1 className="hero-title">
              Hola, soy <span className="highlight">Desarrollador Web</span>
            </h1>
            <p className="hero-subtitle">
              Creando experiencias digitales increíbles con React, JavaScript y tecnologías modernas
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn">
                Ver Proyectos
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Conoce más
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section section">
        <div className="container">
          <h2 className="section-title">Tecnologías</h2>
          <div className="skills-grid">
            <div className="skill-card card">
              <div className="skill-icon">⚛️</div>
              <h3>React</h3>
              <p>Desarrollo de interfaces modernas y componentes reutilizables</p>
            </div>
            <div className="skill-card card">
              <div className="skill-icon">💻</div>
              <h3>JavaScript</h3>
              <p>ES6+, desarrollo frontend y backend con Node.js</p>
            </div>
            <div className="skill-card card">
              <div className="skill-icon">🎨</div>
              <h3>CSS</h3>
              <p>Diseño responsivo, animaciones y layouts modernos</p>
            </div>
            <div className="skill-card card">
              <div className="skill-icon">🔧</div>
              <h3>Herramientas</h3>
              <p>Git, Vite, npm, y más herramientas de desarrollo</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-content card">
            <h2>¿Tienes un proyecto en mente?</h2>
            <p>Hablemos sobre cómo puedo ayudarte a hacer realidad tus ideas</p>
            <Link to="/about" className="btn">
              Contáctame
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
