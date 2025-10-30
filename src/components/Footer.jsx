import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Ernesto Vázquez</h3>
            <p className="text-muted">
              QA Automation Engineer especializado en asegurar la calidad de productos digitales.
            </p>
            <p className="text-muted" style={{marginTop: '0.5rem'}}>
              📍 Buenos Aires, Argentina
            </p>
          </div>

          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li><a href="/">Inicio</a></li>
              <li><a href="/about">Sobre Mí</a></li>
              <li><a href="/projects">Proyectos</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contacto</h4>
            <div className="social-links">
              <a
                href="mailto:ernestoalexisvazquez@gmail.com"
                aria-label="Email"
              >
                Email
              </a>
              <a
                href="https://github.com/Vazquez-Ernesto"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ernestoavazquez"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href="tel:+543704824222"
                aria-label="Teléfono"
              >
                Teléfono
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Ernesto Vázquez - QA Automation Engineer. Hecho con React. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
