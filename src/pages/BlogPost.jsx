import { useParams, Link } from 'react-router-dom'
import './BlogPost.css'

function BlogPost() {
  const { id } = useParams()

  // En una aplicación real, esto vendría de una API o base de datos
  const post = {
    id: id,
    title: 'Mi viaje aprendiendo React',
    date: '15 Enero 2025',
    category: 'Desarrollo',
    readTime: '5 min lectura',
    image: '⚛️',
    content: `
      <h2>Introducción</h2>
      <p>
        Hace dos años comencé mi viaje en el desarrollo web con HTML, CSS y JavaScript.
        Hoy, estoy emocionado de compartir mi experiencia aprendiendo React, uno de
        los frameworks más populares del momento.
      </p>

      <h2>¿Por qué React?</h2>
      <p>
        Después de trabajar con JavaScript vanilla por un tiempo, me di cuenta de que
        necesitaba algo más estructurado para proyectos más grandes. React me ofreció:
      </p>
      <ul>
        <li>Una forma declarativa de construir interfaces</li>
        <li>Componentes reutilizables</li>
        <li>Un ecosistema enorme de herramientas y librerías</li>
        <li>Excelente documentación y comunidad</li>
      </ul>

      <h2>Los primeros pasos</h2>
      <p>
        Comencé con los conceptos básicos: componentes, props, y state. Al principio,
        el concepto de JSX me pareció extraño, pero rápidamente me acostumbré a escribir
        HTML dentro de JavaScript.
      </p>

      <h3>Mi primer componente</h3>
      <p>
        Recuerdo claramente mi primer componente funcional. Era simple, pero funcional:
      </p>
      <pre><code>function Welcome({ name }) {
  return <h1>Hola, {name}!</h1>
}</code></pre>

      <h2>Desafíos y aprendizajes</h2>
      <p>
        El camino no fue siempre fácil. Algunos conceptos que encontré desafiantes:
      </p>
      <ul>
        <li><strong>Hooks:</strong> useState y useEffect requirieron práctica para dominarlos</li>
        <li><strong>Props vs State:</strong> Entender cuándo usar cada uno</li>
        <li><strong>Flujo de datos:</strong> El concepto de datos unidireccionales</li>
      </ul>

      <h2>Recursos que me ayudaron</h2>
      <p>
        Durante mi aprendizaje, estos recursos fueron invaluables:
      </p>
      <ul>
        <li>La documentación oficial de React</li>
        <li>Tutoriales en YouTube</li>
        <li>Proyectos prácticos pequeños</li>
        <li>Comunidades en línea y foros</li>
      </ul>

      <h2>Consejos para principiantes</h2>
      <p>
        Si estás comenzando con React, aquí están mis consejos:
      </p>
      <ol>
        <li>Domina JavaScript primero - React es JavaScript</li>
        <li>Practica construyendo proyectos pequeños</li>
        <li>No te apresures con librerías complejas</li>
        <li>Lee el código de otros desarrolladores</li>
        <li>No tengas miedo de cometer errores</li>
      </ol>

      <h2>Conclusión</h2>
      <p>
        Aprender React ha sido una experiencia transformadora en mi viaje como
        desarrollador. Me ha abierto nuevas puertas y me ha dado herramientas
        poderosas para crear aplicaciones web modernas.
      </p>
      <p>
        Este portfolio es prueba de lo lejos que he llegado, y estoy emocionado
        por seguir aprendiendo y creciendo como desarrollador.
      </p>
    `
  }

  return (
    <div className="blog-post">
      <div className="blog-post-hero">
        <div className="container">
          <Link to="/blog" className="back-link">
            ← Volver al Blog
          </Link>
          <div className="post-header">
            <span className="post-category">{post.category}</span>
            <h1 className="fade-in">{post.title}</h1>
            <div className="post-meta">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      <article className="blog-post-content section">
        <div className="container">
          <div className="post-image">
            <span>{post.image}</span>
          </div>
          <div
            className="post-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="post-footer">
            <Link to="/blog" className="btn btn-secondary">
              ← Volver al Blog
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}

export default BlogPost
