import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./styles/App.css";

// Importa tus páginas
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Sistema de stream HTTP - Estrellas Fugaces
    let httpAnimationId = null;
    let isHttpStreaming = true;
    const httpMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'];
    const httpStatuses = ['200', '201', '204', '400', '401', '403', '404', '500', '502', '503'];

    const createHttpRequest = () => {
      if (!isHttpStreaming) return;
    
      const httpStream = document.getElementById('http-stream');
      if (!httpStream) return;
    
      const request = document.createElement('div');
      request.className = 'http-request';
      
      // Método HTTP aleatorio
      const method = httpMethods[Math.floor(Math.random() * httpMethods.length)];
      // Status aleatorio
      const status = httpStatuses[Math.floor(Math.random() * httpStatuses.length)];
      
      request.textContent = status;
      
      // Posición inicial VARIADA (no solo desde la izquierda)
      const startPositions = [
        { left: '-50px', top: Math.random() * 50 + '%' }, // Desde izquierda
        { right: '-50px', top: Math.random() * 50 + '%' }, // Desde derecha
        { top: '-30px', left: Math.random() * 80 + 10 + '%' }, // Desde arriba
        { bottom: '-30px', left: Math.random() * 80 + 10 + '%' } // Desde abajo
      ];
      
      const startPos = startPositions[Math.floor(Math.random() * startPositions.length)];
      Object.assign(request.style, startPos);
      
      // Trayectoria aleatoria
      const trajectory = Math.floor(Math.random() * 4); // 0, 1, 2, 3
      request.style.setProperty('--trajectory', trajectory);
      
      // Ángulo de rotación aleatorio más amplio
      const rotationAngle = -45 + Math.random() * 90; // -45° a +45°
      request.style.setProperty('--rotation', rotationAngle + 'deg');
      
      // Duración de animación más variada (2-8 segundos)
      const duration = 2 + Math.random() * 6;
      request.style.animationDuration = duration + 's';
      
      // Delay inicial aleatorio (0.2-2 segundos)
      request.style.animationDelay = (0.2 + Math.random() * 1.8) + 's';
      
      httpStream.appendChild(request);
      
      // Remover después de la animación
      setTimeout(() => {
        if (request.parentNode) {
          request.parentNode.removeChild(request);
        }
      }, (duration + 2) * 1000);
    };

    const startHttpStream = () => {
      if (!isHttpStreaming) return;
      
      // Crear nueva estrella fugaz cada 1-3 segundos
      const interval = 1000 + Math.random() * 2000;
      setTimeout(() => {
        createHttpRequest();
        startHttpStream();
      }, interval);
    };

    // Iniciar stream HTTP
    startHttpStream();

    // Cleanup
    return () => {
      isHttpStreaming = false;
      
      // Limpiar stream HTTP
      const httpStream = document.getElementById('http-stream');
      if (httpStream) {
        httpStream.innerHTML = '';
      }
    };
  }, []);

  return (
// Quita el basename para que funcione en la raíz
<Router>
  <div ref={containerRef} className="app">
    {/* Stream de peticiones HTTP en el fondo */}
    <div className="http-stream" id="http-stream"></div>
    
    <Header />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </main>
    <Footer />
  </div>
</Router>
  );
}

export default App;