import { useParams, Link } from 'react-router-dom'
import './BlogPost.css'

function BlogPost() {
  const { id } = useParams()

  // Array de posts con contenido completo
  const blogPosts = [
    {
      id: 1,
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
    },
    {
      id: 2,
      title: 'Creando mi primer Portfolio',
      date: '10 Enero 2025',
      category: 'Proyectos',
      readTime: '4 min lectura',
      image: '🌐',
      content: `
        <h2>El inicio de mi viaje</h2>
        <p>
          Todo comenzó cuando decidí que necesitaba un lugar donde mostrar mi trabajo.
          Como muchos desarrolladores, empecé con lo básico: HTML, CSS y JavaScript puro.
        </p>

        <h2>Desafíos técnicos</h2>
        <p>
          El mayor desafío fue crear un diseño responsive que funcionara bien en todos
          los dispositivos. CSS Grid y Flexbox fueron mis mejores aliados.
        </p>

        <h2>Lecciones aprendidas</h2>
        <ul>
          <li>La importancia de la accesibilidad web</li>
          <li>Optimización del rendimiento</li>
          <li>La evolución constante del desarrollo web</li>
        </ul>

        <h2>Conclusión</h2>
        <p>
          Ese primer portfolio me enseñó más que cualquier tutorial. Ahora, con React
          y herramientas modernas, puedo crear experiencias mucho más ricas.
        </p>
      `
    },
    {
      id: 3,
      title: 'CSS Grid vs Flexbox: ¿Cuándo usar cada uno?',
      date: '5 Enero 2025',
      category: 'CSS',
      readTime: '6 min lectura',
      image: '🎨',
      content: `
        <h2>Entendiendo las diferencias</h2>
        <p>
          CSS Grid y Flexbox son dos sistemas de layout poderosos, pero sirven para
          propósitos diferentes. Entender cuándo usar cada uno es crucial para
          crear layouts eficientes.
        </p>

        <h2>¿Cuándo usar Flexbox?</h2>
        <ul>
          <li>Layout unidimensional (filas o columnas)</li>
          <li>Alinear elementos en una dirección</li>
          <li>Contenido dinámico</li>
          <li>Componentes pequeños</li>
        </ul>

        <h2>¿Cuándo usar CSS Grid?</h2>
        <ul>
          <li>Layout bidimensional</li>
          <li>Áreas complejas de la página</li>
          <li>Cuando necesitas control preciso sobre filas y columnas</li>
          <li>Diseños complejos con superposición</li>
        </ul>

        <h2>Ejemplos prácticos</h2>
        <p>
          En este portfolio, uso Flexbox para la navegación y elementos pequeños,
          mientras que CSS Grid maneja el layout principal de las secciones.
        </p>
      `
    },
    {
      id: 4,
      title: 'JavaScript ES6+: Features esenciales',
      date: '28 Diciembre 2024',
      category: 'JavaScript',
      readTime: '8 min lectura',
      image: '💻',
      content: `
        <h2>La evolución de JavaScript</h2>
        <p>
          ES6 (ECMAScript 2015) revolucionó JavaScript, introduciendo características
          que hacen el código más legible y poderoso.
        </p>

        <h2>Arrow Functions</h2>
        <pre><code>// Antes
function sum(a, b) {
  return a + b
}

// Después
const sum = (a, b) => a + b</code></pre>

        <h2>Destructuring</h2>
        <pre><code>const user = { name: 'Juan', age: 25 }
const { name, age } = user
console.log(name, age) // Juan 25</code></pre>

        <h2>Template Literals</h2>
        <pre><code>const name = 'Juan'
console.log(\`Hola, \${name}!\`) // Hola, Juan!</code></pre>

        <h2>Por qué usar ES6+</h2>
        <ul>
          <li>Código más limpio y legible</li>
          <li>Menos errores comunes</li>
          <li>Mejor mantenibilidad</li>
          <li>Características modernas que facilitan el desarrollo</li>
        </ul>
      `
    },
    {
      id: 5,
      title: 'Componentes reutilizables en React',
      date: '20 Diciembre 2024',
      category: 'React',
      readTime: '7 min lectura',
      image: '🔧',
      content: `
        <h2>La importancia de la reutilización</h2>
        <p>
          Los componentes reutilizables son el corazón de React. Permiten crear
          interfaces consistentes y mantener el código DRY (Don't Repeat Yourself).
        </p>

        <h2>Ejemplo de componente reutilizable</h2>
        <pre><code>function Button({ children, variant = 'primary', onClick }) {
  return (
    <button 
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}</code></pre>

        <h2>Beneficios</h2>
        <ul>
          <li><strong>Consistencia:</strong> Todos los botones lucen igual</li>
          <li><strong>Mantenibilidad:</strong> Cambios en un lugar afectan todos</li>
          <li><strong>Velocidad de desarrollo:</strong> Menos código duplicado</li>
          <li><strong>Testing:</strong> Más fácil probar componentes</li>
        </ul>

        <h2>Patrones comunes</h2>
        <ul>
          <li>Componentes de presentación vs contenedor</li>
          <li>Higher-Order Components (HOC)</li>
          <li>Render Props</li>
          <li>Hooks personalizados</li>
        </ul>
      `
    },
    {
      id: 6,
      title: 'Git & GitHub para principiantes',
      date: '15 Diciembre 2024',
      category: 'Herramientas',
      readTime: '5 min lectura',
      image: '📦',
      content: `
        <h2>¿Por qué Git?</h2>
        <p>
          Git es el sistema de control de versiones más popular por una razón.
          Te permite rastrear cambios, colaborar con otros y mantener un historial
          de tu proyecto.
        </p>

        <h2>Comandos básicos</h2>
        <ul>
          <li><code>git init</code> - Inicializar repositorio</li>
          <li><code>git add .</code> - Agregar archivos</li>
          <li><code>git commit -m "mensaje"</code> - Confirmar cambios</li>
          <li><code>git push</code> - Subir a repositorio remoto</li>
          <li><code>git pull</code> - Descargar cambios</li>
        </ul>

        <h2>GitHub como portafolio</h2>
        <p>
          GitHub no solo es para almacenar código. Es una plataforma para mostrar
          tus habilidades, colaborar en proyectos open source y construir tu
          presencia como desarrollador.
        </p>

        <h2>Consejos para principiantes</h2>
        <ol>
          <li>Usa commits descriptivos</li>
          <li>Crea una rama para cada feature</li>
          <li>Revisa el historial regularmente</li>
          <li>Aprende sobre .gitignore</li>
          <li>Contribuye a proyectos open source</li>
        </ol>
      `
    }
  ]

  // Buscar el post por ID
  const post = blogPosts.find(p => p.id === parseInt(id))

  // Si no se encuentra el post, mostrar error
  if (!post) {
    return (
      <div className="blog-post">
        <div className="container">
          <h1>Post no encontrado</h1>
          <Link to="/blog" className="btn">← Volver al Blog</Link>
        </div>
      </div>
    )
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