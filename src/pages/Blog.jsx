import { Link } from 'react-router-dom'
import './Blog.css'

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Mi viaje aprendiendo React',
      excerpt: 'Descubre cómo comencé con React y las lecciones que aprendí en el camino. De HTML/CSS/JS a componentes modernos.',
      date: '15 Enero 2025',
      category: 'Desarrollo',
      readTime: '5 min lectura',
      image: '⚛️'
    },
    {
      id: 2,
      title: 'Creando mi primer Portfolio',
      excerpt: 'La historia detrás de mi primer portfolio con HTML, CSS y JavaScript. Los retos y soluciones que encontré.',
      date: '10 Enero 2025',
      category: 'Proyectos',
      readTime: '4 min lectura',
      image: '🌐'
    },
    {
      id: 3,
      title: 'CSS Grid vs Flexbox: ¿Cuándo usar cada uno?',
      excerpt: 'Una guía práctica sobre cuándo usar CSS Grid y cuándo usar Flexbox para tus layouts.',
      date: '5 Enero 2025',
      category: 'CSS',
      readTime: '6 min lectura',
      image: '🎨'
    },
    {
      id: 4,
      title: 'JavaScript ES6+: Features esenciales',
      excerpt: 'Las características más importantes de ES6+ que todo desarrollador debe conocer y usar.',
      date: '28 Diciembre 2024',
      category: 'JavaScript',
      readTime: '8 min lectura',
      image: '💻'
    },
    {
      id: 5,
      title: 'Componentes reutilizables en React',
      excerpt: 'Aprende a crear componentes React que puedas reutilizar en múltiples proyectos.',
      date: '20 Diciembre 2024',
      category: 'React',
      readTime: '7 min lectura',
      image: '🔧'
    },
    {
      id: 6,
      title: 'Git & GitHub para principiantes',
      excerpt: 'Una introducción práctica a Git y GitHub para comenzar a versionar tus proyectos.',
      date: '15 Diciembre 2024',
      category: 'Herramientas',
      readTime: '5 min lectura',
      image: '📦'
    }
  ]

  return (
    <div className="blog">
      <section className="blog-hero section">
        <div className="container">
          <h1 className="fade-in">Blog</h1>
          <p className="blog-subtitle">
            Compartiendo mi aprendizaje y experiencias en desarrollo web
          </p>
        </div>
      </section>

      <section className="blog-content section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card card fade-in">
                <div className="blog-card-image">
                  <span>{post.image}</span>
                </div>
                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span className="blog-category">{post.category}</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                  <h2>
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p>{post.excerpt}</p>
                  <div className="blog-footer">
                    <span className="read-time">{post.readTime}</span>
                    <Link to={`/blog/${post.id}`} className="read-more">
                      Leer más →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
