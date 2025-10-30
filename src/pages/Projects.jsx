import { useState } from 'react'
import './Projects.css'

function Projects() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Portfolio 1.0',
      description: 'Mi primer portfolio creado con HTML, CSS y JavaScript vanilla. Donde comencé mi viaje en el desarrollo web.',
      category: 'web',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '🌐',
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Portfolio 2.0',
      description: 'Versión mejorada de mi portfolio usando React, con diseño moderno y mejores prácticas.',
      category: 'web',
      technologies: ['React', 'CSS', 'Vite'],
      image: '⚛️',
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'App de Tareas',
      description: 'Aplicación para gestionar tareas diarias con funcionalidad CRUD completa.',
      category: 'app',
      technologies: ['React', 'LocalStorage', 'CSS'],
      image: '✅',
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Landing Page',
      description: 'Diseño responsivo de landing page para negocio local con formulario de contacto.',
      category: 'web',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: '🎨',
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Blog Personal',
      description: 'Sistema de blog con gestión de posts y comentarios.',
      category: 'blog',
      technologies: ['React', 'React Router', 'CSS'],
      image: '📝',
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Dashboard Analítico',
      description: 'Panel de control con gráficos y visualización de datos.',
      category: 'app',
      technologies: ['React', 'JavaScript', 'CSS'],
      image: '📊',
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
          <h1 className="fade-in">Mis Proyectos</h1>
          <p className="projects-subtitle">
            Una colección de mis trabajos y proyectos de aprendizaje
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
              className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
              onClick={() => setFilter('web')}
            >
              Web
            </button>
            <button
              className={`filter-btn ${filter === 'app' ? 'active' : ''}`}
              onClick={() => setFilter('app')}
            >
              Apps
            </button>
            <button
              className={`filter-btn ${filter === 'blog' ? 'active' : ''}`}
              onClick={() => setFilter('blog')}
            >
              Blog
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
                    <a
                      href={project.link}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Demo
                    </a>
                    <a
                      href={project.github}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
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
