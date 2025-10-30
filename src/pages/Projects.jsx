import { useState } from 'react'
import './Projects.css'

function Projects() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Portfolio QA Automation 1.0',
      description: 'Mi primer portfolio como QA Automation Engineer, mostrando mis proyectos de testing y automatización.',
      category: 'portfolio',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '🧪',
      link: 'https://vazquez-ernesto.github.io/-Portafolio-QA-Automation/',
      github: 'https://github.com/Vazquez-Ernesto/-Portafolio-QA-Automation'
    },
    {
      id: 2,
      title: 'Automatización E2E - Getnet',
      description: 'Framework de pruebas automatizadas E2E para facturación de terminales POSNET y homologación de billeteras digitales.',
      category: 'automation',
      technologies: ['Cypress', 'JavaScript', 'CI/CD'],
      image: '🤖',
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Testing Suite - Nave Negocios',
      description: 'Suite completa de pruebas de regresión y exploratorias para Nave (Banco Galicia). Reducción del 40% en tiempos de regresión.',
      category: 'automation',
      technologies: ['Selenium', 'Python', 'Jira', 'X-Ray'],
      image: '🔧',
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'API Testing Framework',
      description: 'Framework de automatización para pruebas de APIs REST con validación de contratos y performance.',
      category: 'api',
      technologies: ['Postman', 'JavaScript', 'Newman', 'JMeter'],
      image: '🔌',
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Playwright E2E Testing',
      description: 'Implementación de pruebas E2E con Playwright y TypeScript para aplicaciones web modernas.',
      category: 'automation',
      technologies: ['Playwright', 'TypeScript', 'GitHub Actions'],
      image: '🎭',
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'CI/CD Pipeline QA',
      description: 'Pipeline de integración continua con ejecución automatizada de pruebas y reportes en Jenkins.',
      category: 'devops',
      technologies: ['Jenkins', 'Git', 'Selenium', 'Docker'],
      image: '🚀',
      link: '#',
      github: '#'
    }
  ]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter)

  return (
    <div className="projects">
      <section className="projects-hero section">
        <div className="container">
          <h1 className="fade-in">Mis Proyectos de QA Automation</h1>
          <p className="projects-subtitle">
            Frameworks de automatización, testing de APIs y soluciones de calidad
          </p>
        </div>
      </section>

      <section className="projects-content section">
        <div className="container">
          <div className="filters">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              Todos
            </button>
            <button
              className={`filter-btn ${filter === 'automation' ? 'active' : ''}`}
              onClick={() => setFilter('automation')}
            >
              Automation
            </button>
            <button
              className={`filter-btn ${filter === 'api' ? 'active' : ''}`}
              onClick={() => setFilter('api')}
            >
              API Testing
            </button>
            <button
              className={`filter-btn ${filter === 'devops' ? 'active' : ''}`}
              onClick={() => setFilter('devops')}
            >
              DevOps
            </button>
            <button
              className={`filter-btn ${filter === 'portfolio' ? 'active' : ''}`}
              onClick={() => setFilter('portfolio')}
            >
              Portfolio
            </button>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card card fade-in">
                <div className="project-image">
                  <span>{project.image}</span>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.link !== '#' && (
                      <a
                        href={project.link}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver Proyecto
                      </a>
                    )}
                    {project.github !== '#' && (
                      <a
                        href={project.github}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    )}
                    {project.link === '#' && project.github === '#' && (
                      <span className="project-link" style={{opacity: 0.6, cursor: 'default'}}>
                        Proyecto Privado
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <p>No hay proyectos en esta categoría todavía.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Projects
