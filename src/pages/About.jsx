import './About.css'

function About() {
  const skills = [
    'HTML5', 'CSS3', 'JavaScript', 'React', 'Git', 'Responsive Design',
    'Node.js', 'Vite', 'React Router', 'ES6+', 'npm', 'REST APIs'
  ]

  return (
    <div className="about">
      <section className="about-hero section">
        <div className="container">
          <h1 className="fade-in">Sobre Mí</h1>
          <div className="about-intro">
            <div className="about-image">
              <div className="image-placeholder">
                <span>👨‍💻</span>
              </div>
            </div>
            <div className="about-text">
              <h2>Hola! Soy un Desarrollador Web</h2>
              <p>
                Hace 2 años comencé mi viaje en el desarrollo web con HTML, CSS y JavaScript.
                Hoy estoy evolucionando mis habilidades con React y tecnologías modernas.
              </p>
              <p>
                Me apasiona crear experiencias digitales que sean tanto funcionales como
                hermosas. Cada proyecto es una oportunidad para aprender algo nuevo y
                mejorar mis habilidades.
              </p>
              <p>
                Este portfolio es la versión 2.0 de mi primer proyecto, demostrando mi
                crecimiento y dedicación al aprendizaje continuo en desarrollo web.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-detail section">
        <div className="container">
          <h2 className="section-title">Habilidades Técnicas</h2>
          <div className="skills-tags">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="experience section">
        <div className="container">
          <h2 className="section-title">Mi Trayectoria</h2>
          <div className="timeline">
            <div className="timeline-item card">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Presente - Aprendizaje Continuo</h3>
                <p className="timeline-date">2025</p>
                <p>
                  Desarrollando Portfolio 2.0 con React, mejorando habilidades en
                  componentes modernos y state management.
                </p>
              </div>
            </div>

            <div className="timeline-item card">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Primeros Proyectos</h3>
                <p className="timeline-date">2023</p>
                <p>
                  Creé mi primer portfolio con HTML, CSS y JavaScript vanilla.
                  Aprendí los fundamentos del desarrollo web.
                </p>
              </div>
            </div>

            <div className="timeline-item card">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Inicio en Programación</h3>
                <p className="timeline-date">2023</p>
                <p>
                  Comencé mi viaje en el desarrollo web aprendiendo HTML, CSS y
                  JavaScript desde cero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-info section">
        <div className="container">
          <div className="contact-card card">
            <h2>Conecta Conmigo</h2>
            <p>Estoy siempre abierto a nuevas oportunidades y colaboraciones</p>
            <div className="contact-links">
              <a href="mailto:tu-email@ejemplo.com" className="contact-link">
                <span>📧</span> Email
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span>💻</span> GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span>💼</span> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
