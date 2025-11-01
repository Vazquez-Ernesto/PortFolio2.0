import './About.css'

function About() {
  const skills = [
    'Cypress', 'Selenium', 'Playwright', 'JavaScript', 'Python', 'TypeScript',
    'Java', 'Postman', 'Bruno', 'JMeter', 'SQL', 'Git/GitHub/GitLab',
    'Jira', 'Confluence', 'X-Ray', 'Zephyr', 'Jenkins', 'CI/CD',
    'Scrum', 'Agile', 'API Testing', 'E2E Testing', 'Swagger', 'OCP/Grafana'
  ]

  return (
    <div className="about">
      <section className="about-hero section">
        <div className="container">
        <h1>Sobre Mí</h1>
          <div className="about-intro">
            <div className="about-image">
              <div className="image-placeholder">
                <span>👨‍💻</span>
              </div>
            </div>
            <div className="about-text">
              <h2>Ernesto Alexis Vázquez</h2>
              <h3 style={{color: 'var(--primary-color)', marginBottom: 'var(--spacing-md)'}}>
                QA Automation Engineer | Buenos Aires, Argentina
              </h3>
              <p>
               Después de 4 años asegurando la calidad de productos para la banca y fintech, entendí algo clave: <b>no quiero solo probar software, quiero crearlo.</b>
               Por eso estoy dando el siguiente paso: <b>convertir toda mi experiencia en automatización, análisis y optimización en el motor de mi propia empresa tecnológica.</b> <br />
              </p>
              <p>
               Realice pruebas exploratorias, smoke, regresión y E2E, utilizando herramientas como Cypress, Selenium y Playwright.
              </p>
              <p>
                Soy apasionado por la tecnología y el arte de resolver problemas, con más de 4 años de experiencia en testing y y 2 años de experiencia en automatización de pruebas.
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
          <h2 className="section-title">Experiencia Profesional</h2>
          <div className="timeline">
            <div className="timeline-item card">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>QA Automation Engineer - Telecom Argentina</h3>
                <p className="timeline-date">Junio 2025 - Presente (Contratado por CFOTech)</p>
                <p>
                  Responsable de asegurar la calidad funcional de una aplicación core para
                  tasación y mediación, dentro del ecosistema de Telecom Argentina.
                </p>
              </div>
            </div>

            <div className="timeline-item card">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>QA Analyst Automation - Getnet Argentina</h3>
                <p className="timeline-date">Diciembre 2024 - Junio 2025 (Contratado por RHT)</p>
                <p>
                  Trabaje en Getnet (Banco Santander) en el modelo de negocio Agrupador.
                  Participé en tres iniciativas clave: facturación de terminales (POSNET),
                  homologación de billeteras digitales para pagos QR, y onboarding a través
                  de un nuevo canal de ventas.
                </p>
              </div>
            </div>

            <div className="timeline-item card">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>QA Analyst - Nave Negocios</h3>
                <p className="timeline-date">Diciembre 2022 - Diciembre 2024 (Contratado por TCS)</p>
                <p>
                  Proyecto Nave (Banco Galicia), asegurando su calidad funcional a través de pruebas
                  exhaustivas y metodologías ágiles. Realización de pruebas E2E, pruebas de
                  regresión, exploratorias y validación de funcionalidades clave. Gestión de
                  bugs y reportes en entornos de pre-producción (UAT).
                </p>
              </div>
            </div>

            <div className="timeline-item card">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Quality Assurance Analyst - UPEX</h3>
                <p className="timeline-date">Junio 2021 - Enero 2022</p>
                <p>
                  Moderador de la Academia Upex. Inducción de nuevos miembros, corrección de
                  User Stories, mentoría en metodologías ágiles (Scrum). Trabajo con Jira,
                  X-ray, diseño de Test Sets, Test Cases y Test Execution. Pruebas exploratorias,
                  smoke y regresión.
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
              <a href="mailto:ernestoalexisvazquez@gmail.com" className="contact-link">
                <span>📧</span> ernestoalexisvazquez@gmail.com
              </a>
              <a href="https://github.com/Vazquez-Ernesto" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span>💻</span> GitHub
              </a>
              <a href="https://www.linkedin.com/in/ernestoavazquez" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span>💼</span> LinkedIn
              </a>
              <a href="tel:+543704824222" className="contact-link">
                <span>📱</span> +54 370 482 4222
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
